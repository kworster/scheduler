import { db } from "./firebase.js";
import { doc, getDoc, getDocs, addDoc, updateDoc, collection, query, where } from "firebase/firestore";
import { GoogleGenerativeAI } from '@google/generative-ai';

const taskInput = document.getElementById('taskInput');
const taskInput2 = document.getElementById('taskInput2');
const taskInput3 = document.getElementById('taskInput3');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

const aiButton = document.getElementById("send-btn");
const aiInput = document.getElementById("chat-input");
const chatHistory = document.getElementById("chat-history");

const signOutBttn = document.getElementById("signOutBttn");

const email = JSON.parse(localStorage.getItem("email"));

var apiKey;
var genAI;
var model;

if(!email){
    window.location.href = "index.html";
}

async function getApiKey() {
  let snapshot = await getDoc(doc(db, "apikey", "googlegenai"));
  apiKey =  snapshot.data().key;
  genAI = new GoogleGenerativeAI(apiKey);
  model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
}

function appendMessage(message) {
  let history = document.createElement("div");
  history.textContent = message;
  history.className = 'history';
  chatHistory.appendChild(history);
  aiInput.value = "";
}

function ruleChatBot(request) {
  if (request.startsWith("add book")) {
    let task = request.replace("add book", "").trim();
    if (task) {
        addTask(task);
        appendMessage('Book ' + task + ' added!');
    } else {
        appendMessage("Please specify a book to add.");
    }
    return true;
  } else if (request.startsWith("remove")) {
      let taskName = request.replace("remove", "").trim();
      if (taskName) {
          if(removeFromTaskName(taskName)) {
            appendMessage('Book ' + taskName + ' has been removed.');
          } else {
            appendMessage("Book not found!");
          }
          
      } else {
          appendMessage("Please specify a book to remove.");
      }
      return true;
  }

  return false;
}

async function askChatBot(request) {
  let result = await model.generateContent(request);
  appendMessage(result.response.text());
}

async function addTask(task) {
  let taskId = await addTaskToFirestore(task);
  taskInput.value = "";
  taskInput2.value = "";
  taskInput3.value = "";
  createLiTask(taskId, task);
}

async function removeTask(taskId) {
  await updateDoc(doc(db, "scheduler", taskId), {
    completed: true
  });
}

function removeVisualTask(id) {
  document.getElementById(id).remove();
}


async function renderTasks() {
    var tasks = await getTasksFromFirestore();
    taskList.innerHTML = "";

    let taskArr = [];

    tasks.forEach(task => {
      taskArr.push({
        "id" : task.id,
        "text": task.data().text,
        "completed": task.data().completed,
        "genre": task.data().genre,
        "author": task.data().author
      })
    });

    taskArr.sort(function(a,b){
      return new Date(b.timeCreated) - new Date(a.timeCreated);
    });

    taskArr.forEach(task => {
      if(!task.completed){
        createLiTask(task.id, task.text, task.genre);
      }
    });
  }

  async function addTaskToFirestore(taskText) {
    let task = await addDoc(collection(db, "scheduler"), {
      text: taskText,
      email: email, 
      completed: false, 
      genre: "test",
      author: "test1",
    });  
    return task.id;
  }

  async function getTasksFromFirestore() {
    let q = query(collection(db, "scheduler"), where("email", "==", email));
    return await getDocs(q);
  }

  function createLiTask(id, text, genre) {
    let taskItem = document.createElement("li");
    taskItem.id = id;
    taskItem.textContent = text;
    taskItem.tabIndex = 0;
    taskItem.genre = genre;
    taskItem.setAttribute("name", text.toLowerCase());
    taskItem.setAttribute("author", author.toLowerCase());
    taskList.appendChild(taskItem);
  }

function removeFromTaskName(task) {
  let ele = document.getElementsByName(task);
  if(ele.length == 0){
    return false;
  }
  ele.forEach(e => {
    removeTask(e.id);
    removeVisualTask(e.id);
  })
  return true;
}

window.addEventListener('load', async () => {
  getApiKey();
  renderTasks();
});

aiButton.addEventListener('click', async () => {
  let prompt = aiInput.value.trim().toLowerCase();
  if(prompt) {
    if(!ruleChatBot(prompt)){
      askChatBot(prompt);
    }
  } else {
    appendMessage("Please enter a prompt")
  }  
});

aiInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    aiButton.click();
  }
});

addTaskBtn.addEventListener('click', async () => {
  const task = taskInput.value.trim();
  if(task) {
    await addTask(task);
  } else {
    alert("Please enter a book!");
  }
});

taskList.addEventListener('click', async (e) => {
  if (e.target.tagName === 'LI') {
    removeTask(e.target.id);
    removeVisualTask(e.target.id);
  }
});

taskInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addTaskBtn.click();
  }
});

taskList.addEventListener("keypress", async function(e) {
  if (e.target.tagName === 'LI' && e.key === "Enter") {
    removeTask(e.target.id);
    removeVisualTask(e.target.id);
  }
});

window.addEventListener('error', function (event) {
  console.error('Error occurred: ', event.message);
});

signOutBttn.addEventListener("click", function(event) {
    localStorage.removeItem("email");
    window.location.href = "index.html";
});