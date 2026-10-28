// Create an array of tasks
let completedTasks = 0;
let pendingTasks = 0;
let totalHighPriority = 0;
let highPriorityPd = 0;
let frotendTasks = 0;
let backendTasks = 0;
let databaseTasks = 0;
let totalTasks;

let tasks = [
    {
        title: 'Complete HTML tutorial',
        category: 'Frontend',
        completed: true ,
        priority: 'low'
    },
    {
        title: 'Complete CSS tutorial',
        category: 'Frontend',
        completed: true ,
        priority: 'low'
    },
    {
        title: 'Complete JavaScript tutorial',
        category: 'Frontend',
        completed: false ,
        priority: 'high'
    },
    {
        title: 'Complete React tutorial',
        category: 'Backend',
        completed: true ,
        priority: 'medium'
    },
    {
        title: 'Complete MongoDB tutorial',
        category: 'Backend',
        completed: true ,
        priority: 'high'
    },
    {
        title: 'Complete SQL tutorial',
        category: 'Database',
        completed: false ,
        priority: 'high'
    }
];

for(let i = 0; i < tasks.length; i++){
    console.log(`task${i+1} includes: `, tasks[i]);
}

// Total tasks
totalTasks = tasks.length;
console.log('Total Number of tasks = ', totalTasks);

// Completed tasks
for(let i = 0; i < tasks.length; i++){
    if (tasks[i].completed === true){
        completedTasks++;
    }
    else {
        pendingTasks++;
    }
}
console.log(`Total completed tasks = ${completedTasks}`)
console.log(`Total pending tasks = ${pendingTasks}`)

// High priority tasks
for(let i = 0; i < tasks.length; i++){
    if (tasks[i].priority === 'high'){
        totalHighPriority++
        console.log(tasks[i].title);
    }
    else {
        continue;
    }
}

// High priority tasks that are not completed
if (totalHighPriority === 0){
    console.log('There are no high priority tasks');
}
else {
    for(let i = 0; i < tasks.length; i++){
        if (tasks[i].priority === 'high'){
            if (tasks[i].completed === false){
                console.log(tasks[i].title);
            }
            else {
                continue;
            }
        }
        else {
            continue;
        }
    }
}

// Number of tasks with same category from a dataset
for (let i = 0; i < tasks.length; i++){
    if (tasks[i].category === 'Frontend')
        frotendTasks++;
    if (tasks[i].category === 'Backend')
        backendTasks++;
}
console.log('Total number of tasks under Frontend = ', frotendTasks)
console.log('Total number of tasks under Frontend = ', backendTasks)

// Functions of repeated groups

// Function for the number of tasks under a category
function taskcategory(name){
    let totalTask = 0;
    for (let i = 0; i < tasks.length; i++){
    if (tasks[i].category === name)
        totalTask++;
    }
    console.log(`Total number of tasks under ${name} = `, totalTask)
}
taskcategory('Database');

// Function for displaying tasks
function displayTasks(){
    for(let i = 0; i < tasks.length; i++){
        console.log(`task${i+1} includes: `, tasks[i]);
    }
}

// Function for displaying specific task statistics
function statsForTask(number){
    console.log(`task${number+1} includes: `, tasks[number-1]);
}
statsForTask(5); // first task is 1, second task is 2 and so on

// Add a new task to array
function addNewTask(newTask){
    tasks.push(newTask);
}
addNewTask(
    {
        title: 'Complete POSTgre tutorial',
        category: 'Database',
        completed: false,
        priority: 'medium'
    }
)
console.log(tasks);
taskcategory('Database'); // formally 1 before the addition of the new task