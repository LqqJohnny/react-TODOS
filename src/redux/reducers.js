/**
 *  一些 具体的 将数据存入 state 的方法
 * @type {[type]}
 */

import { combineReducers } from 'redux'
import crypto from "crypto";
import { ADD_TODOS, DEL_TODOS ,COM_TODOS ,REDO_TODOS} from './action'

function md5 (text) {
  return crypto.createHash('md5').update(text).digest('hex');
};


const initialState = {
  todos: [
              {todo:"做一个 react-TODOS",id:"dsdjuiqoweujkhdjfkd",complete:false},
              {todo:"react-TODOS添加回收站",id:"2123dfasfewrfewfe",complete:true}
          ]
};

/**
 *  reducer
 */
function todosState(state = initialState, param) {
  switch (param.type) {
      case ADD_TODOS :{
          var _todos = state.todos.slice();
          _todos.push({todo:param.todo ,id: md5(new  Date().getTime()+param.todo), complete:false});
          return Object.assign({},state,{todos:_todos});
      }
      case DEL_TODOS :{
          var _todos = state.todos.slice();
          for(var i = 0 ;i<_todos.length;i++){
              if(_todos[i].id===param.id){
                  _todos.splice(i,1);
                  break;
              }
          }
          return Object.assign({},state,{todos:_todos});
      }
      case COM_TODOS : {
           var _todos = state.todos.slice();
           _todos.map(function(val,i){
               if(val.id===param.id){
                   val.complete = true;
               }
           })
            return Object.assign({},state,{todos:_todos});
      }
      case REDO_TODOS : {
          var _todos = state.todos.slice();
          _todos.map(function(val,i){
              if(val.id===param.id){
                  val.complete = false;
              }
          })
           return Object.assign({},state,{todos:_todos});
      }

      default:
        return state
  }
}

// const todosApp = combineReducers({
//   //  这可以写多个 reduce  将多个  reducer  结合成一个
//   todosState
// })

export default todosState;
