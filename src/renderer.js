/* 
This module handles rendering the lists and todos, then pushes
them to the DOM.
*/

// Takes input and creates DOM-stuff accordingly, then pushes to DOM.
const ListRenderer = (() => {

    // Creates DOM title for todo object
    const _domTitleCreator = (todoObject) => {
        let element = document.createElement("p");
        element.innerHTML = todoObject.getTitle();
        element.setAttribute("class", "title");
        return element;
    };

    // Creates DOM date for todo object
    const _domDateCreator = (todoObject) => {
        let element = document.createElement("p");
        element.innerHTML = todoObject.getDueDate();
        element.setAttribute("class", "dueDate");
        return element;
    };

    // Creates DOM priority for todo object
    const _domPriorityCreator = (todoObject) => {
        let element = document.createElement("p");
        element.innerHTML = todoObject.getPriority();
        element.setAttribute("class", "priority");
        return element;
    };

    // Creates DOM complete status for todo object
    const _domCompleteCreator = (todoObject) => {
        let element = document.createElement("p");
        element.innerHTML = todoObject.getCompleted();
        element.setAttribute("class", "completeStatus");
        return element;
    };

    // Creates DOM description for todo object
    const _domDescriptionCreator = (todoObject) => {
        let element = document.createElement("p");
        element.innerHTML = todoObject.getDescription();
        element.setAttribute("class", "description", "hidden");
        return element;
    };

    const _domPusher = (element) => {
        document.getElementById("todoContainer").appendChild(element);
    };

    const _createListAndTodo = (listsArray) => {
        // loop all todo lists
        for (let i = 0; i < listsArray.length; i++){
            // Create initial div
            let listDiv = document.createElement("div");
            listDiv.setAttribute("id", `list${i}`);
            listDiv.setAttribute("class", "list");
            // Grab list name
            let listName = document.createElement("h2");
            listName.innerHTML = listsArray[i].getName();
            listDiv.appendChild(listName);
            // loop todo objects in each list
            let todoArray = listsArray[i].getArray();
            for (let j = 0; j < todoArray.length; j++){
                // Create new todo div
                let todoDiv = document.createElement("div");
                let pos = [i,j];
                todoDiv.setAttribute("id", `todo${pos}`);
                todoDiv.setAttribute('class', 'todo');
                todoDiv.setAttribute('value', pos);
                
                let title = _domTitleCreator(todoArray[j]);
                let dueDate = _domDateCreator(todoArray[j]);
                let priority = _domPriorityCreator(todoArray[j]);

                let button = document.createElement("button");
                button.setAttribute("id", `completeButton${j}`);
                button.setAttribute("class", "completeButton");
                button.setAttribute('value', pos);

                let metaDiv = document.createElement("div");
                metaDiv.setAttribute("class", "todoMeta");

                let titleDiv = document.createElement("div");
                titleDiv.setAttribute("class", "titleDiv");
                titleDiv.setAttribute('value', pos);

                metaDiv.appendChild(priority);
                metaDiv.appendChild(dueDate);

                titleDiv.appendChild(title);

                todoDiv.appendChild(button);
                todoDiv.appendChild(titleDiv);
                todoDiv.appendChild(metaDiv);


                listDiv.appendChild(todoDiv);
                _domPusher(listDiv)
            }
            
        }
    };

    const renderList = (listsArray) => {
        _createListAndTodo(listsArray);
    };

    return {
        renderList
    }
})();

// API
const RenderMediator = (() => {

    const render = (listArray) => {
        ListRenderer.renderList(listArray);
    };

    return {
        render
    }

})();

export default RenderMediator;