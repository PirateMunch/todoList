//Main Class for projects
export class projectClass {
    constructor(title, description, startDate, dueDate, priority) {

        this.title = title;
        this.description = description;
        this.startDate = startDate;
        this.dueDate = dueDate;
        this.priority = priority;


        return { title, description, startDate, dueDate, priority };
    };
};

