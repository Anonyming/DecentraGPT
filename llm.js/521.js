import*as e from "./wasm/dollyv2.js";var t={d:(e, o)=>{for(var a in o)t.o(o,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:o[a]})},o:(e, t)=>Object.prototype.hasOwnProperty.call(e,t)};const o=(a={default:()=>e.default},n={},t.d(n,a),n);var a,n;const l=[/main:.*/,/.*_model_load:.*/];let s;const r= e=>{console.log("model:"+e),(e=>{for(var t=0; t<l.length; t+=1)if(l[t].test(e))return!1;return!0})(e)&&postMessage({event:3,line:e})},d=async e=>{const t={noInitialRun:!0,print:r};s=await(0,o.default)(t),function(e, t){const o=new XMLHttpRequest;o.open("GET",e,!0),o.responseType="arraybuffer",o.onload= e=>{const t=o.response;if(t){const e=new Uint8Array(t);a=e,s.FS_createPath("/","models",!0,!0),s.FS_createDataFile("/models","model.bin",a,!0,!0,!0),postMessage({event:1}),console.log("model: Loaded")}var a},o.send(null)}(e)};self.addEventListener("message",(e=>{switch(e.data.event){case 0:d(e.data.url);break;case 2:((e, t, o, a, n, l, r, d)=>{console.log(t);const p=["-p",e.toString(),"-n",o.toString(),"--top_k",a.toString(),"--top_p",n.toString(),"--temp",l.toString(),"-m","/models/model.bin"];console.log("model: calling main..."),s.callMain(p),postMessage({event:4}),console.log("model: Completed")})(e.data.prompt,e.data.seed,e.data.max_token_len,e.data.top_k,e.data.top_p,e.data.temp,e.data.repeat_last_n,e.data.repeat_penalty)}}),!1);