const router = require("express").Router();
const userController = require("./controllers/user_controller");
const bookController = require("./controllers/book_controller");

router.post("/user", userController.createUser);
router.post("/books", bookController.createBook);
router.get("/books", bookController.listBooks);
router.patch("/books/:id", bookController.patchBooks);
router.delete("/user/:id", userController.deleteUser);
router.delete("/books/:id", bookController.deleteBook);

module.exports = router;