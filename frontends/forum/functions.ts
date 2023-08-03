

const fn = {
    "tab": function (arrayMain, arrFinish) {
        arrFinish = [];
        
        if(this.Static.speakersTabName == 'CryptoЮГ2022'){
            arrayMain.forEach((item)=>{
                if(item.visited.includes('CryptoЮГ2022') && arrFinish.length <= 6){
                    arrFinish.push(item);
                }
            })
        }
        console.log('=d74464=', arrFinish)
        this.init()
        // arrayMain.forEach((item)=>{
        //     if(item.visited.includes('CryptoЮГ2023') && arrFinish.length <= 6){
        //         arrFinish.push(item);
        //     }
        //     if(item.visited.includes('CryptoЮГ2022') && arrFinish.length <= 6){
        //         arrFinish.push(item);
        //     }
        // })
    }
}

export { fn }