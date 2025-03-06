var e,t,n,s,o,i,a,r,l,c,d,u,h,f,g,E,m,p,C,y,O,I,v,_,T,N=globalThis,w={},R={},A=N.parcelRequire94c2;null==A&&((A=function(e){if(e in w)return w[e].exports;if(e in R){var t=R[e];delete R[e];var n={id:e,exports:{}};return w[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){R[e]=t},N.parcelRequire94c2=A),A.register;var S=A("47Mwn"),b=A("ilpIi");(e=h||(h={})).STRING="string",e.NUMBER="number",e.INTEGER="integer",e.BOOLEAN="boolean",e.ARRAY="array",e.OBJECT="object",(t=f||(f={})).LANGUAGE_UNSPECIFIED="language_unspecified",t.PYTHON="python",(n=g||(g={})).OUTCOME_UNSPECIFIED="outcome_unspecified",n.OUTCOME_OK="outcome_ok",n.OUTCOME_FAILED="outcome_failed",n.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded";/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M=["user","model","function","system"];(s=E||(E={})).HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",s.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",s.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",s.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",s.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",s.HARM_CATEGORY_CIVIC_INTEGRITY="HARM_CATEGORY_CIVIC_INTEGRITY",(o=m||(m={})).HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",o.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",o.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",o.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",o.BLOCK_NONE="BLOCK_NONE",(i=p||(p={})).HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",i.NEGLIGIBLE="NEGLIGIBLE",i.LOW="LOW",i.MEDIUM="MEDIUM",i.HIGH="HIGH",(a=C||(C={})).BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",a.SAFETY="SAFETY",a.OTHER="OTHER",(r=y||(y={})).FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",r.STOP="STOP",r.MAX_TOKENS="MAX_TOKENS",r.SAFETY="SAFETY",r.RECITATION="RECITATION",r.LANGUAGE="LANGUAGE",r.BLOCKLIST="BLOCKLIST",r.PROHIBITED_CONTENT="PROHIBITED_CONTENT",r.SPII="SPII",r.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",r.OTHER="OTHER",(l=O||(O={})).TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",l.RETRIEVAL_QUERY="RETRIEVAL_QUERY",l.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",l.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",l.CLASSIFICATION="CLASSIFICATION",l.CLUSTERING="CLUSTERING",(c=I||(I={})).MODE_UNSPECIFIED="MODE_UNSPECIFIED",c.AUTO="AUTO",c.ANY="ANY",c.NONE="NONE",(d=v||(v={})).MODE_UNSPECIFIED="MODE_UNSPECIFIED",d.MODE_DYNAMIC="MODE_DYNAMIC";/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class x extends L{constructor(e,t){super(e),this.response=t}}class D extends L{constructor(e,t,n,s){super(e),this.status=t,this.statusText=n,this.errorDetails=s}}class k extends L{}class H extends L{}(u=_||(_={})).GENERATE_CONTENT="generateContent",u.STREAM_GENERATE_CONTENT="streamGenerateContent",u.COUNT_TOKENS="countTokens",u.EMBED_CONTENT="embedContent",u.BATCH_EMBED_CONTENTS="batchEmbedContents";class P{constructor(e,t,n,s,o){this.model=e,this.task=t,this.apiKey=n,this.stream=s,this.requestOptions=o}toString(){var e,t;let n=(null===(e=this.requestOptions)||void 0===e?void 0:e.apiVersion)||"v1beta",s=(null===(t=this.requestOptions)||void 0===t?void 0:t.baseUrl)||"https://generativelanguage.googleapis.com",o=`${s}/${n}/${this.model}:${this.task}`;return this.stream&&(o+="?alt=sse"),o}}async function U(e){var t;let n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",function(e){let t=[];return(null==e?void 0:e.apiClient)&&t.push(e.apiClient),t.push("genai-js/0.23.0"),t.join(" ")}(e.requestOptions)),n.append("x-goog-api-key",e.apiKey);let s=null===(t=e.requestOptions)||void 0===t?void 0:t.customHeaders;if(s){if(!(s instanceof Headers))try{s=new Headers(s)}catch(e){throw new k(`unable to convert customHeaders value ${JSON.stringify(s)} to Headers: ${e.message}`)}for(let[e,t]of s.entries()){if("x-goog-api-key"===e)throw new k(`Cannot set reserved header name ${e}`);if("x-goog-api-client"===e)throw new k(`Header name ${e} can only be set using the apiClient field`);n.append(e,t)}}return n}async function F(e,t,n,s,o,i){let a=new P(e,t,n,s,i);return{url:a.toString(),fetchOptions:Object.assign(Object.assign({},function(e){let t={};if((null==e?void 0:e.signal)!==void 0||(null==e?void 0:e.timeout)>=0){let n=new AbortController;(null==e?void 0:e.timeout)>=0&&setTimeout(()=>n.abort(),e.timeout),(null==e?void 0:e.signal)&&e.signal.addEventListener("abort",()=>{n.abort()}),t.signal=n.signal}return t}(i)),{method:"POST",headers:await U(a),body:o})}}async function G(e,t,n,s,o,i={},a=fetch){let{url:r,fetchOptions:l}=await F(e,t,n,s,o,i);return B(r,l,a)}async function B(e,t,n=fetch){let s;try{s=await n(e,t)}catch(t){!function(e,t){let n=e;throw"AbortError"===n.name?(n=new H(`Request aborted when fetching ${t.toString()}: ${e.message}`)).stack=e.stack:e instanceof D||e instanceof k||((n=new L(`Error fetching from ${t.toString()}: ${e.message}`)).stack=e.stack),n}(t,e)}return s.ok||await $(s,e),s}async function $(e,t){let n,s="";try{let t=await e.json();s=t.error.message,t.error.details&&(s+=` ${JSON.stringify(t.error.details)}`,n=t.error.details)}catch(e){}throw new D(`Error fetching from ${t.toString()}: [${e.status} ${e.statusText}] ${s}`,e.status,e.statusText,n)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),q(e.candidates[0]))throw new x(`${J(e)}`,e);return function(e){var t,n,s,o;let i=[];if(null===(n=null===(t=e.candidates)||void 0===t?void 0:t[0].content)||void 0===n?void 0:n.parts)for(let t of null===(o=null===(s=e.candidates)||void 0===s?void 0:s[0].content)||void 0===o?void 0:o.parts)t.text&&i.push(t.text),t.executableCode&&i.push("\n```"+t.executableCode.language+"\n"+t.executableCode.code+"\n```\n"),t.codeExecutionResult&&i.push("\n```\n"+t.codeExecutionResult.output+"\n```\n");return i.length>0?i.join(""):""}(e)}if(e.promptFeedback)throw new x(`Text not available. ${J(e)}`,e);return""},e.functionCall=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),q(e.candidates[0]))throw new x(`${J(e)}`,e);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),Y(e)[0]}if(e.promptFeedback)throw new x(`Function call not available. ${J(e)}`,e)},e.functionCalls=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),q(e.candidates[0]))throw new x(`${J(e)}`,e);return Y(e)}if(e.promptFeedback)throw new x(`Function call not available. ${J(e)}`,e)},e}function Y(e){var t,n,s,o;let i=[];if(null===(n=null===(t=e.candidates)||void 0===t?void 0:t[0].content)||void 0===n?void 0:n.parts)for(let t of null===(o=null===(s=e.candidates)||void 0===s?void 0:s[0].content)||void 0===o?void 0:o.parts)t.functionCall&&i.push(t.functionCall);return i.length>0?i:void 0}const K=[y.RECITATION,y.SAFETY,y.LANGUAGE];function q(e){return!!e.finishReason&&K.includes(e.finishReason)}function J(e){var t,n,s;let o="";if((!e.candidates||0===e.candidates.length)&&e.promptFeedback)o+="Response was blocked",(null===(t=e.promptFeedback)||void 0===t?void 0:t.blockReason)&&(o+=` due to ${e.promptFeedback.blockReason}`),(null===(n=e.promptFeedback)||void 0===n?void 0:n.blockReasonMessage)&&(o+=`: ${e.promptFeedback.blockReasonMessage}`);else if(null===(s=e.candidates)||void 0===s?void 0:s[0]){let t=e.candidates[0];q(t)&&(o+=`Candidate was blocked due to ${t.finishReason}`,t.finishMessage&&(o+=`: ${t.finishMessage}`))}return o}function V(e){return this instanceof V?(this.v=e,this):new V(e)}"function"==typeof SuppressedError&&SuppressedError;/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;async function X(e){let t=[],n=e.getReader();for(;;){let{done:e,value:s}=await n.read();if(e)return j(function(e){let t=e[e.length-1],n={promptFeedback:null==t?void 0:t.promptFeedback};for(let t of e){if(t.candidates){let e=0;for(let s of t.candidates)if(n.candidates||(n.candidates=[]),n.candidates[e]||(n.candidates[e]={index:e}),n.candidates[e].citationMetadata=s.citationMetadata,n.candidates[e].groundingMetadata=s.groundingMetadata,n.candidates[e].finishReason=s.finishReason,n.candidates[e].finishMessage=s.finishMessage,n.candidates[e].safetyRatings=s.safetyRatings,s.content&&s.content.parts){n.candidates[e].content||(n.candidates[e].content={role:s.content.role||"user",parts:[]});let t={};for(let o of s.content.parts)o.text&&(t.text=o.text),o.functionCall&&(t.functionCall=o.functionCall),o.executableCode&&(t.executableCode=o.executableCode),o.codeExecutionResult&&(t.codeExecutionResult=o.codeExecutionResult),0===Object.keys(t).length&&(t.text=""),n.candidates[e].content.parts.push(t)}e++}t.usageMetadata&&(n.usageMetadata=t.usageMetadata)}return n}(t));t.push(s)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(e,t,n,s){return function(e){let[t,n]=(function(e){let t=e.getReader();return new ReadableStream({start(e){let n="";return function s(){return t.read().then(({value:t,done:o})=>{let i;if(o){if(n.trim()){e.error(new L("Failed to parse stream"));return}e.close();return}let a=(n+=t).match(W);for(;a;){try{i=JSON.parse(a[1])}catch(t){e.error(new L(`Error parsing JSON response: "${a[1]}"`));return}e.enqueue(i),a=(n=n.substring(a[0].length)).match(W)}return s()}).catch(e=>{let t=e;throw t.stack=e.stack,t="AbortError"===t.name?new H("Request aborted when reading from the stream"):new L("Error reading from the stream")})}()}})})(e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0}))).tee();return{stream:function(e){return function(e,t,n){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var s,o=n.apply(e,t||[]),i=[];return s={},a("next"),a("throw"),a("return"),s[Symbol.asyncIterator]=function(){return this},s;function a(e){o[e]&&(s[e]=function(t){return new Promise(function(n,s){i.push([e,t,n,s])>1||r(e,t)})})}function r(e,t){try{var n;(n=o[e](t)).value instanceof V?Promise.resolve(n.value.v).then(l,c):d(i[0][2],n)}catch(e){d(i[0][3],e)}}function l(e){r("next",e)}function c(e){r("throw",e)}function d(e,t){e(t),i.shift(),i.length&&r(i[0][0],i[0][1])}}(this,arguments,function*(){let t=e.getReader();for(;;){let{value:e,done:n}=yield V(t.read());if(n)break;yield yield V(j(e))}})}(t),response:X(n)}}(await G(t,_.STREAM_GENERATE_CONTENT,e,!0,JSON.stringify(n),s))}async function z(e,t,n,s){let o=await G(t,_.GENERATE_CONTENT,e,!1,JSON.stringify(n),s);return{response:j(await o.json())}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(e){if(null!=e){if("string"==typeof e)return{role:"system",parts:[{text:e}]};if(e.text)return{role:"system",parts:[e]};if(e.parts)return e.role?e:{role:"system",parts:e.parts}}}function ee(e){let t=[];if("string"==typeof e)t=[{text:e}];else for(let n of e)"string"==typeof n?t.push({text:n}):t.push(n);return function(e){let t={role:"user",parts:[]},n={role:"function",parts:[]},s=!1,o=!1;for(let i of e)"functionResponse"in i?(n.parts.push(i),o=!0):(t.parts.push(i),s=!0);if(s&&o)throw new L("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!s&&!o)throw new L("No content is provided for sending chat message.");return s?t:n}(t)}function et(e){let t;return t=e.contents?e:{contents:[ee(e)]},e.systemInstruction&&(t.systemInstruction=Z(e.systemInstruction)),t}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],es={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function eo(e){var t;if(void 0===e.candidates||0===e.candidates.length)return!1;let n=null===(t=e.candidates[0])||void 0===t?void 0:t.content;if(void 0===n||void 0===n.parts||0===n.parts.length)return!1;for(let e of n.parts)if(void 0===e||0===Object.keys(e).length||void 0!==e.text&&""===e.text)return!1;return!0}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei="SILENT_ERROR";class ea{constructor(e,t,n,s={}){this.model=t,this.params=n,this._requestOptions=s,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,(null==n?void 0:n.history)&&(function(e){let t=!1;for(let n of e){let{role:e,parts:s}=n;if(!t&&"user"!==e)throw new L(`First content should be with role 'user', got ${e}`);if(!M.includes(e))throw new L(`Each item should include role field. Got ${e} but valid roles are: ${JSON.stringify(M)}`);if(!Array.isArray(s))throw new L("Content should have 'parts' property with an array of Parts");if(0===s.length)throw new L("Each Content should have at least one part");let o={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(let e of s)for(let t of en)t in e&&(o[t]+=1);let i=es[e];for(let t of en)if(!i.includes(t)&&o[t]>0)throw new L(`Content with role '${e}' can't contain '${t}' part`);t=!0}}(n.history),this._history=n.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e,t={}){var n,s,o,i,a,r;let l;await this._sendPromise;let c=ee(e),d={safetySettings:null===(n=this.params)||void 0===n?void 0:n.safetySettings,generationConfig:null===(s=this.params)||void 0===s?void 0:s.generationConfig,tools:null===(o=this.params)||void 0===o?void 0:o.tools,toolConfig:null===(i=this.params)||void 0===i?void 0:i.toolConfig,systemInstruction:null===(a=this.params)||void 0===a?void 0:a.systemInstruction,cachedContent:null===(r=this.params)||void 0===r?void 0:r.cachedContent,contents:[...this._history,c]},u=Object.assign(Object.assign({},this._requestOptions),t);return this._sendPromise=this._sendPromise.then(()=>z(this._apiKey,this.model,d,u)).then(e=>{var t;if(eo(e.response)){this._history.push(c);let n=Object.assign({parts:[],role:"model"},null===(t=e.response.candidates)||void 0===t?void 0:t[0].content);this._history.push(n)}else{let t=J(e.response);t&&console.warn(`sendMessage() was unsuccessful. ${t}. Inspect response object for details.`)}l=e}),await this._sendPromise,l}async sendMessageStream(e,t={}){var n,s,o,i,a,r;await this._sendPromise;let l=ee(e),c={safetySettings:null===(n=this.params)||void 0===n?void 0:n.safetySettings,generationConfig:null===(s=this.params)||void 0===s?void 0:s.generationConfig,tools:null===(o=this.params)||void 0===o?void 0:o.tools,toolConfig:null===(i=this.params)||void 0===i?void 0:i.toolConfig,systemInstruction:null===(a=this.params)||void 0===a?void 0:a.systemInstruction,cachedContent:null===(r=this.params)||void 0===r?void 0:r.cachedContent,contents:[...this._history,l]},d=Object.assign(Object.assign({},this._requestOptions),t),u=Q(this._apiKey,this.model,c,d);return this._sendPromise=this._sendPromise.then(()=>u).catch(e=>{throw Error(ei)}).then(e=>e.response).then(e=>{if(eo(e)){this._history.push(l);let t=Object.assign({},e.candidates[0].content);t.role||(t.role="model"),this._history.push(t)}else{let t=J(e);t&&console.warn(`sendMessageStream() was unsuccessful. ${t}. Inspect response object for details.`)}}).catch(e=>{e.message!==ei&&console.error(e)}),u}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function er(e,t,n,s){return(await G(t,_.COUNT_TOKENS,e,!1,JSON.stringify(n),s)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function el(e,t,n,s){return(await G(t,_.EMBED_CONTENT,e,!1,JSON.stringify(n),s)).json()}async function ec(e,t,n,s){let o=n.requests.map(e=>Object.assign(Object.assign({},e),{model:t}));return(await G(t,_.BATCH_EMBED_CONTENTS,e,!1,JSON.stringify({requests:o}),s)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(e,t,n={}){this.apiKey=e,this._requestOptions=n,t.model.includes("/")?this.model=t.model:this.model=`models/${t.model}`,this.generationConfig=t.generationConfig||{},this.safetySettings=t.safetySettings||[],this.tools=t.tools,this.toolConfig=t.toolConfig,this.systemInstruction=Z(t.systemInstruction),this.cachedContent=t.cachedContent}async generateContent(e,t={}){var n;let s=et(e),o=Object.assign(Object.assign({},this._requestOptions),t);return z(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(n=this.cachedContent)||void 0===n?void 0:n.name},s),o)}async generateContentStream(e,t={}){var n;let s=et(e),o=Object.assign(Object.assign({},this._requestOptions),t);return Q(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(n=this.cachedContent)||void 0===n?void 0:n.name},s),o)}startChat(e){var t;return new ea(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(t=this.cachedContent)||void 0===t?void 0:t.name},e),this._requestOptions)}async countTokens(e,t={}){let n=function(e,t){var n;let s={model:null==t?void 0:t.model,generationConfig:null==t?void 0:t.generationConfig,safetySettings:null==t?void 0:t.safetySettings,tools:null==t?void 0:t.tools,toolConfig:null==t?void 0:t.toolConfig,systemInstruction:null==t?void 0:t.systemInstruction,cachedContent:null===(n=null==t?void 0:t.cachedContent)||void 0===n?void 0:n.name,contents:[]},o=null!=e.generateContentRequest;if(e.contents){if(o)throw new k("CountTokensRequest must have one of contents or generateContentRequest, not both.");s.contents=e.contents}else if(o)s=Object.assign(Object.assign({},s),e.generateContentRequest);else{let t=ee(e);s.contents=[t]}return{generateContentRequest:s}}(e,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),s=Object.assign(Object.assign({},this._requestOptions),t);return er(this.apiKey,this.model,n,s)}async embedContent(e,t={}){let n="string"==typeof e||Array.isArray(e)?{content:ee(e)}:e,s=Object.assign(Object.assign({},this._requestOptions),t);return el(this.apiKey,this.model,n,s)}async batchEmbedContents(e,t={}){let n=Object.assign(Object.assign({},this._requestOptions),t);return ec(this.apiKey,this.model,e,n)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e){this.apiKey=e}getGenerativeModel(e,t){if(!e.model)throw new L("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new ed(this.apiKey,e,t)}getGenerativeModelFromCachedContent(e,t,n){if(!e.name)throw new k("Cached content must contain a `name` field.");if(!e.model)throw new k("Cached content must contain a `model` field.");for(let n of["model","systemInstruction"])if((null==t?void 0:t[n])&&e[n]&&(null==t?void 0:t[n])!==e[n]){if("model"===n&&(t.model.startsWith("models/")?t.model.replace("models/",""):t.model)===(e.model.startsWith("models/")?e.model.replace("models/",""):e.model))continue;throw new k(`Different value for "${n}" specified in modelParams (${t[n]}) and cachedContent (${e[n]})`)}let s=Object.assign(Object.assign({},t),{model:e.model,tools:e.tools,toolConfig:e.toolConfig,systemInstruction:e.systemInstruction,cachedContent:e});return new ed(this.apiKey,s,n)}}const eh=document.getElementById("taskInput"),ef=document.getElementById("addTaskBtn"),eg=document.getElementById("taskList"),eE=document.getElementById("send-btn"),em=document.getElementById("chat-input"),ep=document.getElementById("chat-history"),eC=document.getElementById("signOutBttn"),ey=JSON.parse(localStorage.getItem("email"));async function eO(){T=new eu((await (0,b.getDoc)((0,b.doc)(S.db,"apikey","googlegenai"))).data().key).getGenerativeModel({model:"gemini-1.5-flash"})}function eI(e){let t=document.createElement("div");t.textContent=e,t.className="history",ep.appendChild(t),em.value=""}async function ev(e){eI((await T.generateContent(e)).response.text())}async function e_(e){let t=await eR(e);eh.value="",eS(t,e)}async function eT(e){await (0,b.updateDoc)((0,b.doc)(S.db,"scheduler",e),{completed:!0})}function eN(e){document.getElementById(e).remove()}async function ew(){var e=await eA();eg.innerHTML="";let t=[];e.forEach(e=>{t.push({id:e.id,text:e.data().text,completed:e.data().completed})}),t.sort(function(e,t){return new Date(t.timeCreated)-new Date(e.timeCreated)}),t.forEach(e=>{e.completed||eS(e.id,e.text)})}async function eR(e){return(await (0,b.addDoc)((0,b.collection)(S.db,"scheduler"),{text:e,email:ey,completed:!1})).id}async function eA(){let e=(0,b.query)((0,b.collection)(S.db,"scheduler"),(0,b.where)("email","==",ey));return await (0,b.getDocs)(e)}function eS(e,t){let n=document.createElement("li");n.id=e,n.textContent=t,n.tabIndex=0,n.setAttribute("name",t.toLowerCase()),eg.appendChild(n)}ey||(window.location.href="index.html"),console.log("Attempting Firestore operation:",{operationType:"set",path:docRef.path,data:dataToWrite,user:firebase.auth().currentUser}),window.addEventListener("load",async()=>{eO(),ew()}),eE.addEventListener("click",async()=>{let e=em.value.trim().toLowerCase();e?!function(e){if(e.startsWith("add task")){let t=e.replace("add task","").trim();return t?(e_(t),eI("Task "+t+" added!")):eI("Please specify a task to add."),!0}if(e.startsWith("complete")){var t;let n,s=e.replace("complete","").trim();return s?(t=s,0!=(n=document.getElementsByName(t)).length&&(n.forEach(e=>{eT(e.id),eN(e.id)}),1))?eI("Task "+s+" marked as complete."):eI("Task not found!"):eI("Please specify a task to complete."),!0}return!1}(e)&&ev(e):eI("Please enter a prompt")}),em.addEventListener("keypress",function(e){"Enter"===e.key&&eE.click()}),ef.addEventListener("click",async()=>{let e=eh.value.trim();e?await e_(e):alert("Please enter a task!")}),eg.addEventListener("click",async e=>{"LI"===e.target.tagName&&(eT(e.target.id),eN(e.target.id))}),eh.addEventListener("keypress",function(e){"Enter"===e.key&&ef.click()}),eg.addEventListener("keypress",async function(e){"LI"===e.target.tagName&&"Enter"===e.key&&(eT(e.target.id),eN(e.target.id))}),window.addEventListener("error",function(e){console.error("Error occurred: ",e.message)}),eC.addEventListener("click",function(e){localStorage.removeItem("email"),window.location.href="index.html"});
//# sourceMappingURL=tasks.c302bbe7.js.map
