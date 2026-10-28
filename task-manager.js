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