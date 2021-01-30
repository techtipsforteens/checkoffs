var tasks = ["This is a task.", "This is another task.", "This is task #3.", "And so on..."]
var taskpriorities = [2, 1];
var numberoftasks = 0
var taskcounter = 0;

function about() {
    document.getElementById("tasks").innerHTML = "";
    document.getElementById("subconsole").innerHTML = "<button id='x' onclick='showTasks()'>X</button><h1>About</h1><br><p>Checkoffs is a web based task manager application, origionaly written in Python.</p>";
}

function showTasks() {
    var sthtml = ""
    document.getElementById("subconsole").innerHTML = "<h1>Tasks</h1><button id='addnew' onclick='addNew()'>Add New</button><br><br>";
    var numberoftasks = tasks.length;
    taskcounter = 0;
    while (taskcounter != numberoftasks) {
        var sthtml = sthtml + "<button id = 'tb' onclick='completeTask(" + (taskcounter) + ")'>X</button> ";
        var sthtml = sthtml + tasks[(taskcounter)];
        var sthtml = sthtml + "<br><br>";
        var taskcounter = taskcounter + 1;
    }
    document.getElementById("tasks").innerHTML = sthtml;
    console.log(sthtml);
}

function addNew() {
    document.getElementById("tasks").innerHTML = "";
    document.getElementById("subconsole").innerHTML = "<button id='x' onclick='showTasks()'>X</button><h1>Add New Task</h1><br><form name='addTaskForm'onsubmit='return insertTask()'><h2>Task Name</h2><br><input type='text' id='taskname' name='taskname'></input><br><br><input type='submit' id='submit-button' value='Submit'></form>"
}

function insertTask() {
    var x = document.forms["addTaskForm"]["taskname"].value;
    tasks.push(x);
    console.log(tasks);
    showTasks();
}

function completeTask(tasknumber) {
    tasks.splice(tasknumber, 1);
    showTasks()
}

showTasks()
