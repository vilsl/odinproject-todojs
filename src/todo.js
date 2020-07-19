// Factory that creates object that holds todos
const ListObject = (name) => {
    // Holds all the todo objects
    let _todoArray = [];

    const addToArray = newTodo => {
        _todoArray.push(newTodo);
    };

    const removeFromArray = newTodo => {
        _todoArray.pop(newTodo);
    };

    const returnArray = () => {
        return _todoArray;
    };

    return {
        addToArray,
        removeFromArray,
        returnArray
    }
};

// Factory that creates todo objects
const TodoObject = (title, description, dueDate) => {
    const getTitle = () => title;
    const getDescription = () => title;
    const getDueDate = () => dueDate;
    // priority
    // completionStatus

    return {
        getTitle,
        getDescription,
        getDueDate
    }
};

// HUSK loose coupling. Ha et mellomledd for alle modifikasjoner,
// og gets du vil gjøre med listene og todo!!!!

// todoTower, mellommann og den man eksporterer


const updateTitle = (() => {

})();

const updateDescription = (() => {

})();

const updateDueDate = (() => {

})();

const addToList = (() => {

})();

const removeFromList = (() => {

})();