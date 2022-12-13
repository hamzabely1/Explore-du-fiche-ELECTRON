import { Task } from "./Task";

export class TodoList {
    tasks:Task[] = [];

    addTask(label:string):void {
        const task = new Task(label);
        this.tasks.push(task);
    }

    checkTask(index:number):void {
        if(!this.tasks[index]) {
            throw new Error('No task at this index');
        }
        this.tasks[index].toggle();
    }

    clearDone():void {
        this.tasks = this.tasks.filter(task => !task.done);

        // for (let index = 0; index < this.tasks.length; index++) {
        //     const task = this.tasks[index];
        //     if(task.done) {
        //         this.tasks.splice(index, 1);
        //         index--;
        //     }
        // }
    }
}
