const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = 3001;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://user1:password1@ds121665.mlab.com:21665/heroku_g0sp0r09", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// routes
app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});