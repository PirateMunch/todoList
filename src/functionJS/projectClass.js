//Main Class for projects
export class projectClass {
    constructor(title, description, dueDate, priority) {


        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;


        return { title, description, dueDate, priority };
    };
};

