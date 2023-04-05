import React from 'react'

export default function ToDo({todo}) {
    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.complete} />
                { todo.name }
            </label>  
        </div>
    )
}
