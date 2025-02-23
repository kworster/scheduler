import { initializeApp } from 'firebase/app';
import { doc, getDocs, addDoc, updateDoc, getFirestore, collection } from "firebase/firestore";

const sw = new URL('service-worker.js', import.meta.url)
if ('serviceWorker' in navigator) {
    const s = navigator.serviceWorker;
    s.register(sw.href, {
        scope: '/scheduler/'
    })
        .then(_ => console.log('Service Worker Registered for scope:', sw.href, 'with', import.meta.url))
        .catch(err => console.error('Service Worker Error:', err));
}

const firebaseConfig = {
    apiKey: "AIzaSyAbLefRO7pNCWYvmLtP7jaYZgJVTpURCRk",
    authDomain: "scheduler-13980.firebaseapp.com",
    projectId: "scheduler-13980",
    storageBucket: "scheduler-13980.firebasestorage.app",
    messagingSenderId: "853608682087",
    appId: "1:853608682087:web:9d0c4898b2f0f9040cbac2",
  };

const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Add Task
// addTaskBtn.addEventListener('click', () => {
//     const task = taskInput.value.trim();
//     if (task) {
//         const li = document.createElement('li');
//         li.textContent = task;
//         taskList.appendChild(li);
//         taskInput.value = '';
//     }
// });

addTaskBtn.addEventListener('click', async () => {
    const task = taskInput.value.trim();
    if (task) {
        const taskInput = document.getElementById("taskInput");
        const taskText = sanitizeInput(taskInput.value.trim());

        if (taskText) {
            await addTaskToFirestore(taskText);
            renderTasks();
            taskInput.value = "";
        }
        renderTasks();
    }
});

// Remove Task on Click
// taskList.addEventListener('click', (e) => {
//     if (e.target.tagName === 'LI') {
//         e.target.remove();
//     }
// });

taskList.addEventListener('click', async (e) => {
    if (e.target.tagName === 'LI') {
      await updateDoc(doc(db, "scheduler", e.target.id), {
        completed: true
      });  
    }
    renderTasks();
  });

  //Render Task
  async function renderTasks() {
    var tasks = await getTasksFromFirestore();
    taskList.innerHTML = "";
  
    tasks.forEach((task, index) => {
      if(!task.data().completed){
        const taskItem = document.createElement("li");
        taskItem.id = task.id;
        taskItem.textContent = task.data().text;
        taskList.appendChild(taskItem);
      }
    });
  }

  async function addTaskToFirestore(taskText) {
    await addDoc(collection(db, "scheduler"), {
      text: taskText, 
      completed: false
    });  
  }

  async function getTasksFromFirestore() {
    var data = await getDocs(collection(db, "scheduler"));
    let userData = [];
    data.forEach((doc) => {
      userData.push(doc);
  });
  return userData;
}

  function sanitizeInput(input) {
    const div = document.createElement("div");
    div.textContent = input;
    return div.innerHTML;
  }

//Error Logging
window.addEventListener('error', function (event) {
    console.error('Error occurred: ', event.message);
});