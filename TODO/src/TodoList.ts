import { TodoItem } from "./todoItem";

export class TodoList {

    constructor(public name: string, private tasks: TodoItem[] = []){}

    addTask(task: string): void{
        this.tasks.push(new TodoItem(task));
    }

    getTasks(): readonly TodoItem[]{
        return this.tasks;
    }
}