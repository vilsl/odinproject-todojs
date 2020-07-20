/* 
This module handles creating and modifying todos, and lists 
containing the todos. Exports 'TodoMediator' as 'todo' which 
functions as the API.
*/

// Factory that creates object that holds todos
const ListObject = (todoContent) => {
    let _todoArray = [];

    const addToArray = todoContent => _todoArray.push(todoContent);
    const removeFromArray = todoContent => _todoArray.pop(todoContent);
    const getArray = () => _todoArray;

    return {
        addToArray, 
        removeFromArray,
        getArray
    }
};

// Factory that creates todo objects
const TodoObject = (title, description, dueDate, priority) => {
    let completed = false;
    // Return information about the todo
    const getTitle = () => title;
    const getDescription = () => title;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;
    const getCompleted = () => completed;
    // Modify information in the todo
    const changeTitle = newTitle => title = newTitle;
    const changeDescription = newDescription => description = newDescription;
    const changeDueDate = newDueDate => dueDate = newDueDate;
    const changePriority = newPriority => priority = newPriority;
    const markComplete = () => completed = true;
    const markNotComplete = () => completed = false;

    return {
        getTitle,
        getDescription,
        getDueDate,
        getPriority,
        getCompleted,
        changeTitle,
        changeDescription,
        changeDueDate,
        changePriority,
        markComplete,
        markNotComplete
    }
};

// Pushes and removes from the 
const ListUpdater = ((list, todoContent) => {
    const pushList = (list, todoContent) => list.addToArray(todoContent);
    const popList = (list, todoContent) => list.removeFromArray(todoContent);

    return {
        pushList,
        popList
    }
})();

// Update title, description, due date, priority, complete status
const TodoUpdater = ((todo, newInfo) => {
    const changeTitle = (todo, newInfo) => todo.changeTitle(newInfo);
    const changeDescription = (todo, newInfo) => todo.changeDescription(newInfo);
    const changeDueDate = (todo, newInfo) => todo.changeDueDate(newInfo);
    const changePriority = (todo, newInfo) => todo.changePriority(newInfo);
    const markComplete = (todo) => todo.markComplete();
    const markNotComplete = (todo) => todo.markNotComplete();

    return {
        changeTitle,
        changeDescription,
        changeDueDate,
        changePriority,
        markComplete,
        markNotComplete
    }
})();

// Creates a new todo object  
const NewTodo = ((title, description, dueDate, priority, list) => { 
    let newTodo = TodoUpdater(title, description, dueDate, priority);
    list.addToArray(newTodo);
})();

// Removes todo object from list array
const RemoveTodo = ((todo, list) => {
    list.removeFromArray(todo);
})();

// Mediator function
const TodoMediator = ((command, todoContent, newTodo) => {
    if (command == "newTodo"){
        NewTodo(title, description, dueDate, priority, list);
    }
    else if (command == "removeTodo"){
        RemoveTodo(todo, list);
    }
    // Toggles 'compete' status of todo object
    else if (command == "completeTodo"){
        if (todoContent.getCompleted == false){
            TodoUpdater.markComplete(todoContent);
        }
        else {
            TodoUpdater.markNotComplete(todoContent);
        }
    }
    // Modifies the todo object with new info
    else if (command == "updateTodo"){
        if (todoContent.getTitle() != newTodo.getTitle()){
            TodoUpdater.changeTitle(todoContent, newTodo.getTitle());
        }
        if (todoContent.getDescription() != newTodo.getDescription()){
            TodoUpdater.changeDescription(todoContent, newTodo.getDescription());
        }
        if (todoContent.getDueDate() != newTodo.getDueDate()){
            TodoUpdater.changeDueDate(todoContent, newTodo.getDueDate());
        }
        if (todoContent.getPriority() != newTodo.getPriority()){
            TodoUpdater.changePriority(todoContent, newTodo.getPriority());
        }
    }
})();

export {TodoMediator as todo};