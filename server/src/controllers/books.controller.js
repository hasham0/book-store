import Book from "../models/book.model.js";
import asyncHandler from "../helpers/asyncHandler.js";
import createError from "http-errors";
import { nodeChache } from "../index.js";

const allBooks = asyncHandler(async (request, response) => {
  let data;
  if (nodeChache.has("books")) {
    data = JSON.parse(nodeChache.get("books"));
  } else {
    data = await Book.find({}).sort({ createdAt: -1 });
    nodeChache.set("books", JSON.stringify(data));
  }
  if (!data) {
    throw createError(401, "books does not exist");
  }
  return response.status(200).json({ data });
});

const singleBook = asyncHandler(async (request, response) => {
  const { _id: bookID } = request.params;
  const bookData = await Book.findById({ _id: bookID });
  if (!bookData) {
    throw createError(401, "book does not exist");
  }
  return response.status(200).json({ data: bookData });
});

const addNewBook = asyncHandler(async (request, response) => {
  //  const coverImageLocalPath = request.file.path;

  const {
    title,
    description,
    category,
    trending,
    coverImage,
    oldPrice,
    newPrice,
  } = request.body;

  const checkFields = [
    title,
    description,
    category,
    coverImage,
    oldPrice,
    newPrice,
  ].some((field) => field?.trim() === "");

  if (checkFields) {
    return createError(400, "all fields are required");
  }

  // TODO:check if book already exist or not
  const isBookExisted = await Book.findOne({ $or: [{ title }] });
  if (isBookExisted) {
    return createError(409, "book is already exist");
  }
  /*     if (!coverImageLocalPath) {
      return (createError(400, "book cover image file is required"));
    }
    const coverImage = await uploadOnCloudinary(coverImageLocalPath);
 */
  const createdBook = await Book.create({
    title,
    description,
    category,
    trending,
    coverImage,
    oldPrice,
    newPrice,
  });

  return response
    .status(200)
    .json({ message: "New Book added Successfully", data: createdBook });
});

const updateBook = asyncHandler(async (request, response) => {
  const { _id: bookID } = request.params;

  const {
    title,
    description,
    category,
    trending,
    coverImage,
    oldPrice,
    newPrice,
  } = request.body;

  const checkFields = [
    title,
    description,
    category,
    coverImage,
    oldPrice,
    newPrice,
  ].some((field) => field?.trim() === "");

  if (checkFields) {
    throw createError(400, "all fields are required");
  }

  // TODO:check if book already exist or not
  const isBookExisted = await Book.findbyId({ _id: bookID });
  if (!isBookExisted) {
    throw createError(409, "book is not exist");
  }

  // TODO: update the existed book propertise
  const updateExistedBook = await Book.findbyIdAndUpdate(
    {
      _id: isBookExisted._id,
    },
    {
      title,
      description,
      category,
      trending,
      coverImage,
      oldPrice,
      newPrice,
    },
    { new: true }
  );

  return response
    .status(200)
    .json({ message: "Book updated Successfully", data: updateExistedBook });
});

const deleteBook = asyncHandler(async (request, response) => {
  const { _id: bookID } = request.params;
  const bookData = await Book.findById({ _id: bookID });
  if (!bookData) {
    throw createError(401, "book does not exist");
  }
  await Book.findByIdAndDelete({ _id: bookData._id });
  return response.status(200).json({ message: "book delete successfully" });
});

export { allBooks, singleBook, addNewBook, updateBook, deleteBook };
