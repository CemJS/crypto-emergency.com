import { v4 as uuidv4 } from 'uuid';
import { openDB } from 'idb';
import moment from 'moment';

let idb: any = {}

const idbPut = async function (table, value) {
    return await idb[table].put(value)
}

const idbGet = async function (table, key) {
    return await idb[table].get(key)
}

export { uuidv4, moment }

export const loader = async function (Variable) {
    if (this.Variable) {
        Variable = this.Variable
    }
    await openDB('CryptoEmergency', 1, {
        upgrade: async (db, oldVersion) => {
            if (oldVersion == 0) {
                const Auth = db.createObjectStore('Auth', { autoIncrement: true });
                Auth.add({ uuid: uuidv4() })
                let tmp = await Auth.get(1)
                //   MyInfo.createIndex('date', 'date');
            }
        },
    }).then(async (db) => {
        idb.Auth = db.transaction("Auth").objectStore('Auth')
    });
    Variable.myInfo = await idbGet("Auth", 1)
    return
}