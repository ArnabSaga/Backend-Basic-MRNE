import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    complete: {
        type: Boolean,
        default: false,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,  //How to reference another data models(User)
        ref: "User",
    },
    subTodo: [
        {
            type: mongoose.Schema.Types.ObjectId, //How to reference another data models(SubTodo)
            ref: "SubTodo",
        }
    ] //Array of Sub-Todos
}, { timestamps: true });

export const todo = mongoose.model('Todo', todoSchema);