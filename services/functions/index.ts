import { v4 as uuidv4 } from 'uuid';
import { openDB } from 'idb';
import moment from 'moment';
import validator from 'validator'
import { validateForms } from './validateForms';
import { editText } from './editText';
import { sliceString } from './sliceString';

let idb: any = {}

const idbPut = async function (table, value) {
  return await idb[table].put(value)
}

const idbGet = async function (table, key) {
  return await idb[table].get(key)
}

const validateEmail = function (email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );
}

const dateFormat = function (data, type) {
  if (!data) {
    return
  }

  moment.locale("ru");
  data = data.replace(' ', 'T')
  switch (type) {
    case "now":
      let secondsBefor = Math.round(
        (Number(moment().format("x")) - Number(moment(data).format("x"))) / 1000
      );
      if (secondsBefor < 86400) {
        return moment(data).fromNow();
      } else {
        return moment(data).format("DD MMMM YYYY");
      };
    case "point":
      return moment(data).format("YYYY.MM.DD")
    case "time":
      return moment(data).format('YYYY-MM-DD HH:mm')
    case "chatdate":
      return moment(data).format("dd, D MMM");
    case "course":
      return moment(data).format("D MMMM");
    case "chattime":
      let secondsBefore = Math.round(
        (Number(moment().format("x")) - Number(moment(data).format("x"))) / 1000
      );
      return moment(data).format("HH:mm");
    case "chatlist":
      let secondBefore = Math.round(
        (Number(moment().format("x")) - Number(moment(data).format("x"))) / 1000
      );
      if (secondBefore < 86400) {
        return moment(data).format("HH:mm");
      } else if (secondBefore < 604800) {
        return moment(data).format("dddd");
      } else {
        return moment(data).format("DD.MM.YY");
      };
    default:
      return moment(data).format("YYYY-MM-DD");
  }
}

export {
  uuidv4,
  dateFormat,
  validateEmail,
  validateForms,
  validator,
  editText,
  sliceString
}

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