//var taskcontent;
var tasks = ["This is a task.", "This is another task with medium priority.", "This task has high priority.", "And so on..."]
var taskps = new Array(0, 1, 2, 0)
var taskcontent;
var priocontent;
var allcontent;
var lists = ["Tasks"];
var curlist = "Tasks";
var curlistnum = 0;
var tls = ["Tasks", "Tasks", "Tasks", "Tasks"]
var numberoftasks = 0
var taskcounter = 0;
var listcounter = 0;
var filter = ["a"];
var sort = [""];

function about() {
    document.getElementById("tasks").innerHTML = "";
    document.getElementById("subconsole").innerHTML = "<button id='x' onclick='showTasks()'>X</button><h1>About</h1><br><p>Checkoffs is a web based task manager application, origionaly written in Python.</p>";
}

function sl(listnumber) {
    curlist = lists[listnumber];
    curlistnum = listnumber;
    console.log(curlist);
    console.log(curlistnum);
    showTasks();
}

function showTasks() {
    listcounter = 0;
    var sthtml = ""
    var numberoflists = lists.length;
    var lhtml = "<ul>"
    while (listcounter != numberoflists) {
        lhtml = lhtml + "<li class='dropdown'><a href='javascript:void(0)' class='dropbtn' onclick='sl(" + listcounter + ")'>" + lists[listcounter] + "</a></li>";
        listcounter = listcounter + 1;
    }
    document.getElementById("lists").innerHTML = lhtml + "</ul>"
    document.getElementById("subconsole").innerHTML = "<h1>" + curlist + "</h1><button id='addnew' onclick='addNew()'>Add New</button><br><br>";
    var numberoftasks = tasks.length;
    taskcounter = 0;
    console.log("fcln=" + filter[curlistnum]);
    console.log("filter=" + filter);
    if (sort[curlistnum] == "alpha") {
        tasks.sort()
        sort[0] = "";
    }
    if (sort[curlistnum] == "prio") {
        while (taskcounter != numberoftasks) {
            if (taskps[(taskcounter)] == 2) {
                if (curlist == tls[taskcounter]) {
                var sthtml = sthtml + "<button id = 'tbp2' onclick='completeTask(" + (taskcounter) + ")'>X</button> ";
                var sthtml = sthtml + "<strong>" + tasks[(taskcounter)] + "</strong>";
                var sthtml = sthtml + "<br><br>";
            }
            }
        taskcounter = taskcounter + 1;
        }
        taskcounter = 0;
        while (taskcounter != numberoftasks) {
            if (taskps[(taskcounter)] == 1) {
                if (filter[curlistnum] != "h") {
                    if (curlist == tls[taskcounter]) {
                    var sthtml = sthtml + "<button id = 'tbp1' onclick='completeTask(" + (taskcounter) + ")'>X</button> ";
                    var sthtml = sthtml + tasks[(taskcounter)];
                    var sthtml = sthtml + "<br><br>";
                    }
                }
            }
        taskcounter = taskcounter + 1;
        }
        taskcounter = 0;
        while (taskcounter != numberoftasks) {
            if (taskps[(taskcounter)] == 0) {
                if (filter[curlistnum] == "a") {
                    if (curlist == tls[taskcounter]) {
                    var sthtml = sthtml + "<button id = 'tb' onclick='completeTask(" + (taskcounter) + ")'>X</button> ";
                    var sthtml = sthtml + tasks[(taskcounter)];
                    var sthtml = sthtml + "<br><br>";
                    }
                }
            }
        taskcounter = taskcounter + 1;
        }
    } else {
        while (taskcounter != numberoftasks) {
            if (taskps[(taskcounter)] == 0) {
                if (filter[curlistnum] == "a") {
                    if (curlist == tls[taskcounter]) {
                    var sthtml = sthtml + "<button id = 'tb' onclick='completeTask(" + (taskcounter) + ")'>X</button> ";
                    var sthtml = sthtml + tasks[(taskcounter)];
                    var sthtml = sthtml + "<br><br>";
                    }
                }
            } else if (taskps[(taskcounter)] == 1) {
                if (filter[curlistnum] != "h") {
                    if (curlist == tls[taskcounter]) {
                    var sthtml = sthtml + "<button id = 'tbp1' onclick='completeTask(" + (taskcounter) + ")'>X</button> ";
                    var sthtml = sthtml + tasks[(taskcounter)];
                    var sthtml = sthtml + "<br><br>";
                    }
                }
            } else if (taskps[(taskcounter)] == 2) {
                if (curlist == tls[taskcounter]) {
                var sthtml = sthtml + "<button id = 'tbp2' onclick='completeTask(" + (taskcounter) + ")'>X</button> ";
                var sthtml = sthtml + "<strong>" + tasks[(taskcounter)] + "</strong>";
                var sthtml = sthtml + "<br><br>";
                }
            }
        var taskcounter = taskcounter + 1;
        }
    }
    document.getElementById("tasks").innerHTML = sthtml;
}

