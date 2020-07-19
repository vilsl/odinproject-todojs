/* 
This module handles creating and modifying todos, and lists 
containing the todos. Exports 'TodoMediator' as 'todo' which 
functions as the API.
*/

// Factory that creates object that holds todos
const ListObject = () => {
    let _todoArray = [];

    const addToArray = newTodo => _todoArray.push(newTodo);
    const removeFromArray = newTodo => _todoArray.pop(newTodo);
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

const ListUpdater = (() => {
// Add to list, remove from list
})();

const TodoUpdater = (() => {
// Update title, description, due date, priority, complete status
})();

// Mediator function
const TodoMediator = (() => {

})();

export {TodoMediator as todo};