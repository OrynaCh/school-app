const mongoose = require("mongoose");
require("./Teachers");
const Schema = mongoose.Schema;
const lessonSchema = new Schema({
        teacher: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "theTeacher",
        },
        class_id: {
            type: mongoose.Schema.Types.ObjectId,
        },
        subject_id: {
            type: mongoose.Schema.Types.ObjectId,
        },
        lesson_topic: {
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
module.exports = mongoose.model("theLesson", lessonSchema);