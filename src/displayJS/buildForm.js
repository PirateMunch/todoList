

export default function buildForm () {
    const projectSection = document.getElementById('projectSection');

    const formDiv = document.createElement('div');
    formDiv.className = "formDiv";
    projectSection.appendChild(formDiv);
    const form = document.createElement('form');
    form.name = "form";
    form.id = "form";
    form.className = "form1";
    formDiv.appendChild(form);

    const titleDiv = document.createElement('div');
    titleDiv.className = "titleDiv";
    form.appendChild(titleDiv);
    const titleInput = document.createElement('input');
    titleInput.type = "text";
    titleInput.id = "title";
    titleInput.placeholder = "Add Project Title";
    titleDiv.appendChild(titleInput);

    const descriptionDiv = document.createElement('div');
    descriptionDiv.className = "descriptionDiv";
    form.appendChild(descriptionDiv);
    const descriptionInput = document.createElement('input');
    descriptionInput.type = "text";
    descriptionInput.id = "description";
    descriptionInput.placeholder = "Add a short description of your To-Do List project";
    descriptionDiv.appendChild(descriptionInput);

    const dueDateDiv = document.createElement('div');
    dueDateDiv.className = "dueDateDiv";
    form.appendChild(dueDateDiv);
    const dueDateInput = document.createElement('input');
    dueDateInput.type = "date";
    dueDateInput.id = "dueDate";
    dueDateDiv.appendChild(dueDateInput);

    const priorityDiv = document.createElement('div');
    priorityDiv.className = "priorityDiv";
    form.appendChild(priorityDiv);
    const priorityInput = document.createElement('input');
    priorityInput.type = "range";
    priorityInput.id = "priority";
    priorityInput.min = "1";
    priorityInput.max = "5";
    priorityDiv.appendChild(priorityInput);

    const submitButton = document.createElement('button');
    submitButton.type = "button";
    submitButton.id = "formSubmitButton";
    submitButton.textContent = "add project";
    form.appendChild(submitButton);
    
};






/* <div id="hideForm">

    <button type="submit" id="formSubmitButton">add project</button>
</form>
</div> */