function addNew() {
    document.getElementById("tasks").innerHTML = "";
    var anhtml = "<button id='x' onclick='showTasks()'>X</button><h1>Add New Task</h1><br><form name='addTaskForm'onsubmit='return insertTask()'><h2>Task Name</h2><br><input type='text' id='taskname' name='taskname'></input><br><br><h2>Task Priority</h2><br><input type='radio' id='low' name='taskp' value=0></input><label for='low'>Low</label><br><input type='radio' id='medium' name='taskp' value=1></input><label for='medium'>Medium</label><br><input type='radio' id='high' name='taskp' value=2></input><label for='high'>High</label><br><h2>List</h2><br>";
    var numberoflists = lists.length;
    listcounter = 0;
    while (numberoflists != listcounter) {
        anhtml = anhtml + "<input type='radio' id='" + lists[listcounter] + "' name='clist' value='" + lists[listcounter] + "'></input><label for='" + lists[listcounter] + "'>" + lists[listcounter] + "</label><br>";
        listcounter = listcounter + 1;
    }
    anhtml = anhtml + "<br><br><br><input type='submit' id='submit-button' value='Submit'></form>";
    document.getElementById("subconsole").innerHTML = anhtml;
}

function insertTask() {
    var x = document.forms["addTaskForm"]["taskname"].value;
    var y = document.forms["addTaskForm"]["taskp"].value;
    var yy = document.forms["addTaskForm"]["clist"].value;
    tasks.push(x);
    taskps.push(y);
    tls.push(yy);
    showTasks();
}

function completeTask(tasknumber) {
    tasks.splice(tasknumber, 1);
    taskps.splice(tasknumber, 1);
    tls.splice(tasknumber, 1);
    showTasks()
}

function filterTasks() {
    document.getElementById("tasks").innerHTML = "";
    var fthtml = "<button id='x' onclick='showTasks()'>X</button><h1>Filter Tasks</h1><br><form name='filterTasksForm'onsubmit='return insertFiltering()'><input type='radio' id='onlyHigh' name='filtering' value='h'></input><label for='onlyHigh'>Only high priority taks</label><br><input type='radio' id='aboveZero' name='filtering' value='az'></input><label for='aboveZero'>Only high and medium priority taks</label><br><input type='radio' id='all' name='filtering' value='a'></input><label for='all'>All tasks</label><br><h2>List To Filter</h2><br>";
    var numberoflists = lists.length;
    listcounter = 0;
    while (numberoflists != listcounter) {
        fthtml = fthtml + "<input type='radio' id='" + lists[listcounter] + "' name='clist' value='" + lists[listcounter] + "'></input><label for='" + lists[listcounter] + "'>" + lists[listcounter] + "</label><br>";
        listcounter = listcounter + 1;
    }
    fthtml = fthtml + "<input type='radio' id='all' name='clist' value='all'></input><label for'all'>All Lists</lable><br><br><br><input type='submit' id='submit-button' value='Submit'></form>";
    document.getElementById("subconsole").innerHTML = fthtml;
}

function insertFiltering() {
    var z = document.forms["filterTasksForm"]["filtering"].value;
    var zz = document.forms["filterTasksForm"]["clist"].value;
    var numberoflists = lists.length;
    listcounter = 0;
    if (zz == "all") {
        while (numberoflists != listcounter) {
            filter[listcounter] = z;
            listcounter = listcounter + 1;
        }
    }
    while (numberoflists != listcounter) {
        if (zz == lists[listcounter]) {
            filter[listcounter] = z;
        }
        listcounter = listcounter + 1; 
    }
    showTasks();
}

function sortTasks() {
    var othtml = "<button id='x' onclick='showTasks()'>X</button><h1>Sort Tasks</h1><br><form name='sortTasksForm'onsubmit='return insertSorting()'><input type='radio' id='alpha' name='sorting' value='alpha'></input><label for='alpha'>in alphebetic order</label><br><input type='radio' id='prio' name='sorting' value='prio'></input><label for='prio'>by priority</label><br><h2>List To Sort</h2><br>"
    var numberoflists = lists.length;
    listcounter = 0;
    while (numberoflists != listcounter) {
        othtml = othtml + "<input type='radio' id='" + lists[listcounter] + "' name='clist' value='" + lists[listcounter] + "'></input><label for='" + lists[listcounter] + "'>" + lists[listcounter] + "</label><br>";
        listcounter = listcounter + 1;
    }
    othtml = othtml + "<input type='radio' id='all' name='clist' value='all'></input><label for'all'>All Lists</lable><br><br><br><input type='submit' id='submit-button' value='Submit'></form>";
    document.getElementById("tasks").innerHTML = "";
    document.getElementById("subconsole").innerHTML = othtml;
}

function insertSorting() {
    var u = document.forms["sortTasksForm"]["sorting"].value;
    var uu = document.forms["sortTasksForm"]["clist"].value;
    var numberoflists = lists.length;
    listcounter = 0;
    if (uu == "all") {
        while (numberoflists != listcounter) {
            sort[listcounter] = u;
            listcounter = listcounter + 1;
        }
    }
    while (numberoflists != listcounter) {
        if (uu == lists[listcounter]) {
            sort[listcounter] = u;
        }
        listcounter = listcounter + 1; 
    }
    showTasks();
}

