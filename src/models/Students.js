const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const studentSchema = new Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    class_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "theClass"
    },
    contact: {
        type: String,
        required: true,
    },
});
module.exports = mongoose.model("theStudents", studentSchema);