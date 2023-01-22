import Encoding from 'encoding-japanese';

const aucDataTable =
    [0xAF, 0x7E, 0xF5, 0xE7, 0xDD, 0xF9, 0xBE, 0xEE, 0xED, 0xBE, 0xCF, 0xBE, 0x9F, 0xBB, 0x7B, 0xE7
        , 0xE7, 0x5F, 0xF5, 0xEE, 0xF5, 0xEE, 0xBE, 0xF6, 0xED, 0xFA, 0x77, 0x3F, 0xE7, 0x9F, 0xEB, 0x3F
        , 0xF3, 0xF3, 0xDE, 0xF3, 0x77, 0xDD, 0xF3, 0xE7, 0x7E, 0xEE, 0xED, 0xDD, 0xE7, 0xF5, 0x3F, 0xEB
        , 0x3F, 0x3F, 0x7D, 0x77, 0xFA, 0xD7, 0xEB, 0xED, 0xEE, 0xE7, 0x7E, 0xAF, 0x9F, 0xBB, 0xF3, 0xFC
        , 0xDE, 0xDE, 0xBE, 0xDE, 0x7E, 0xF9, 0x9F, 0xF5, 0xBD, 0xFC, 0x7D, 0xF9, 0xDE, 0xBD, 0xDB, 0xDE
        , 0x6F, 0xFC, 0xE7, 0xAF, 0xBD, 0x5F, 0x7D, 0x6F, 0x7B, 0x77, 0xBD, 0xF6, 0xDB, 0xAF, 0xF6, 0xB7
        , 0x6F, 0xB7, 0xBB, 0xCF, 0x9F, 0x5F, 0xF5, 0x7D, 0xFA, 0x7E, 0x7B, 0xE7, 0xF5, 0xDD, 0x5F, 0xCF
        , 0x77, 0xEB, 0xDE, 0xF5, 0x5F, 0x6F, 0x77, 0x9F, 0xAF, 0xEE, 0x7B, 0x6F, 0xCF, 0xDD, 0xDD, 0xBE
        , 0xFA, 0x9F, 0xCF, 0x7D, 0xCF, 0xBE, 0x7B, 0xFC, 0xF5, 0xDB, 0xDE, 0xE7, 0xEE, 0xF9, 0xF9, 0xDD
        , 0xF3, 0xDE, 0xF5, 0xCF, 0x6F, 0xCF, 0xDB, 0xBB, 0xFA, 0xFC, 0xF9, 0xF6, 0xE7, 0xDB, 0xFC, 0xF3
        , 0xB7, 0xCF, 0x6F, 0xDD, 0xD7, 0xF9, 0xBB, 0x7D, 0xBD, 0xDD, 0x3F, 0x5F, 0xDE, 0xF6, 0x7E, 0xE7
        , 0xFA, 0xBE, 0xCF, 0xE7, 0xAF, 0xFA, 0xBE, 0xFA, 0xEB, 0xBE, 0xAF, 0xE7, 0xBE, 0xDE, 0xF9, 0x3F
        , 0xF3, 0x6F, 0xCF, 0x6F, 0xB7, 0xB7, 0xEE, 0xF6, 0xCF, 0xF3, 0x9F, 0xDB, 0x7B, 0xD7, 0xEB, 0xED
        , 0x3F, 0xED, 0xF3, 0x77, 0xAF, 0x00, 0x00, 0x00, 0x40, 0x00, 0x00, 0x00, 0x48, 0x00, 0x00, 0x00
        , 0xD4, 0x5A, 0xAE, 0x3F, 0x04, 0x00, 0x00, 0x00, 0x6F, 0x00, 0x00, 0x00, 0x40, 0x00, 0x00, 0x00
        , 0x49, 0x00, 0x00, 0x00, 0x45, 0x00, 0x00, 0x00, 0xFD, 0xFE, 0x00, 0x00, 0x09, 0x00, 0x00, 0x00
        , 0x08, 0x00, 0x00, 0x00, 0x64, 0x00, 0x00, 0x00, 0x64, 0x00, 0x00, 0x00, 0x7B, 0x7D, 0xB7, 0xBD
        , 0xAF, 0xBB, 0x3F, 0x7D, 0xDB, 0xAF, 0xEE, 0xB7, 0x7E, 0x7E, 0xF6, 0x77, 0x77, 0xBB, 0xE7, 0x77
        , 0x9F, 0x7B, 0xF6, 0x7D, 0xF5, 0xF5, 0x6F, 0x5F, 0xED, 0x7E, 0xDE, 0xF3, 0xF5, 0xF5, 0x9F, 0xDE
        , 0xF3, 0xFC, 0xEB, 0xF9, 0x5F, 0xAF, 0xF3, 0xD7, 0xFA, 0xDD, 0x5F, 0xBB, 0xEB, 0xE7, 0xD7, 0xD7
        , 0xF3, 0xD7, 0x7B, 0x7D, 0xF5, 0xEB, 0xBB, 0xF5, 0x7E, 0xDD, 0xFA, 0xCF, 0xED, 0xFA, 0xFA, 0xF6
        , 0xEE, 0xF6, 0x6F, 0x00, 0x7B, 0x7D, 0xB7, 0xBD, 0xAF, 0xBB, 0x3F, 0x7D, 0xDB, 0xAF, 0xEE, 0xB7
        , 0x7E, 0x7E, 0xF6, 0x77, 0x77, 0xBB, 0xE7, 0x77, 0x9F, 0x7B, 0xF6, 0x7D, 0xF5, 0xF5, 0x6F, 0x5F
        , 0xED, 0x7E, 0xDE, 0xF3, 0xF5, 0xF5, 0x9F, 0xDE, 0xF3, 0xFC, 0xEB, 0xF9, 0x5F, 0xAF, 0xF3, 0xD7
        , 0xFA, 0xDD, 0x5F, 0xBB, 0xEB, 0xE7, 0xD7, 0xD7, 0xF3, 0xD7, 0x7B, 0x7D, 0xF5, 0xEB, 0xBB, 0xF5
        , 0x7E, 0xDD, 0xFA, 0xCF, 0xED, 0xFA, 0xFA, 0xF6, 0xEE, 0xF6, 0x6F, 0x00, 0xD0, 0xC0, 0x7C, 0x00
        , 0xC0, 0xC0, 0x7C, 0x00, 0xB4, 0xC0, 0x7C, 0x00, 0xA8, 0xC0, 0x7C, 0x00, 0xA0, 0xC0, 0x7C, 0x00
        , 0x98, 0xC0, 0x7C, 0x00, 0xA0, 0x31, 0x7D, 0x00];

