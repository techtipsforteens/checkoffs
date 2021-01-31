var tasks = ["This is a task.", "This is another task, with medium priority.", "This task has high priority.", "And so on..."]
var taskps = new Array(0, 1, 2, 0)
var numberoftasks = 0
var taskcounter = 0;
var filter = ["a"];

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
        if (taskps[(taskcounter)] == 0) {
            if (filter[0] == "a") {
                var sthtml = sthtml + "<button id = 'tb' onclick='completeTask(" + (taskcounter) + ")'>X</button> ";
                var sthtml = sthtml + tasks[(taskcounter)];
                var sthtml = sthtml + "<br><br>";
            }
        } else if (taskps[(taskcounter)] == 1) {
            if (filter[0] != "h") {
                var sthtml = sthtml + "<button id = 'tbp1' onclick='completeTask(" + (taskcounter) + ")'>X</button> ";
                var sthtml = sthtml + tasks[(taskcounter)];
                var sthtml = sthtml + "<br><br>";
            }
        } else if (taskps[(taskcounter)] == 2) {
            var sthtml = sthtml + "<button id = 'tbp2' onclick='completeTask(" + (taskcounter) + ")'>X</button> ";
            var sthtml = sthtml + "<strong>" + tasks[(taskcounter)] + "</strong>";
            var sthtml = sthtml + "<br><br>";
        }
        var taskcounter = taskcounter + 1;
    }
    document.getElementById("tasks").innerHTML = sthtml;
}

function addNew() {
    document.getElementById("tasks").innerHTML = "";
    document.getElementById("subconsole").innerHTML = "<button id='x' onclick='showTasks()'>X</button><h1>Add New Task</h1><br><form name='addTaskForm'onsubmit='return insertTask()'><h2>Task Name</h2><br><input type='text' id='taskname' name='taskname'></input><br><br><h2>Task Priority</h2><br><input type='radio' id='low' name='taskp' value=0></input><label for='low'>Low</label><br><input type='radio' id='medium' name='taskp' value=1></input><label for='medium'>Medium</label><br><input type='radio' id='high' name='taskp' value=2></input><label for='high'>High</label><br><br><br><input type='submit' id='submit-button' value='Submit'></form>"
}

function insertTask() {
    var x = document.forms["addTaskForm"]["taskname"].value;
    var y = document.forms["addTaskForm"]["taskp"].value;
    tasks.push(x);
    taskps.push(y);
    showTasks();
}

function completeTask(tasknumber) {
    tasks.splice(tasknumber, 1);
    taskps.splice(tasknumber, 1);
    showTasks()
}

function filterTasks() {
    document.getElementById("tasks").innerHTML = "";
    document.getElementById("subconsole").innerHTML = "<button id='x' onclick='showTasks()'>X</button><h1>Filter Tasks</h1><br><form name='filterTasksForm'onsubmit='return insertFiltering()'><input type='radio' id='onlyHigh' name='filtering' value='h'></input><label for='onlyHigh'>Only high priority taks</label><br><input type='radio' id='aboveZero' name='filtering' value='az'></input><label for='aboveZero'>Only high and medium priority taks</label><br><input type='radio' id='all' name='filtering' value='a'></input><label for='all'>All tasks</label><br><br><input type='submit' id='submit-button' value='Submit'></form>"
}

function insertFiltering() {
    var z = document.forms["filterTasksForm"]["filtering"].value;
    filter[0] = z;
    showTasks()
}

showTasks()
