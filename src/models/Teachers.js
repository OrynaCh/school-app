const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const teacherSchema = new Schema({
    first_name: {
        type: String,
    },
    last_name: {
        type: String,
    },
    subject: {
        type: mongoose.Schema.Types.ObjectId,
    },
    date_of_birth: {
        type: Date,
    },
    lessons_per_week: {
        type: Number,
    }
});
module.exports = mongoose.model("theTeacher", teacherSchema);