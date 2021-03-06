"use strict";

let $ = function(id) { return document.getElementById(id); };

let tasks = [];

let displayTaskList = () => 
{
    let list = "";
    // if there are no tasks in tasks array, check storage
    if (tasks.length === 0) {
        // get tasks from storage or empty string if nothing in storage
        let storage = localStorage.getItem("tasks") || "";

        // if not empty, convert to array and store in global tasks variable
        if (storage.length > 0) 
        { 
            tasks = storage.split("|"); 
        }
    }
    
    // if there are tasks in array, sort and create tasks string
    if (tasks.length > 0) 
    {
        tasks.sort();
        list = tasks.join("\n");
    }
    // display tasks string and set focus on task text box
    $("task_list").value = list;
    $("task").focus();
};

let addToTaskList = () => 
{
    let task = $("task");
    if (task.value === "") 
    {
        alert("Please enter a task.");
    } 
    else 
    {  
        // add task to array and local storage
        tasks.push(task.value);
        localStorage.tasks = tasks.join("|");

        // clear task text box and re-display tasks
        task.value = "";
        displayTaskList();
    }
};

let clearTaskList = () => 
{
    tasks.length = 0;
    localStorage.tasks = "";
    $("task_list").value = "";
    $("task").focus();
};

window.onload = () => 
{
    $("add_task").onclick = addToTaskList;
    $("clear_tasks").onclick = clearTaskList;   
    displayTaskList();
};