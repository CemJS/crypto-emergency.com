

export const loader = async function (Variable) {

    console.log('=97eada Variable.1 =', Variable.myInfo)


    let eventSource = new EventSource(`${Variable._Api}MyInfo?uuid=${Variable.myInfo.uuid}`)

    eventSource.addEventListener('message', ({ data }) => {
        if (!data) {
            return
        }
        let records = JSON.parse(data)
        console.log('=97eada Variable.myInfo =', Variable.myInfo)
        console.log('=97eada records =', records)

        Variable.myInfo = Object.assign(Variable.myInfo, records)
        console.log('=97eada Variable.myInfo assign =', Variable.myInfo)

    });
}
