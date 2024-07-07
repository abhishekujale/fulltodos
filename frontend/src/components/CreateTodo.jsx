import React, { useState } from 'react'

export function CreateTodo() {
  const [title, useTitle] = useState("");
  const [description, useDescription] = useState("");

  return (
    <div>
          <input style={{
              padding: 10,
              width: 190,
      }} type="text" placeholder='Title' onChange={function (e)
      {
        useTitle(e.target.value);
        // console.log(e.target.value)
            }
          } /><br /><br />
          <input style={{
              padding: 10,
              width: 190,
      }} type="text" placeholder='Description' onChange={function (e)
      {
        useDescription(e.target.value);
        // console.log(e.target.value)

            }
          } /><br /><br />
      <button onClick={() => {
        fetch("http://localhost:3000/todos",
          {
            method: "POST",
            body: JSON.stringify(
              {
                title: "",
                description: ""
              },
              {
                headers: {
                  "ContentType": "application/json"
                }
            })
          }
        )
          .then(async function (res){
            const json = await res.json();
            // console.log(json)
            alert("Todo Added")
        })
          }}> Add Todo</button>
    </div>
  )
}


