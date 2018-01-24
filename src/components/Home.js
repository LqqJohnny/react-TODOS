import React from 'react';

import { connect } from 'react-redux';  // 要想使用 redux 需要先 连接   connect
import  { addTodos  ,comTodos} from '../redux/action.js';

import "../css/home.css"
class Home extends React.Component {
    constructor(){
        super();
        this.state = {
            showAddForm : false
        }
        // 绑定方法
        this.toggleAdd = this.toggleAdd.bind(this);
    }
    toggleAdd(){
        this.refs.myInput.value="";
        this.refs.myInput.focus();
        this.setState({"showAddForm":!this.state.showAddForm })
    }
    enterAdd(dispatch,e){
        e.persist(); // 需要 调用该方法 才能获取大原生 js event 对象
        if(e.keyCode==13){
            this.sureAdd(dispatch);
        }
    }
    sureAdd(dispatch){
        dispatch(addTodos(this.refs.myInput.value));
        this.setState({"showAddForm":false});
    }
    render() {
        var {dispatch , todos} = this.props;
        var list ;
        var addTodo;

        todos = todos.filter(function(val,i){
            return !val.complete;
        })
        if(todos.length===0){
             list = <div className="note">请添加 TODO </div>
        }else{
            list = todos.map(function (val,index) {
                    return  <div key={val.id} className="todoItem">
                                <span>{index+1}、</span>
                                {val.todo}
                                <button className="complete" onClick = {()=>{dispatch(comTodos(val.id))}}>完成</button>
                            </div>
            })
        }

        return (
            <div>
                <div className="addTodo"><button onClick={this.toggleAdd}>{this.state.showAddForm?"取消":"添加"}</button></div>
                <div className="todoList">
                      {list}
                </div>
                <div className="addTodo" style={{display: this.state.showAddForm?'block':'none'}}>
                    <div className="addItem">
                        <input type="text" id="myInput" ref="myInput" onKeyDown={this.enterAdd.bind(this,dispatch)} />
                        <button className="complete" onClick={this.sureAdd.bind(this,dispatch)}>确定</button>
                    </div>
                </div>
            </div>

        );
    }
}

function select(state) {
  return state;
}
export default connect(select)(Home);
