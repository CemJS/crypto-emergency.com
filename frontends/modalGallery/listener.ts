export const finish = function (data, name, t) {
    setTimeout(() => {
        this.Ref.modalWindow.classList.add('activeModal');
        this.Static.body.classList.add('activeModal');
        this.Static.body.style.overflow = 'hidden';
    }, 100)
    return
}

const ico = function({ records }){
    console.log('=627aeb=', records)
    this.Static.arr = records
    this.init()
}

export const cross = [{ "front": "ico", fn: ico }]