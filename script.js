var t1 = "This is a task.";
var t2 = "This is another task.";
var t3 = "This is task #3.";
var t4 = "And so on...";
var t5 = "";
var t6 = "";
var t7 = "";
var t8 = "";
var t9 = "";
var t10 = "";

function about() {
    document.getElementById("console").innerHTML = "<button id='x' onclick='showTasks()'>X</button><h1>About</h1><br><p>Checkoffs is a web based task manager application, origionaly written in Python.</p>";
}

function showTasks() {
    document.getElementById("console").innerHTML = "<h1>Tasks</h1><button id='addnew' onclick='addNew()'>Add New</button><br><br><div id='t1d'></div><div id='t2d'></div><div id='t3d'></div><div id='t4d'></div><div id='t5d'></div><div id='t6d'></div><div id='t7d'></div><div id='t8d'></div><div id='t9d'></div><div id='t10d'></div>"
    if (t1 != "") {
    document.getElementById("t1d").innerHTML = "<button id = 't1b' onclick='completeTask(1)'>X</button> " + t1
    } if (t2 != "") {
    document.getElementById("t2d").innerHTML = "<button id = 't2b' onclick='completeTask(2)'>X</button> " + t2
    } if (t3 != "") {
    document.getElementById("t3d").innerHTML = "<button id = 't3b' onclick='completeTask(3)'>X</button> " + t3
    } if (t4 != "") {
    document.getElementById("t4d").innerHTML = "<button id = 't4b' onclick='completeTask(4)'>X</button> " + t4
    } if (t5 != "") {
    document.getElementById("t5d").innerHTML = "<button id = 't5b' onclick='completeTask(5)'>X</button> " + t5
    } if (t6 != "") {
    document.getElementById("t6d").innerHTML = "<button id = 't6b' onclick='completeTask(6)'>X</button> " + t6
    } if (t7 != "") {
    document.getElementById("t7d").innerHTML = "<button id = 't7b' onclick='completeTask(7)'>X</button> " + t7
    } if (t8 != "") {
    document.getElementById("t8d").innerHTML = "<button id = 't8b' onclick='completeTask(8)'>X</button> " + t8
    } if (t9 != "") {
    document.getElementById("t9d").innerHTML = "<button id = 't9b' onclick='completeTask(9)'>X</button> " + t9
    } if (t10 != "") {
    document.getElementById("t10d").innerHTML = "<button id = 't10b' onclick='completeTask(10)'>X</button> " + t10
    }
}

function addNew() {
    document.getElementById("console").innerHTML = "<button id='x' onclick='showTasks()'>X</button><h1>Add New Task</h1><br><form name='addTaskForm'onsubmit='return insertTask()'><h2>Task Name</h2><br><input type='text' id='taskname' name='taskname'></input><br><br><input type='submit' id='submit-button' value='Submit'></form>"
}

function insertTask() {
    var x = document.forms["addTaskForm"]["taskname"].value;
    if (t1 == "") {
        t1 = x
    } else if (t2 == "") {
        t2 = x
    } else if (t3 == "") {
        t3 = x
    } else if (t4 == "") {
        t4 = x
    } else if (t5 == "") {
        t5 = x
    } else if (t6 == "") {
        t6 = x
    } else if (t7 == "") {
        t7 = x
    } else if (t8 == "") {
        t8 = x
    } else if (t9 == "") {
        t9 = x
    } else if (t10 == "") {
        t10 = x
    } else {
        alert("Task limit:\nThe limit for tasks is 10.");
    }
    showTasks()
}

function completeTask(tasknumber) {
    if (tasknumber == 1) {
        t1 = "";
    } else if (tasknumber == 2) {
        t2 = "";
    } else if (tasknumber == 3) {
        t3 = "";
    } else if (tasknumber == 4) {
        t4 = "";
    } else if (tasknumber == 5) {
        t5 = "";
    } else if (tasknumber == 6) {
        t6 = "";
    } else if (tasknumber == 7) {
        t7 = "";
    } else if (tasknumber == 8) {
        t8 = "";
    } else if (tasknumber == 9) {
        t9 = "";
    } else if (tasknumber == 10) {
        t10 = "";
    }
    showTasks()
}

showTasks()
