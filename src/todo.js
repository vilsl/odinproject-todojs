/* 
This module handles creating and modifying todos, and lists 
containing the todos. Exports 'TodoMediator' as 'todo' which 
functions as the API.
*/

// Factory that creates object that holds todos
const ListObject = (name) => {
    let _todoArray = [];
    
    const getName = () => name;
    const addToArray = todoContent => _todoArray.push(todoContent);
    const removeFromArray = todoContent => _todoArray.pop(todoContent);
    const getArray = () => _todoArray;

    return {
        addToArray, 
        removeFromArray,
        getArray,
        getName
    }
};

// Factory that creates todo objects
const TodoObject = (title, description, dueDate, priority) => {
    let completed = false;
    // Return information about the todo
    const getTitle = () => title;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;
    const getCompleted = () => completed;
    const getDescription = () => description;
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
        getDescription,
        changeTitle,
        changeDescription,
        changeDueDate,
        changePriority,
        markComplete,
        markNotComplete
    }
};

// Pushes and removes from the 
const ListUpdater = (() => {
    const pushList = (list, todoContent) => list.addToArray(todoContent);
    const popList = (list, todoContent) => list.removeFromArray(todoContent);

    return {
        pushList,
        popList
    }
})();

// Update title, description, due date, priority, complete status
const TodoUpdater = (() => {
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
const NewTodo = (() => { 
    const addToArray = (title, description, dueDate, priority, list) => {
        let newTodo = TodoObject(title, description, dueDate, priority);
        list.addToArray(newTodo);
    };
    return { addToArray }
})();

// Removes todo object from list array
const RemoveTodo = (() => {
    const removeFromArray = (todo, list) => {
        list.removeFromArray(todo);
    };
    return { removeFromArray }
})();

// Mediator function
const TodoMediator = ((command) => {
    const newList = (name) => {
        let newList = ListObject(name);
        return newList;
    };

    const newTodo = (title, description, dueDate, priority, list) => {
        NewTodo.addToArray(title, description, dueDate, priority, list);
    };

    const removeTodo = (todo, list) => {
        RemoveTodo.removeFromArray(todo, list);
    };

    const completeTodo = (todoContent) => {
        if (todoContent.getCompleted === false){
            TodoUpdater.markComplete(todoContent);
        }
        else {
            TodoUpdater.markNotComplete(todoContent);
        }
    };

    // Modifies the todo object with new info
    if (command == "updateTodo"){
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

    return {
        newList,
        newTodo,
        removeTodo,
        completeTodo,
    }
})();

export default TodoMediator;
export {ListObject, TodoObject, TodoMediator as todo, ListUpdater, TodoUpdater, NewTodo, RemoveTodo};