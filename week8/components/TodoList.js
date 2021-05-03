
/*import React,{Component} from 'react';
import Axios from 'axios';
class TodoList extends Component{
    constructor(){
        super()
        this.state={
            Todos:[],
            dataFetched:false
        }
    }
    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/todos')
        .then((response)=>{
            this.setState({
                Todos:response.data,
                dataFetched:true
            })
        })
        .catch((err)=>{
            console.log('error has occured');
        })
    }
    render(){
        console.log('its work');
        const {Todos,dataFetched}=this.state;
                if(dataFetched){
                if(Todos.length===0){
                    return <h1> Todos is empty</h1>

                }else{
                    return(
                        <div>
                        <ul>
                    {Todos.map(todo=>{
                        return <li key={(todo.id)}>{todo.title}
                     <span className="Marker">
                         <input className="checked-box" type="checkbox" checked={Todos.completed} />
                     </span>
                     </li>
                     })}
                     </ul>
                     </div>

                     );
                }
            }
            else{
                return <h1> data reloaded</h1>
            }
    }
}
export default TodoList;*/

import React, { Component } from 'react';
import Axios from 'axios';


class TodoList extends Component {
    constructor (props) {
        super (props);
        this.state = {
            name: "TodoList",
            todos:[]
        }
    }

    updateTaskName = (event) => {
        this.setState({
            taskName: event.target.value
        })
    }
   
    componentDidMount() {

    }
    
    fetchTasks=() => {
        Axios.get(`https://jsonplaceholder.typicode.com/todos`)
        .then((response) => {
            this.setState({
                todos: response.data.slice(0,40),
                dataFetched: true
            })
        })
        .catch((error) => {
            alert(`Error: ${error}`);
        })
    }
    
    render() {
        const {name, todos} = this.state;
        console.log("updated")  

        return(
            <div>
            <h1 style={{color:'black'}}> {name} </h1>
            <button onClick={this.fetchTasks}> Fetch Data </button>
            <ul>
                {todos.map((todo)=>{
                    return (
                    <div  key={todo.id}>
                    {todo.completed === true ? (
                        <li style={{color:'green'}}>
                    {todo.title}
                    <span className="marker">
                        <input className="checked-box" type="checkbox" checked={todo.completed} />
                    </span>
                    </li>
                    ):(<li style={{color:'red'}}>
                    {todo.title}
                    <span className="marker">
                        <input className="checked-box" type="checkbox" checked={todo.completed} />
                    </span>
                    </li>)}
                    
                    </div>
                    )
                })}
            </ul>    
            </div>
        )
    }
}
export default TodoList