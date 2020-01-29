const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const lessonSchema = new Schema({
        teacher_id: {
            type: String,
        },
        class_id: {
            type: String,
        },
        subject_id: {
            type: String,
        },
        room_number: {
            type: Number,
        },
        day_of_week: {
            type: String,
        },
        start_time: {
            type: String,
        },
        end_time: {
            type: String,
        },
    }

);

module.exports = mongoose.model("theLesson", lessonSchema)