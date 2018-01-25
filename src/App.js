import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import {changeUserName} from './store/actions'
import {getData} from './store/actions'
import firebase from 'firebase'
import {callDelete} from './store/actions'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      // TodoInput: []
      name: "",
      flag: false,
      disabled: true
      
    }
  }

// onChangeHandler(todo){
//       this.setState({[todo.target.name] : todo.target.value })
// }

// AddTodo(){
//   let TodoValue = {
//   TodoInput: [this.state.TodoInput]
// }
// this.setState({
//     TodoInput: []
   
// })
// console.log(TodoValue);
// this.props.TodoAdd(TodoValue);
// }
handleChange(ev){
  this.setState({
    [ev.target.name]: ev.target.value
  })
}
submit(){
let name1 = this.state.name
this.props.changeUserName(name1)
this.refs.name.value = ""

}

edit(val,id){
  
}

delete(id,ind){
this.props.callDelete(id,ind)
}

componentWillMount(){
  this.props.getData()
}

  render() {
    
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //     <input type='text' name='TodoInput' value={this.state.TodoInput} onChange={this.onChangeHandler.bind(this)} />
      //     <button onClick={this.AddTodo.bind(this)}>Add</button>
      //   </header>
      //   <p className="App-intro">
      //     {/* To get started, edit <code>src/App.js</code> and save to reload. */}
      //   </p>
      // </div>
      <div>
        <input type="text" ref="name" name="name" placeholder="enter your name" onChange={this.handleChange.bind(this)} />
        <button onClick={this.submit.bind(this)}>SAVE</button>
        <ul>
          {this.props.todo.map((val,ind)=>{
            console.log(val.flag)
            return
            {(val.flag) ?

            <li key={ind}>{val.todo}

            <button onClick={this.edit.bind(this,val,ind)}>Edit</button>
            <button onClick={this.delete.bind(this,val.id,ind)}>Delete</button>
            </li>
            :
            <div>
            <button onClick={() => { this.setState({ flag: true }) }}>Update</button>
            <button onClick={this.delete.bind(this)}>Cancel</button>
            </div>
            }
          })}
        </ul>
      
    
        </div>
    );
  }
}


function mapStateToProp(state) {
  return ({
      todo: state.root.todo
  })
}
function mapDispatchToProp(dispatch) {
  return ({
 changeUserName: (name)=>{dispatch(changeUserName(name))},
 getData: ()=>{dispatch(getData())},
 callDelete: (id,ind)=>{dispatch(callDelete(id,ind))}
 
 
      // AddTodo: (TodoValue)=>{
      //     dispatch(AddTodo(TodoValue))
      // }
  })
}





export default connect(mapStateToProp,mapDispatchToProp)(App);
