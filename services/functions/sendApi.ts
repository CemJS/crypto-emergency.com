



export const sendApi = async function (url: string, data: any) {

    console.log('=158bfa=', this)

    try {
        let answer = await fetch(url, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })

        let json = await answer.json()
        return json

    } catch (error) {
        return { error }
    }


}