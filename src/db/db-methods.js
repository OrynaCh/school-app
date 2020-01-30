const Lesson = require("../models/models");

const saveLesson = reqBody => {
    const newLesson = new Lesson(reqBody);
    return newLesson.save();
}

const deleteLesson = id => {
    return Lesson.findOneAndDelete({
        _id: id
    });
};

const readLesson = id => {
    return Lesson.findOne({
        _id: id
    });
}
const editLesson = (id, reqBody) => {
    return Lesson.findOneAndUpdate({
        _id: id
    }, {
        $set: reqBody
    }, {
        new: true
    });
}
const listLessons = () => {
    return Lesson.find({});
}
//editing a room number because of renovating a school room as a example of bulk edition
const editManyLessons = reqBody => {
    return Lesson.updateMany({
        room_number: reqBody.room_number_old
    }, {
        $set: {
            room_number: reqBody.room_number_new
        }
    });
}
//in order not to delete all documents, as a example
// we can delete documents which satisfy a certain query,
// e.g. no lessons will take place in certain room
const deleteManyLessons = reqBody => {
    return Lesson.deleteMany({
        room_number: reqBody.room_number
    });
}

module.exports = {
    saveLesson,
    deleteLesson,
    readLesson,
    deleteManyLessons,
    listLessons,
    editManyLessons,
    editLesson
}