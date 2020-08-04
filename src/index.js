import * as todo from "./todo.js";
import renderer from "./renderer.js";

let listArray = []; // array containing all the lists with todos

let testList = todo.todo.newList("testList");
listArray.push(testList);
let secondList = todo.todo.newList("secondList");
listArray.push(secondList);

todo.todo.newTodo("bananabananasbanabananabananasbananasbananassnasbananass", "Eat many banans", "21.07.20", "!!!", testList);
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

    const addEventHandlers = () => {
        _addToggleCompleteEvent();
    };

    return {
        addEventHandlers
    }
})();

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
            todoDiv.className += " completedTodo";
            e.target.innerHTML = "&#10003;";
            arr.markComplete();
        }
        else {
            todoDiv.className = "todo";
            e.target.innerHTML = "";
            arr.markNotComplete();
        }
        console.log(arr.getTitle());
        console.log(arr.getCompleted());
        
    };

    const buttonComplete = (e) => {
        _toggleComplete(e);
    };

    return {
        buttonComplete
    }
})();

EventHandler.addEventHandlers();