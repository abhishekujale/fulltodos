
const express = require("express")
const { todo } = require("./db")
const bodyParser = require("body-parser");
const { createTodo, updateTodo } = require("./types");
const app = express()


app.use(express.json());

app.post("/todo", async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload)


    if (!parsedPayload.success) {
        return res.status(411).json({
            msg: "Wrong Input"
        })
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: createPayload.completed
    })
    res.json(
        {
            msg: "Todo created"
        }
    )
})


app.get("/todos", async (req, res) => {
    const todos = await todo.find({

    })
    // console.log(todos);//promise
    res.json({
        todos
    })
})
app.put("/completed", async (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload)
    if (!parsedPayload.success) {
        return res.status(411).json({
            msg: "Wrong Input"
        })
    }
    //Mongoose

    await todo.update({
        _id: updatePayload.id
    }, {
        completed: true
    })
    res.json({
        msg: "Todo updated"
    })
})

// app.post()

app.listen(3000)