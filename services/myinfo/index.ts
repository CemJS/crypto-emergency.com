

export const loader = async function (Variable: any) {

    let eventSource = new EventSource(`/api/events/MyInfo?uuid=${Variable.myInfo.uuid}`)

    eventSource.addEventListener('update', ({ data }) => {
        if (!data || data == "null") {
            return
        }
        let myInfo = JSON.parse(data)
        Variable.myInfo = Object.assign(Variable.myInfo, myInfo)
    });
}
