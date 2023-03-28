const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");


const Todo = require("./models/todo"); // 載入 Todo model

// 引用路由器
const routes = require('./routes')
require("./config/mongoose");

//僅在非正式環境時，使用 dotenv
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const app = express();


app.engine("hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", "hbs");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(routes)


app.listen(3000, () => {
  console.log(`this app is running on http://localhost:3000`);
});
