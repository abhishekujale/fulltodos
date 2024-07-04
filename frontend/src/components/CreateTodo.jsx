import React from 'react'

export function CreateTodo ()  {
  return (
    <div>
          <input style={{
              padding: 10,
              width: 190,
          }}    type="text" placeholder='Title' /><br /><br />
          <input style={{
              padding: 10,
              width: 190,
          }}  type="text" placeholder='Description' /><br /><br />
          <button> Add Todo</button>
    </div>
  )
}


