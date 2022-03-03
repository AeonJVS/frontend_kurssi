import React, {useState} from 'react';
import TodoTable from './TodoTable';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [todoEntry, setTodoEntry] = useState({description: "", date: ""})

    const inputChanged = (event) => {
        setTodoEntry({...todoEntry, [event.target.name]: event.target.value});
    }
    
    const addTodo = (event) => {
        event.preventDefault();
        setTodos([...todos, todoEntry]);
    }

    const deleteEntry = (props, index) => {
        props.setTodos(props.todos.filter((todoEntry, i) => i !== index));
    }

    return (
        <div>
            Add todo:
            <form onSubmit={addTodo}>
                Description:
                <input type="text" name="description" value={todoEntry.description} onChange={inputChanged} />
                Date:
                <input type="text" name="date" value={todoEntry.date} onChange={inputChanged} />
                <input type="submit" value="Add" />
            </form>
            <TodoTable todos={todos} setTodos={setTodos} deleteEntry={deleteEntry} />
        </div>
    )
}
export default TodoList;