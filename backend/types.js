const zod = require("zod")

/*
{
   title:String,
   description:String
}

*/
// const titleSchema = zod.string();
// const descSchema = zod.string()

const createTodo = zod.object({
    title: zod.string(),
    description: zod.string()
})

const updateTodo = zod.object({
    id: zod.string()
})


module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}