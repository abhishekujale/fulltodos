//

const express = require("express")

const bodyParser = require("body-parser");
const { createTodo } = require("./types");

const app = express()


    /
    app.use(express.json());

app.get("/todo", (req, res, err) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload)


    if (!parsedPayload.success) {
        return res.status(411).json({
            msg: "Wrong Input"
        })
    }
})
app.post("/todos", (req, res, err) => {
})
app.put("/completed", (req, res, err) => {
    const updatePayload = req.body;
    const parsedPayload = updatePayload.safeParse(updatePayload)
    if (!parsedPayload.success) {
        return res.status(411).json({
            msg: "Wrong Input"
        })
    }
})

app.post()

app.listen(3000)