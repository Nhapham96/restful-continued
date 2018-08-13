const mongoose = require("mongoose");
const TaskSchema = new mongoose.Schema({
    title: {type: String, required: [true, "Title field is required"], minlength:2}, 
    discriptions: {type: String, required: [true, "discriptions field is required"], minlength:2}, 
    completed: {type: Boolean, default: false}
   }, {timestamps: true})
mongoose.model('Task', TaskSchema);