import React, { useState } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

const Todos = props => {

    return props.todos.map(todo => (
        <TodoItem 
            key={todo.id}
            todo={todo} 
            markComplete={props.markComplete} 
            deleteTodo={props.deleteTodo}
        />
    ))
};  

// PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired
};

export default Todos;