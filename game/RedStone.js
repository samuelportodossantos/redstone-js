import MainCanvas from "./MainCanvas";
import GameMap from "./GameMap";
import LoadingScreen from "./interface/LoadingScreen";
import Listener from "./Listener";
import Player from "./Player";
import CommonUI from "./interface/CommonUI";
import { fetchBinaryFile } from "../utils";
import { DATA_DIR, SAVE_PLAYER_LOCATION } from "./Config";
import BufferReader from "../utils/BufferReader";
import MonsterSource from "./models/MonsterSource";
import EffectDataManager from "./EffectDataManager";
import Camera from "./Camera";
import BgmPlayer from "./BgmPlayer";
import SoundManager from "./SoundManager";
import Minimap from "./Minimap";

class RedStone {

    /**
     * @type {MainCanvas}
     */
    static mainCanvas;
    /**
     * @type {GameMap}
     */
    static gameMap;
    /**
     * @type {Minimap}
     */
    static miniMap;
    /**
     * @type {Player}
     */
    static player;
    /**
     * @type {{[index: Number]: {size: [Number, Number], type: Number, name: String, fileName: String}}}
     */
    static mapList = {};
    /**
     * @type {object}
     */
    static lastLocation;

    static async init() {
        RedStone.mainCanvas = new MainCanvas();
        RedStone.bgmPlayer = new BgmPlayer();
        RedStone.miniMap = new Minimap();
        RedStone.gameMap = new GameMap();
        RedStone.player = new Player();

        // display loading screen
        await LoadingScreen.init();
        LoadingScreen.render();

        // load common resources
        await CommonUI.init();

        // load map list
        await this.loadMapList();

        // load monsters
        await MonsterSource.loadAllMonsters();

        // check save data

        // load common resources
        await RedStone.gameMap.loadCommon();

        // load effects
        await EffectDataManager.init();

        // load bgm map
        await SoundManager.init();

        // load player

        // load player location
        RedStone.lastLocation = this.loadPlayerLocation();
        
        // init map
        await RedStone.gameMap.init();

        // init minimap
        await RedStone.miniMap.init();

        if (SAVE_PLAYER_LOCATION) {
            // set player position
            if (this.lastLocation?.position) {
                const { x, y } = this.lastLocation?.position;
                this.player.setPosition(x, y);
                Camera.setPosition(x, y);
            }
        }

        // water mark click event
        document.querySelector(".water-mark").addEventListener("click", () => {
            location.href = "https://github.com/LostMyCode/redstone-js";
        });

        // save player location before unload
        window.addEventListener("beforeunload", (e) => {
            e.preventDefault();
            if (SAVE_PLAYER_LOCATION) {
                this.savePlayerLocation();
            }
        });

        LoadingScreen.destroy();

        this.initialized = true;
    }

    static async loadMapList() {
        const mapListData = await fetchBinaryFile(`${DATA_DIR}/mapList.dat`);
        const br = new BufferReader(mapListData);

        while (true) {
            const index = br.readUInt16LE();
            if (index === 0xFFFF) break;
            this.mapList[index] = {
                size: br.readStructUInt16LE(2),
                type: br.readUInt16LE(),
                name: br.readString(0x40, "sjis"),
                fileName: br.readString(0x40, "sjis")
            }
        }

        const event = new CustomEvent("mapListLoaded", { detail: this.mapList });
        window.dispatchEvent(event);
        window.mapList = this.mapList;
    }

    static loadMap(rmdFileName) {
        if (!this.initialized) return;
        this.gameMap.moveField(rmdFileName);
    }

    static savePlayerLocation() {
        const lastLocation = {
            map: RedStone.gameMap.currentRmdFileName,
            position: { x: RedStone.player.x, y: RedStone.player.y }
        }
        localStorage.setItem("LastLocation", JSON.stringify(lastLocation));
    }

    static loadPlayerLocation() {
        const lastLocation = localStorage.getItem("LastLocation");
        if (lastLocation) return JSON.parse(lastLocation);
        return null;
    }
}

window.RedStone = RedStone;

export default RedStone;