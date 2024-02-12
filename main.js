// Import llm.js app
import {LLM} from "llm.js/llm.js";

// State the input variable
let mes= document.getElementById('send_input');

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
    var res_content = document.createElement('div');
    res.appendChild(res_content);
    res_content.setAttribute('class', 'message message_in');
    res_content.textContent = text;
    document.getElementById('dialog').appendChild(res);
}
const run_complete = () => {}

// Configure llm.js app"
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

async function Send_message() {
    alert("Send")
    var out = document.createElement('li');
    var out_content = document.createElement('div');
    out.appendChild(out_content);
    out_content.setAttribute('class', 'message message_out');
    out_content.textContent = mes.value()
    document.getElementById('dialog').appendChild(out);
    await app(mes.value())
}
