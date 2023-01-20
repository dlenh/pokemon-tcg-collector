const express = require("express"); // requiring variables this way is CJS modules over EMS modules
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("session");
const MongoStore = require("connect-mongo");
const methodOverride = require("method-override");
const flash = require("express-flash");
const logger = require("morgan");

const PORT = 8888;

// set up middleware
app.set("view engine", "ejs");
app.set(express.static("public")); // static files in public folder
app.use(express.urlencoded({extended: true})); // parse requests from forms


// set up server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))