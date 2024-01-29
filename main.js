// Import LLM app
import {LLM} from "llm.js/llm.js";

// State variable to track model load status
var model_loaded = false;

// Initial Prompt
var initial_prompt = "def fibonacci(n):"

// Callback functions
const on_loaded = () => {
    model_loaded = true;
}
const write_result = (text) => {
    var res = document.createElement('li');
    var rescontent = document.createElement('div');
    res.appendChild(rescontent);
    rescontent.setAttribute('class', 'message message_in');
    rescontent.textContent = text;
    document.getElementById('dialog').appendChild(res);
}
const run_complete = () => {}

// Configure LLM app"
const app = new LLM(
    // Type of Model
    'STARCODER',

    // Model URL
    'https://huggingface.co/rahuldshetty/ggml.js/resolve/main/starcoder.bin',

    // Model Load callback function
    on_loaded,

    // Model Result callback function
    write_result,

    // On Model completion callback function
    run_complete
);

// Download & Load Model GGML bin file
app.load_worker();

// Trigger model once its loaded
const checkInterval = setInterval(timer, 5000);

function timer() {
    if(model_loaded){
        app.run({
            prompt: initial_prompt,
            top_k: 1
        });
        clearInterval(checkInterval);
    } else{
        console.log('Waiting...')
    }
}

//SENDING MESSAGE

var mes

async function Send_message() {
    const write_input = (mes) => {
        var out = document.createElement('li');
        var outcontent = document.createElement('div');
        out.appendChild(outcontent);
        outcontent.setAttribute('class', 'message message_out');
        outcontent.textContent = mes.valueOf()
        document.getElementById('dialog').appendChild(out);
    }
    await LLM(mes.valueOf())
}

mes = document.getElementById('send')
const sendButton = document.getElementById(message_send_button)
sendButton.addEventListener("click", Send_message)
