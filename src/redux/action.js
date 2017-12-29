

export const ADD_TODOS =  'ADD_TODOS';
export const DEL_TODOS =  'DEL_TODOS';
export const COM_TODOS =  'COM_TODOS';
export const REDO_TODOS =  'REDO_TODOS';


export function addTodos(todo){
    return {type: ADD_TODOS, todo}
}


export function delTodos(id){
    return {type : DEL_TODOS, id}
}

export function comTodos(id){
    return {type : COM_TODOS, id}
}

export function redoTodos(id){
    return {type : REDO_TODOS, id}
}
