let audioBlobs
let stream;
let recorder;
let textT = ""

const textTonum = function (text) {
    console.log('=ebacc2=', text.length)

}

async function readAllChunks(readableStream, tmp) {
    const reader = readableStream.getReader();
    const chunks = [];

    let done, value;
    while (!done) {
        ({ value, done } = await reader.read());
        if (done) {
            return chunks;
        }
        console.log('=5dc994=', new TextDecoder().decode(value))
        textT += new TextDecoder().decode(value)
        let tm = textT.split("===>")
        tmp.Static.textAudio = tm[0]
        tmp.Static.textAnswer = tm[1]
        tmp.init()
        // chunks.push(value);
    }
}

export const loader = async function (Variable) {
    // console.log('=8a7d7a=', "micrecorder")
    let text = "t"
    console.log('=50e907=', text.charCodeAt(0))
}

export const activate = async function () {
    console.log('=8a7d7a=', "activate")
    stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    recorder = new MediaRecorder(stream);
}

export const start = async function () {
    // if (!stream) {
    textT = ""
    let tmp = this
    stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    recorder = new MediaRecorder(stream);
    // }
    console.log('=8a7d7a=', "start")
    audioBlobs = []
    recorder.start();
    recorder.addEventListener("dataavailable", async (event) => {
        console.log('=c39f03=', "dataavailable")
        audioBlobs.push(event.data);
        // Write chunks to the file.
        //   await writable.write(event.data);
        if (recorder.state === "inactive") {
            // Close the file when the recording stops.
            // await writable.close();
        }
    });

    recorder.addEventListener("stop", async (event) => {
        // console.log('=c39f03=', "stop")
        // console.log('=7cab16=', audioBlobs)

        let form = new FormData();
        form.append('file', audioBlobs[0]);


        fetch('/api/audio', {
            method: 'POST',
            body: form
        })
            .then(async (res) => {

                // const reader = res.body.getReader();
                // const chunks = [];

                // let done, value;
                // while (!done) {
                //     ({ value, done } = await reader.read());
                //     if (done) {
                //         return chunks;
                //     }
                //     chunks.push(value);
                // }
                console.log(await readAllChunks(res.body, tmp));
                // let text = await res.text()
                // console.log('=e6067b=', text)
                // let tm = text.split("===>")
                // tmp.Static.textAudio = tm[0]
                // tmp.Static.textAnswer = tm[1]
                // tmp.init()
            })
        // console.log(await readAllChunks(response.body));
        // const reader = await response.body.getReader();
        // const chunks = [];

        // let done, value;
        // while (!done) {
        //     ({ value, done } = await reader.read());
        //     if (done) {
        //         return chunks;
        //     }
        //     chunks.push(value);
        // }
    });
}

export const stop = async function () {
    recorder.stop();
}


