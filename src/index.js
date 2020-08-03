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


const ButtonInputs = (() => {

    const toggleComplete = (pos) => {
        let i = pos[0];
        let j = pos[1];
        let arr = listArray[i];
        arr = arr[j];
        arr.markComplete();
    };

    return {
        toggleComplete
    }
})();