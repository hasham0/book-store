import { Router } from "express";
import {
  addNewBook,
  allBooks,
  deleteBook,
  singleBook,
  updateBook,
} from "../controllers/books.controller.js";
import upload from "../middlewares/multer.midlleware.js";

const router = Router();

router.route("/all-books").get(allBooks);
router.route("/:_id").get(singleBook);
router.route("/create-book").post(addNewBook);
router.route("/update-book/:_id").put(updateBook);
router.route("/delete-book/:_id").delete(deleteBook);

export default router;
