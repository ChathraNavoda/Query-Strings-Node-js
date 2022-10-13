const express = require("express");
const app = express();

//index route
app.get("/", (req, res) => {
  res.send("This is the basic route");
});
app.listen(8000);

//create an another route (test)
app.get("/test", (req, res) => {
  res.send("Moving to the test route");
});

//route parameters
/*Route params are typically used for info that can't be ignored. After executing the program the "(req.params)"
 will print out the object and the value that contains the object.  */
app.get("/test/:name/:age", (req, res) => {
  console.log(req.params);

  //send output to the user
  res.send(req.params.name + ":" + req.params.age);
});