const xorKeys =
    [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
        , 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
        , 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
        , 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
        , 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x3F, 0x5F, 0xB7, 0x7D, 0xE7, 0xCF, 0xFA, 0x5F, 0xDB
        , 0xCF, 0xAF, 0xDD, 0x7E, 0xEB, 0xEE, 0xED, 0x7E, 0xDE, 0x77, 0xCF, 0x7E, 0xD7, 0xEE, 0xB7, 0xBD
        , 0x6F, 0x9F, 0x7D, 0xBE, 0xE7, 0xED, 0x6F, 0xDD, 0xED, 0xDB, 0xF3, 0xDB, 0xAF, 0x3F, 0xDB, 0xEE
        , 0xD7, 0x7D, 0xDD, 0x6F, 0x9F, 0x6F, 0xAF, 0x7E, 0x5F, 0x3F, 0x7E, 0xFA, 0x77, 0xBE, 0xFA, 0x9F
        , 0xE7, 0xE7, 0xBB, 0xDD, 0xDD, 0xED, 0xE7, 0xEE, 0x9F, 0x7B, 0xEE, 0xAF, 0x5F, 0xAF, 0xBD, 0xBB
        , 0x7E, 0x6F, 0x7D, 0xCF, 0xF3, 0x9F, 0x9F, 0xB7, 0xDD, 0xD7, 0xED, 0x7D, 0xBB, 0xDB, 0xBB, 0xDB
        , 0x9F, 0xED, 0xBB, 0xBB, 0xEB, 0xDE, 0xAF, 0xDB, 0x5F, 0xFA, 0x6F, 0xB7, 0xCF, 0xBE, 0xDE, 0xAF
        , 0xB7, 0xDD, 0xB7, 0xAF, 0x6F, 0xDE, 0xEB, 0xE7, 0x6F, 0x3F, 0xF3, 0xFA, 0xF3, 0xBB, 0xFC, 0x7E
        , 0xDD, 0x7E, 0xE7, 0x7E, 0xB7, 0xBE, 0xEE, 0xFA, 0xF9, 0xB7, 0x5F, 0x7B, 0xED, 0x3F, 0x7B, 0x6F
        , 0xB7, 0xD7, 0x6F, 0xFC, 0x9F];

export const decodeScenarioBuffer = (data, decodeKey) => {
    const tableOffset = ((decodeKey * 9) << 3) - decodeKey;
    let encCounter = 0;
    const result = [];
    for (let i = 0; i < data.length; i++) {
        const endata = (aucDataTable[encCounter + tableOffset] + xorKeys[encCounter + tableOffset]) & 255;
        result.push(data[i] ^ endata);
        encCounter++;
        if (encCounter >= 0x47) encCounter = 0;
    }
    return Buffer.from(result);
}

export const sjisByteToString = (sjisByteArray) => {
    var unicodeArray = Encoding.convert(sjisByteArray, {
        to: 'UNICODE',
        from: 'SJIS'
    });
    var str = Encoding.codeToString(unicodeArray); // 文字コード値の配列から文字列に変換
    return str;
}