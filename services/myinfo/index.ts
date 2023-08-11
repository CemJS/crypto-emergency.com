

export const loader = async function (Variable) {

    let eventSource = new EventSource(`${Variable._Api}MyInfo?uuid=${Variable.myInfo.uuid}`)

    eventSource.addEventListener('message', ({ data }) => {
        if (!data || data == "null") {
            return
        }
        let records = JSON.parse(data)
        Variable.myInfo = Object.assign(Variable.myInfo, records)
    });
}
