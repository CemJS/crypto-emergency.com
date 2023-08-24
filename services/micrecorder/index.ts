let audioBlobs
let stream;
let recorder;
let textT = ""

const textTonum = function (text) {
    console.log('=ebacc2=', text.length)

}


const goSpeck = function (text) {
    console.log('=56e459 goSpeck=', text)
    var synth = window.speechSynthesis;

    // console.log('=98bf9d=', synth.getVoices())

    const utterance = new SpeechSynthesisUtterance(text);


    utterance.voice = synth.getVoices()[0];
    utterance.pitch = 8.1;  // пониже
    utterance.rate = 1.4;   // побыстрее
    // utterance.volume = 0.9; // потише
    synth.speak(utterance);

    // utterance.pitch = 5.1;  // пониже
    // utterance.rate = 1.3;   // побыстрее
    // utterance.volume = 0.9; // потише
    // window.speechSynthesis.speak(utterance);
}
async function readAllChunks(readableStream, tmp) {
    let numDot = 1
    const reader = readableStream.getReader();
    const chunks = [];

    let done, value;
    while (!done) {
        ({ value, done } = await reader.read());
        if (done) {
            return chunks;
        }
        // console.log('=5dc994=', new TextDecoder().decode(value))
        textT += new TextDecoder().decode(value)
        let tm = textT.split("===>")
        tmp.Static.textAudio = tm[0]
        tmp.Static.textAnswer = tm[1]
        tmp.init()
        // let tmpSpeak = tmp.Static.textAnswer.split(".")
        let tmpSpeak = tmp.Static.textAnswer.replace(/\.\s+/g, '.|').replace(/\?\s/g, '?|').replace(/\!\s/g, '!|').split("|")
        // console.log('=52a699=', tmpSpeak)
        if (tmpSpeak.length > numDot) {
            goSpeck(tmpSpeak[numDot - 1])
            numDot++

        }
        // chunks.push(value);
    }
}

export const loader = async function (Variable) {
    // console.log('=8a7d7a=', "micrecorder")
    let text = "t"
    // console.log('=50e907=', text.charCodeAt(0))
}

export const activate = async function () {
    console.log('=8a7d7a=', "activate")
    stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    recorder = new MediaRecorder(stream);
}

export const start = async function () {
    // if (!stream) {
    textT = ""
    window.speechSynthesis.cancel();
    let tmp = this
    stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    recorder = new MediaRecorder(stream, {
        mimeType: "audio/webm",
    });
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
        // const utterance = new SpeechSynthesisUtterance("Я уже обрабатываю твой запрос!");
        // utterance.pitch = 2.1;  // пониже

        // utterance.rate = 2.6;   // побыстрее
        // utterance.volume = 0.9; // потише
        // window.speechSynthesis.speak(utterance);

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
                let tmpSpeak = tmp.Static.textAnswer.replace(/\.\s+/g, '.|').replace(/\?\s/g, '?|').replace(/\!\s/g, '!|').split("|")

                goSpeck(tmpSpeak[tmpSpeak.length - 1])
                // const utterance = new SpeechSynthesisUtterance(tmp.Static.textAnswer);
                // utterance.pitch = 2.1;  // пониже
                // utterance.rate = 2.6;   // побыстрее
                // utterance.volume = 0.9; // потише
                // window.speechSynthesis.speak(utterance);
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


export const startImg = async function () {
    textT = ""
    window.speechSynthesis.cancel();
    let tmp = this
    stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    recorder = new MediaRecorder(stream, {
        mimeType: "audio/webm",
    });
    audioBlobs = []
    recorder.start();
    recorder.addEventListener("dataavailable", async (event) => {
        audioBlobs.push(event.data);
    });

    recorder.addEventListener("stop", async (event) => {
        let form = new FormData();
        form.append('file', audioBlobs[0]);

        fetch('/api/audioImg', {
            method: 'POST',
            body: form
        })
            .then(async (res) => {
                let text = await res.text()
                console.log('=dea62a=', text)
                // tmp.init()
            })
    });
}

export const stop = async function () {
    recorder.stop();
}



