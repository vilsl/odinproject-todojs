import * as todo from "./todo.js";
import renderer from "./renderer.js";

let listArray = []; // array containing all the lists with todos

let testList = todo.todo.newList("testList");
listArray.push(testList);
let secondList = todo.todo.newList("secondList");
listArray.push(secondList);

todo.todo.newTodo("bananabananasbanabananabananasbananasbananassnasbananass", "Eat many bananabananasbanabananabananasbananasbananassnasbananassbanans", "21.07.20", "!!!", testList);
todo.todo.newTodo("apples", "Eat a fuckton of apples", "23.02.20", "", testList);
todo.todo.newTodo("apples", "Eat a fuckton of apples", "23.02.20", "!!", testList);
todo.todo.newTodo("apples", "Eat a fuckton of apples", "23.02.20", "!", testList);
todo.todo.newTodo("apples", "Eat a fuckton of apples", "23.02.20", "", testList);
todo.todo.newTodo("apples", "Eat a fuckton of apples", "23.02.20", "", testList);

todo.todo.newTodo("bananas", "Eat many banans", "21.07.20", "!!!", secondList);
todo.todo.newTodo("apples", "Eat a fuckton of apples", "23.02.20", "!!", secondList);
todo.todo.newTodo("apples", "Eat a fuckton of apples", "23.02.20", "!", secondList);
todo.todo.newTodo("apples", "Eat a fuckton of apples", "23.02.20", "", secondList);
todo.todo.newTodo("apples", "Eat a fuckton of apples", "23.02.20", "", secondList);
todo.todo.newTodo("apples", "Eat a fuckton of apples", "23.02.20", "!!!", secondList);

renderer.render(listArray);

const EventHandler = (() => {
    const _addToggleCompleteEvent = () => {
        let buttons = document.getElementsByClassName("completeButton");
        for (let i = 0; i < buttons.length; i++){
            buttons[i].addEventListener("click", InputHandler.buttonComplete);
        }
    };

    const _addExpandTodoEvent = () => {
        let todoDivs = document.getElementsByClassName("titleDiv");
        for (let i = 0; i < todoDivs.length; i++){
            todoDivs[i].addEventListener("click", InputHandler.clickedTitle);
        }
    };

    const addEventHandlers = () => {
        _addToggleCompleteEvent();
        _addExpandTodoEvent();
    };

    return {
        addEventHandlers
    }
})();
// This can be optimized, lots of repeat code
const InputHandler = (() => {
    // Grabs the "position" of the target todo object. First value is list index, second is todo index in the list.
    const _toggleComplete = (e) => { 
        let arr = e.target.value;
        let i = arr[0]; // Get position
        let j = arr[2];
        let pos = arr;
        arr = listArray[i]; // Get corresponding list
        arr = arr.getArray(); // Get todo array from the list
        arr = arr[j]; // Get specified todo object
        let todoDiv = document.getElementById(`todo${pos}`);
        if (arr.getCompleted() === false){
            todoDiv.classList.toggle("completedTodo");
            e.target.innerHTML = "&#10003;";
            arr.markComplete();
        }
        else {
            todoDiv.classList.toggle("completedTodo");
            e.target.innerHTML = "";
            arr.markNotComplete();
        }
        console.log(arr.getTitle());
        console.log(arr.getCompleted());
        
    };

    const _expandTodo = (e) => { // Get todo object, toggle expanded description
        let arr = e.target;
        arr = arr.parentNode;
        arr = arr.getAttribute('value');
        let i = arr[0]; 
        let j = arr[2];
        let pos = arr;
        arr = listArray[i]; 
        arr = arr.getArray(); 
        arr = arr[j]; 

        let todoDiv = document.getElementById(`todo${pos}`);
        if (todoDiv.querySelectorAll(".description").length > 0){
            document.getElementById(`description${pos}`).remove();
        }
        else {
            let descriptionDiv = document.createElement("div");
            descriptionDiv.setAttribute("class", "description");
            descriptionDiv.setAttribute("id", `description${pos}`);
    
            let description = document.createElement("p");
            description.innerHTML = arr.getDescription();
    
            descriptionDiv.appendChild(description);
    
            todoDiv.appendChild(descriptionDiv);  
        }
    };

    const buttonComplete = (e) => {
        _toggleComplete(e);
    };

    const clickedTitle = (e) => {
        _expandTodo(e);
    };

    return {
        buttonComplete,
        clickedTitle
    }
})();

EventHandler.addEventHandlers();