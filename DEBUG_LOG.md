MY DEBUGGING PROCESS
I made an error at the beginning of my code when I want give a value to my array 'Tasks' because I assumed it to be a dataset at first but after using AI, It showed me the right way to represent it in form of arrar rather than the dataset, for example, I was doing:
let tasks = {} rather than let tasks = []

Also when I wanted to print a selected array, I used the backtip but it was showing me [object, object] but when I used AI, it gave me alternatives and the one i followed was to not use backtips for datasets inside an array and gave me a method if I wanted to use backtips but I didn't use it because it felt kind of complex. I went for the esier way, so rather than doing
console.log(`Lists of tasks are: ${tasks[i]}`), I will just use the console.log('Lists of tasks are: '.tasks[i]).