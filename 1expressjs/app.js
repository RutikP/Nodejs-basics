
const http = require("http");
const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs"); // here if u r using pug then add pug here instead of ejs
app.set("views", "views");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

const routeData = require("./routes/admin");
const shoprouter = require("./routes/shop");

// adding filters
app.use("/admin", routeData);
app.use(shoprouter);

app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname,'./','views','pagenotfound.html'));
  res.render("pagenotfound", { pageTitle: "Page Not Found" });
});

// app.use((req,res,next) => {
//     console.log('In the middleware');
//     next(); // This allows the request to continue to the next middleware
// });

// app.use((req,res,next) => {
//     console.log('In the another middleware');
//     res.send('<h1>Hello Middleware!</h1>');
// });

// const hserver = http.createServer(app);

// hserver.listen(3000);

app.listen(3000);
