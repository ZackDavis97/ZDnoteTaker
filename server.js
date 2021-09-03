const express = require("express");
const fs = require("fs");

let app = express();
let PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/assets", express.static("./assets"));

require("./routing/api-notes")(app);
require("./routing/html-notes")(app);

app.listen(PORT, function() {
    console.log("Listen on PORT " + PORT);
});