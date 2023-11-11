const mongoose = require("mongoose");

const app = require("./app");

const DB_HOST =
  "mongodb+srv://Artem:cciGv4Q3zfSdcihu@cluster0.ohfkusp.mongodb.net/books_reader?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
