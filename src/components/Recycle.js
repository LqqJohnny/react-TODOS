import React from 'react';

import { connect } from 'react-redux';  // 要想使用 redux 需要先 连接   connect
import  { redoTodos , delTodos} from '../redux/action.js';

import "../css/home.css"
class Recycle extends React.Component {

    render() {
        var {dispatch , todos} = this.props;
        var list ;

        todos = todos.filter(function(val,i){
            return val.complete;
        })
        if(todos.length===0){
             list = <div className="note">回收站 空空如也~~</div>
        }else{
            list = todos.map(function (val,index) {
                    return  <div key={val.id} className="completeItem">
                                <span>{index+1}、</span>
                                {val.todo}
                                <button className="redo" onClick={()=>{dispatch(redoTodos(val.id))}}>撤销</button>
                                <button className="delTodo" onClick={()=>{dispatch(delTodos(val.id))}}>删除</button>
                            </div>
            })
        }

        return (
            <div>
                <div className="todoList">
                      {list}
                </div>
            </div>

        );
    }
}

function select(state) {
  return state;
}
export default connect(select)(Recycle);
