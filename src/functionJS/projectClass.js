//Main Class for projects
export class ProjectClass {
    constructor(title, description, startDate, dueDate, priority, index, list) {

        this.title = title;
        this.description = description;
        this.startDate = startDate;
        this.dueDate = dueDate;
        this.priority = priority;
        this.index = index;
        this.list = list;

        return { title, description, startDate, dueDate, priority, index, list };
    };
};
