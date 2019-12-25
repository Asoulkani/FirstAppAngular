import { Categorie } from "./Categorie.model";

export class Task {
    private toDoName: string;
    private description: string;
    private categorie: Categorie;
    private status: number; // 0 : etat initiale 1 : inprogress 2 : done -1 will not be done
    constructor(taskname: string, taskDescription: string, taskCategorie?: Categorie, taskStatus: number = 0) {
        this.toDoName = taskname;
        this.description = taskDescription;
        if (taskCategorie) {
            this.categorie = taskCategorie;
        }
        this.status = taskStatus;
    }

    changeTaskStatus(newStatus: number) {
        this.status = newStatus;
    }

    getStatus() {
        return this.status;
    }

    getName() {
        return this.toDoName;
    }

    getDescription() {
        return this.description;
    }

    getCategorie() {
        return this.categorie;
    }

    getNewInstance() {
        return new Task(this.getName(), this.getDescription(), this.getCategorie(), this.getStatus());
    }

};