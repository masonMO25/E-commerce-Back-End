import express from "express";
import eRouter from "./book/routes.js";
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", eRouter);

// sync sequelize models to the database, then turn on the server
app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
