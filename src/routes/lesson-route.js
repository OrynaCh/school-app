const express = require('express');
const router = express.Router();
const lesson_controller = require('../controllers/lesson-controller');
router.post("/", lesson_controller.lesson_create);
router.get("/:id", lesson_controller.lesson_read);
router.put("/:id", lesson_controller.lesson_edit);
router.get("/", lesson_controller.lesson_listAll);
router.put("/", lesson_controller.lesson_bulkUpdate);
router.delete("/", lesson_controller.lesson_deleteAll);
router.delete("/:id", lesson_controller.lesson_delete);
module.exports = router;