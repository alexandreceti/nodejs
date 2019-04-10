const fs = require("fs")
const chalk = require("chalk")
const add = function (name, description) {
    const tasks = loadTasks()
    const duplicated = tasks.find((task) => task.name === name)
    
    debugger

    if(!duplicated) {
        const task = {
            name,
            description
        }
        tasks.push(task)
        saveTasks(tasks)
        console.log(chalk.green("Tarefa cadastrada com sucesso!.."))
    } else {
        console.log(chalk.red("Tarefa já cadastrada.."))
    }

}

const loadTasks = function() {
    try {
        const tasks = fs.readFileSync('tasks.json')
        return JSON.parse(tasks)
    } catch (error) {
        return []
    }
}

const saveTasks = function(tasks){
    const taskJSON = JSON.stringify(tasks)
    fs.writeFileSync('tasks.json', taskJSON)
}

module.exports = {
    add
}