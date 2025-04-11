interface Todo{
    title:string;
    description:string;
}
function updateTodo(todo:Todo, fieldsToUpdate: Partial<Todo>):Todo{
    return{...todo, ...fieldsToUpdate};
}
 
const todo1: Todo ={title:"Learn TypeScript" , description: "Study TypeScript utility types"};
 
const todo2= updateTodo(todo1, {description: "Master TypeScript"});
 
console.log(todo2);
console.log(todo1);