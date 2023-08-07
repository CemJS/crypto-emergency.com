export const loader = function () {

    let eventSource = this.eventSource(`Questions?uuid=${this.Variable.myInfo.uuid}`)

    eventSource.addEventListener('message', ({ data }) => {
        console.log('=208caf=', data)
    });

}