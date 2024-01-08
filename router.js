const router = require("express").Router();
const userController = require("./controllers/user_controller");
const bookController = require("./controllers/book_controller");

router.post("/user", userController.createUser);
router.post("/book", bookController.createBook);
router.delete("/user/:id", userController.deleteUser);

module.exports = router;