//var taskcontent;
var tasks = ["This is a task.", "This is another task, with medium priority.", "This task has high priority.", "And so on..."]
var taskps = new Array(0, 1, 2, 0, 2)
var numberoftasks = 0
var taskcounter = 0;
var filter = ["a"];
var sort = [""]

function about() {
    document.getElementById("tasks").innerHTML = "";
    document.getElementById("subconsole").innerHTML = "<button id='x' onclick='showTasks()'>X</button><h1>About</h1><br><p>Checkoffs is a web based task manager application, origionaly written in Python.</p>";
}

function showTasks() {
    var sthtml = ""
    document.getElementById("subconsole").innerHTML = "<h1>Tasks</h1><button id='addnew' onclick='addNew()'>Add New</button><br><br>";
    var numberoftasks = tasks.length;
    taskcounter = 0;
    if (sort[0] == "alpha") {
        tasks.sort()
        sort[0] = "";
    }
    if (sort[0] == "prio") {
        while (taskcounter != numberoftasks) {
            if (taskps[(taskcounter)] == 2) {
                var sthtml = sthtml + "<button id = 'tbp2' onclick='completeTask(" + (taskcounter) + ")'>X</button> ";
                var sthtml = sthtml + "<strong>" + tasks[(taskcounter)] + "</strong>";
                var sthtml = sthtml + "<br><br>";
            }
        taskcounter = taskcounter + 1;
        }
        taskcounter = 0;
        while (taskcounter != numberoftasks) {
            if (taskps[(taskcounter)] == 1) {
                if (filter[0] != "h") {
                    var sthtml = sthtml + "<button id = 'tbp1' onclick='completeTask(" + (taskcounter) + ")'>X</button> ";
                    var sthtml = sthtml + tasks[(taskcounter)];
                    var sthtml = sthtml + "<br><br>";
                }
            }
        taskcounter = taskcounter + 1;
        }
        taskcounter = 0;
        while (taskcounter != numberoftasks) {
            if (taskps[(taskcounter)] == 0) {
                if (filter[0] == "a") {
                    var sthtml = sthtml + "<button id = 'tb' onclick='completeTask(" + (taskcounter) + ")'>X</button> ";
                    var sthtml = sthtml + tasks[(taskcounter)];
                    var sthtml = sthtml + "<br><br>";
                }
            }
        taskcounter = taskcounter + 1;
        }
    } else {
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

function sortTasks() {
    document.getElementById("tasks").innerHTML = "";
    document.getElementById("subconsole").innerHTML = "<button id='x' onclick='showTasks()'>X</button><h1>Sort Tasks</h1><br><form name='sortTasksForm'onsubmit='return insertSorting()'><input type='radio' id='alpha' name='sorting' value='alpha'></input><label for='alpha'>in alphebetic order</label><br><input type='radio' id='prio' name='sorting' value='prio'></input><label for='prio'>by priority</label><br><br><input type='submit' id='submit-button' value='Submit'></form>"
}

function insertSorting() {
    var u = document.forms["sortTasksForm"]["sorting"].value;
    sort[0] = u;
    console.log(sort[0])
    showTasks();
}

function editTask() {
    document.getElementById("tasks").innerHTML = "";
    document.getElementById("subconsole").innerHTML = "<button id='x' onclick='showTasks()'>X</button><h1>Edit Task</h1><br><form name='editTaskForm' onsubmit='return insertEditing()'><h2>Task Number</h2><br><input type='text' id='tasknumber' name='tasknumber'></input><br><h2>Task Text</h2><br><input type='text' id='tasktext' name='tasktext'></input><br><br><br><input type='submit' id='submit-button' value='Submit'></form>";
}

function insertEditing() {
    var w = document.forms["editTaskForm"]["tasknumber"].value;
    var v = document.forms["editTaskForm"]["tasktext"].value;
    tasks[(w-1)] = v;
    showTasks()
}

function saveTasks() {
    var textToSave = tasks;
    var hiddenElement = document.createElement('a');
    
    hiddenElement.href = 'data:attachment/text,' + encodeURI(textToSave);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'tasks.txt';
    hiddenElement.click();
}

//Importing tasks is under developement.

/*function showImportForm() {
    document.getElementById("tasks").innerHTML = "";
    document.getElementById("subconsole").innerHTML = "<button id='x' onclick='showTasks()'>X</button><h1>Import Tasks</h1><br><h2>Import Tasks</h2><br><button id='submit' onclick='importTasks()'>Add File</button><h2>Import Priorities</h2><br><button id='submit' onclick='importPriorities()'>Add File</button>"
}

function importTasks() {
    var input = document.createElement('input');
    input.type = 'file';

    input.onchange = e => { 

    // getting a hold of the file reference
    var file = e.target.files[0]; 

    // setting up the reader
    var reader = new FileReader();
    reader.readAsText(file,'UTF-8');

    // here we tell the reader what to do when it's done reading...
    reader.onload = readerEvent => {
        var taskcontent = readerEvent.target.result; // this is the content!
        console.log( taskcontent );
        insertImport("tasks")
    }

}

input.click();
}

function importPriorities() {
    var input = document.createElement('input');
    input.type = 'file';

    input.onchange = e => { 

    // getting a hold of the file reference
    var file = e.target.files[0]; 

    // setting up the reader
    var reader = new FileReader();
    reader.readAsText(file,'UTF-8');

    // here we tell the reader what to do when it's done reading...
    reader.onload = readerEvent => {
        var priocontent = readerEvent.target.result; // this is the content!
        console.log( priocontent );
        insertImport("priority")
    }

}

input.click();
}

function insertImport(kind) {
    if (kind == "tasks") {
        var rearray = taskcontent.split(",");
        var tasks = rearray;
        console.log(tasks);
    } else if (kind == "priority") {
        var rearray = priocontent.split(",");
        var taskps = rearray;
        console.log(taskps);
    }
    showTasks()
}
*/

showTasks()
