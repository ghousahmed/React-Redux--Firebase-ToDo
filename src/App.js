import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { changeUserName } from './store/actions'
import { getData } from './store/actions'
import { callDelete } from './store/actions'
import { callEdit } from './store/actions'
import { cancel } from './store/actions'
import { update } from './store/actions'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { deleteAll } from './store/actions'


const style = {
  margin: 12,
  color: "#444"
};
const style1 = {
  borderBottomColor: "#444"
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      upDate: "",
      value: ""

    }
  }

  handleChange(ev) {
    this.setState({
      [ev.target.name]: ev.target.value
    })
  }
  handleChange1(ev) {
    this.setState({
      upDate: ev.target.value
    })
  }
  submit() {
    let name1 = this.state.name
    let val = this.refs.name1.getValue()
    if (val === "" || val === " " || val === "  " || val === "   " || val === "    " || val === "     ") {
      alert("enter  something")
      this.refs.name1.focus()
    }
    else {
      this.props.changeUserName(name1);
      this.refs.name1.input.value = " "

    }

  }

  edit(val, ind) {
    this.props.callEdit(val, ind)

  }

  delete(id, ind) {
    this.props.callDelete(id, ind)
  }
  cancel(ind) {
    this.props.cancel(ind)
  }
  update(id, ind) {
    let upDate = this.state.upDate
    let updateVal = this.refs.updateVal.getValue();
    if (updateVal === "" || updateVal === " " || updateVal === "  " || updateVal === "   " || updateVal === "    " || updateVal === "     ") {
      alert("Enter Something")
      this.refs.updateVal.focus()
    }
    else {
      this.props.update(id, ind, upDate)
    }
  }
  deleteAll() {
    this.props.deleteAll()
  }

  componentWillMount() {
    this.props.getData()
  }

  render() {
    return (
      <div>
        <TextField
          hintText="Enter Todo"
          ref="name1"
          onChange={this.handleChange.bind(this)}
          name="name"
          style={style1}
          underlineFocusStyle={{ borderBottomColor: "#ff8a65" }}
          required
        />
        <RaisedButton className="bouton" onClick={this.submit.bind(this)} label="Add Todo" style={style} />
        <RaisedButton className="bouton" onClick={this.deleteAll.bind(this)} label="Delete All" style={style} />

        <div>
          {this.props.todo.map((val, ind) => {
            return (
              <div key={ind}>{
                (!val.flag) ?
                  <div>
                    <li className="list">{val.todo}</li>

                    <button className="btn" onClick={this.edit.bind(this, val, ind)}>Edit</button>
                    <button className="btn" onClick={this.delete.bind(this, val.id, ind)}>Delete</button>
                  </div>
                  :
                  <div>
                    <TextField
                      hintText="Enter Todo"
                      ref="updateVal"
                      onChange={this.handleChange1.bind(this)}
                      underlineFocusStyle={{ borderBottomColor: "#ff8a65" }}
                      style={{ width: "60%" }}
                      defaultValue={val.todo}
                    />
                    <button className="btn" onClick={this.update.bind(this, val.id, ind)}>Update</button>
                    <button className="btn" onClick={this.cancel.bind(this, ind)}>Cancel</button>
                  </div>
              }</div>
            )
          })}
        </div>


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
    changeUserName: (name) => { dispatch(changeUserName(name)) },
    getData: () => { dispatch(getData()) },
    callDelete: (id, ind) => { dispatch(callDelete(id, ind)) },
    callEdit: (val, ind) => { dispatch(callEdit(val, ind)) },
    cancel: (ind) => { dispatch(cancel(ind)) },
    update: (id, ind, val) => { dispatch(update(id, ind, val)) },
    deleteAll: () => { dispatch(deleteAll()) }
  })
}





export default connect(mapStateToProp, mapDispatchToProp)(App);
