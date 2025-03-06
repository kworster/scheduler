// import { initializeApp } from 'firebase/app';
// import { doc, getDocs, addDoc, updateDoc, getFirestore, collection } from "firebase/firestore";
// import { GoogleGenerativeAI } from '@google/generative-ai';



// const sw = new URL('service-worker.js', import.meta.url)
// if ('serviceWorker' in navigator) {
//     const s = navigator.serviceWorker;
//     s.register(sw.href, {
//         scope: '/scheduler/'
//     })
//         .then(_ => console.log('Service Worker Registered for scope:', sw.href, 'with', import.meta.url))
//         .catch(err => console.error('Service Worker Error:', err));
// }

// const firebaseConfig = {
//     apiKey: "AIzaSyAbLefRO7pNCWYvmLtP7jaYZgJVTpURCRk",
//   authDomain: "scheduler-13980.firebaseapp.com",
//   projectId: "scheduler-13980",
//   storageBucket: "scheduler-13980.firebasestorage.app",
//   messagingSenderId: "853608682087",
//   appId: "1:853608682087:web:9d0c4898b2f0f9040cbac2",
// };


// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// const taskInput = document.getElementById('taskInput');
// const addTaskBtn = document.getElementById('addTaskBtn');
// const taskList = document.getElementById('taskList');


// window.addEventListener('load', () => {
//   renderTasks();
// });

// //Call in the event listener for page load
// async function getApiKey() {
//   let snapshot = await getDoc(doc(db, "apikey", "googlegenai"));
//   apiKey =  snapshot.data().key;
//   genAI = new GoogleGenerativeAI(apiKey);
//   model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
// }

// async function askChatBot(request) {
//   return await model.generateContent(request);
// }



// //Add Task
// addTaskBtn.addEventListener('click', async () => {
//     const task = taskInput.value.trim();
//     if (task) {
//         let taskId = await addTaskToFirestore(task);
//         taskInput.value = "";
//         createLiTask(taskId, task);
//     } else {+
//         alert("Please enter a task!");
//     }
// });

// // Remove Task
// taskList.addEventListener('click', async (e) => {
//   if (e.target.tagName === 'LI') {
//     await updateDoc(doc(db, "scheduler", e.target.id), {
//       completed: true
//     });  
//     e.target.remove();
//   }
// });


// async function renderTasks() {
//     var tasks = await getTasksFromFirestore();
//     taskList.innerHTML = "";

//     let taskArr = [];

//     tasks.forEach(task => {
//       taskArr.push({
//         "id" : task.id,
//         "text": task.data().text,
//         "completed": task.data().completed
//       })
//     });

//     taskArr.sort(function(a,b){
//       return new Date(b.timeCreated) - new Date(a.timeCreated);
//     });

//     taskArr.forEach(task => {
//       if(!task.completed){
//         createLiTask(task.id, task.text);
//       }
//     });
//   }

//   async function addTaskToFirestore(taskText) {
//     let task = await addDoc(collection(db, "scheduler"), {
//       text: taskText, 
//       completed: false
//     });  
//     return task.id;
//   }

//   async function getTasksFromFirestore() {
//     return await getDocs(collection(db, "scheduler"));
//   }

//   function createLiTask(id, text) {
//     let taskItem = document.createElement("li");
//     taskItem.id = id;
//     taskItem.textContent = text;
//     taskItem.tabIndex = 0;
//     taskList.appendChild(taskItem);
//   }

//   //Allow task addition on enter key while in task input
//   taskInput.addEventListener("keypress", function(event) {
//     if (event.key === "Enter") {
//       addTaskBtn.click();
//     }
//   });

//   //Allow tasks to be completed on enter
//   taskList.addEventListener("keypress", async function(e) {
//     if (e.target.tagName === 'LI' && e.key === "Enter") {
//       await updateDoc(doc(db, "scheduler", e.target.id), {
//         completed: true
//       });  
//     }
//     renderTasks();
//   });

//   //
//   function ruleChatBot(request) {
//     if (request.startsWith("add event")) {
//       let task = request.replace("add event", "").trim();
//       if (task) {
//           addTask(task);
//           appendMessage('Event ' + task + ' added!');
//       } else {
//           appendMessage("Please specify an event to add.");
//       }
//       return true;
//     } else if (request.startsWith("complete")) {
//         let taskName = request.replace("complete", "").trim();
//         if (taskName) {
//             if(removeFromTaskName(taskName)) {
//               appendMessage('Event ' + taskName + ' marked as complete.');
//             } else {
//               appendMessage("Event not found!");
//             }
            
//         } else {
//             appendMessage("Please specify an event to complete.");
//         }
//         return true;
//     }
  
//     return false;
//   }

//   aiButton.addEventListener('click', async () => {
//     let prompt = aiInput.value.trim().toLowerCase();
//     if(prompt) {
//       if(!ruleChatBot(prompt)){
//         askChatBot(prompt);
//       }
//     } else {
//       appendMessage("Please enter a prompt")
//     }  
//   });

//   function appendMessage(message) {
//     let history = document.createElement("div");
//     history.textContent = message;
//     history.className = 'history';
//     chatHistory.appendChild(history);
//     aiInput.value = "";
//   }
  
//   function removeFromTaskName(task) {
//     let ele = document.getElementsByName(task);
//     if(ele.length == 0){
//       return false;
//     }
//     ele.forEach(e => {
//       removeTask(e.id);
//       removeVisualTask(e.id);
//     })
//     return true;
//   }
 
// window.addEventListener('error', function (event) {
//     console.error('Error occurred: ', event.message);
// });