const express = require("express");
const app = express();

//index route
app.get("/", (req, res) => {
  res.send("This is the basic route");
});
app.listen(8000);
