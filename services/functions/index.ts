import { v4 as uuidv4 } from 'uuid';
import { openDB } from 'idb';

export { uuidv4 }

export const loader = function (Variable) {
    if (this.Variable) {
        Variable = this.Variable
    }
    // console.log('=472cf1=', this, Variable)
    if (!Variable.uuid) {
        Variable.uuid = uuidv4()
    }
    return
}