function solve(input) {
    const n = Number(input[0]);
    let map = {};

    let points = new Map;
    points.set("ToDo", 0);
    points.set("In Progress", 0);
    points.set("Code Review", 0);
    points.set("Done", 0);



    for (let i = 1; i <= n; i++) {
        const [assignee, taskId, title, status, estimatedPoints] = input[i].split(':');
        if (!map[assignee]) map[assignee] = [];
        map[assignee].push({taskId, title, status, estimatedPoints: Number(estimatedPoints)});
        currentPoint = points.get(status) + Number(estimatedPoints);
        points.set(status, currentPoint);
    }
    for (let i = n + 1; i < input.length; i++) {
        const [command, assignee, taskId, ...args] = input[i].split(':');
        switch (command) {
            case 'Add New':
                const [title, status, estimatedPoints] = args;
                const thisTasks = {taskId, title, status, estimatedPoints: Number(estimatedPoints)};
                if (!map[assignee]) {
                    console.log(`Assignee ${assignee} does not exist on the board!`);
                } else {
                    map[assignee].push(thisTasks);
                    let currentPoint = Number(points.get(thisTasks.status)) + Number(estimatedPoints);
                    points.set(thisTasks.status, currentPoint);
                }
                break;

            case 'Change Status':

                const [newStatus] = args;
                if (!map[assignee]) {
                    console.log(`Assignee ${assignee} does not exist on the board!`);
                } else {
                    const currentTaskAss = map[assignee].find(t => t.taskId === taskId);
                    if (!currentTaskAss) {
                        console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
                    } else {
                        let currentPoint = Number(points.get(currentTaskAss.status)) - currentTaskAss.estimatedPoints;
                        points.set(currentTaskAss.status, currentPoint);
                        currentTaskAss.status = newStatus;
                        currentPoint = points.get(currentTaskAss.status) + currentTaskAss.estimatedPoints;
                        points.set(currentTaskAss.status, currentPoint);
                    }
                }
                break;

            case 'Remove Task':
                const currentIndex = parseInt(taskId);
                if (!map[assignee]) {
                    console.log(`Assignee ${assignee} does not exist on the board!`);
                } else if (currentIndex < 0 || currentIndex >= map[assignee].length) {
                    console.log(`Index is out of range!`);
                } else {

                    const currentTask = map[assignee][currentIndex];
                    let currentPoint = Number(points.get(currentTask.status)) - currentTask.estimatedPoints;
                    points.set(currentTask.status, currentPoint);
                    map[assignee].splice(currentIndex, 1);
                }

                break;
        }
    }

    console.log(`ToDo: ${points.get("ToDo")}pts`);
    console.log(`In Progress: ${points.get("In Progress")}pts`);
    console.log(`Code Review: ${points.get("Code Review")}pts`);
    console.log(`Done Points: ${points.get("Done")}pts`);
    if (points.get("Done") >= points.get("ToDo") + points.get("In Progress") + points.get("Code Review")) {
        console.log('Sprint was successful!');

    } else {

        console.log('Sprint was unsuccessful...');
    }
}

solve([
        '5',
        'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
        'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
        'Peter:BOP-1211:POC:Code Review:5',
        'Georgi:BOP-1212:Investigation Task:Done:2',
        'Mariya:BOP-1213:New Account Page:In Progress:13',
        'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
        'Change Status:Peter:BOP-1290:ToDo',
        'Remove Task:Mariya:1',
        'Remove Task:Joro:1',
    ]
)