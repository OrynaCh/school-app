const Lesson = require("../models/models");

function deleteLesson(id) {
    Lesson.findOneAndDelete({
        _id: id
    });
};

function saveLesson(objectToSave) {
    return objectToSave.save()
};

// to do readLesson (), editLesson (), editManyLessons (), deleteManyLessons, listLessons ()

module.exports = saveLesson;
module.exports = deleteLesson;;