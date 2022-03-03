import React from 'react';

const TodoTable = (props) => {

    const deleteEntry = (props, index) => {
        props.setTodos(props.todos.filter((todoEntry, i) => i !== index));
    }

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Date</th><th>Description</th>
                    </tr>
                    { props.todos.map((item, index) =>
                    <tr key={index}><td>{item.date}</td><td>{item.description}</td>
                    <td><button onClick={() => deleteEntry(props, index)}>Delete</button></td></tr>)}
                </tbody>
            </table>
        </div>
    );
}
export default TodoTable;