function editTask() {
    document.getElementById("tasks").innerHTML = "";
    var ethtml = "<button id='x' onclick='showTasks()'>X</button><h1>Edit Task</h1><br><form name='editTaskForm' onsubmit='return insertEditing()'><h2>Task Number</h2><br><input type='text' id='tasknumber' name='tasknumber'></input><br><h2>Task Text</h2><br><input type='text' id='tasktext' name='tasktext'></input><br><h2>List</h2>";
    var numberoflists = lists.length;
    listcounter = 0;
    while (numberoflists != listcounter) {
        ethtml = ethtml + "<input type='radio' id='" + lists[listcounter] + "' name='clist' value='" + lists[listcounter] + "'></input><label for='" + lists[listcounter] + "'>" + lists[listcounter] + "</label><br>";
        listcounter = listcounter + 1;
    }
    ethtml = ethtml + "<br><br><br><input type='submit' id='submit-button' value='Submit'></form>";
    document.getElementById("subconsole").innerHTML = ethtml;
}

function insertEditing() {
    var w = document.forms["editTaskForm"]["tasknumber"].value;
    var v = document.forms["editTaskForm"]["tasktext"].value;
    var vv = document.forms["editTaskForm"]["clist"].value;
    tasks[(w-1)] = v;
    tls[(w-1)] = vv;
    showTasks();
}

function saveTasks() {
    // Tasks
    var tasksj = tasks.join("%%");
    var taskpsj = taskps.join("%%");
    var tlsj = tls.join("%%");
    var listsj = lists.join("%%");
    var textToSave1 = tasksj + "&&&" + taskpsj + "&&&" + tlsj + "&&&" + listsj;
    var hiddenElement1 = document.createElement('a');
    
    hiddenElement1.href = 'data:attachment/text,' + encodeURI(textToSave1);
    hiddenElement1.target = '_blank';
    hiddenElement1.download = 'tasks.txt';
    hiddenElement1.click();
}

function showImportForm() {
    document.getElementById("tasks").innerHTML = "";
    document.getElementById("subconsole").innerHTML = "<button id='x' onclick='showTasks()'>X</button><h1>Import Tasks</h1><br><button id='submit' onclick='importTasks()'>Add File</button>";
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
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
        allcontent = readerEvent.target.result; // this is the content!
        var raallcontent = allcontent.split("&&&");
        var rataskcontent = raallcontent[0].split("%%");
        var rapriocontent = raallcontent[1].split("%%");
        var ratlscontent = raallcontent[2].split("%%");
        var ralistscontent = raallcontent[3].split("%%");
        tasks = rataskcontent;
        taskps = rapriocontent;
        tls = ratlscontent;
        lists = ralistscontent;

        showTasks();
    }

}
input.click();
}

function insertList() {
    var t = document.forms["addListForm"]["listtext"].value;
    lists.push(t);
    filter.push("a");
    sort.push("");
    showTasks();
}

function addList() {
    document.getElementById("tasks").innerHTML = "";
    document.getElementById("subconsole").innerHTML = "<button id='x' onclick='showTasks()'>X</button><h1>Add New List</h1><br><form name='addListForm' onsubmit='return insertList()'><h2>List Name</h2><br><input type='text' id='listtext' name='listtext'></input><br><br><br><input type='submit' id='submit-button' value='Submit' onclick='return insertList()'></form>";
}

function insertEl() {
    var r = document.forms["editListForm"]["clist"].value;
    var s = document.forms["editListForm"]["listtext"].value;
    var numberoflists = lists.length;
    listcounter = 0;
    while (numberoflists != listcounter) {
        if (r == lists[listcounter]) {
            var listtochange = listcounter;
        }
        listcounter = listcounter + 1;
    }
    var tlscounter = 0;
    var numberoftasks = tasks.length;
    while (numberoftasks != tlscounter) {
        if (lists[listtochange] == tls[tlscounter]) {
            tls[tlscounter] = s;
        }
        tlscounter = tlscounter + 1;
    }
    lists[listtochange] = s;
    curlist = lists[listtochange]; 
    showTasks();
}

function editList() {
    document.getElementById("tasks").innerHTML = "";
    var elhtml = "<button id='x' onclick='showTasks()'>X</button><h1>Edit List</h1><br><h2>Choose List</h2><form name='editListForm' onsubmit='return insertEl()'>";
    var numberoflists = lists.length;
    listcounter = 0;
    while (numberoflists != listcounter) {
        elhtml = elhtml + "<input type='radio' id='" + lists[listcounter] + "' name='clist' value='" + lists[listcounter] + "'></input><label for='" + lists[listcounter] + "'>" + lists[listcounter] + "</label><br>";
        listcounter = listcounter + 1;
    }
    elhtml = elhtml + "<h2>List Text</h2><br><input type='text' id='listtext' name='listtext'></input><br><br><br><input type='submit' id='submit-button' value='Submit'></form>";
    document.getElementById("subconsole").innerHTML = elhtml;
}

showTasks();
