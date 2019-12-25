import { Task } from './Task.model';

export class ListToDo {
    private static tasks: Task[];

    /**
     * The Singleton's constructor should always be private to prevent direct
     * construction calls with the `new` operator.
     */
    private constructor() { }

    /**
     * The static method that controls the access to the singleton instance.
     *
     * This implementation let you subclass the Singleton class while keeping
     * just one instance of each subclass around.
     */
    public static getInstance(): Task[] {
        if (!ListToDo.tasks) {
            ListToDo.tasks = new Array<Task>();
        }

        return ListToDo.tasks;
    }
}
