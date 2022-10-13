# Query-Strings-Node-js
This is about how to make http get request and create different routes. And get route params and query string params using Node Js,

Project Url
https://github.com/ChathraNavoda/Query-Strings-Node-js.git


***Project setup***

**Installation**

npm i  

**To run the app**
node app  

**To test** 
npm test




Basic Route

![image](https://user-images.githubusercontent.com/91416868/195623751-d26847fd-2f94-428d-99bd-3056f759f669.png)

 

 

Route Params

 
 

//route parameters
/*Route params are typically used for info that can't be ignored. After executing the program the "(req.params)"
 will print out the object and the value that contains the object.  */
app.get("/test/:name/:age", (req, res) => {
  console.log(req.params);
  res.send("Test with route params");
});

 
//route parameters
/*Route params are typically used for info that can't be ignored. After executing the program the "(req.params)"
 will print out the object and the value that contains the object.  */
app.get("/test/:name/:age", (req, res) => {
  console.log(req.params);

  //send output to the user
  res.send(req.params.name + ":" + req.params.age);
});
 






Query String Parameters
//query parameters
  /*Query String params are typically used for optional request such as requesting the data to be sorted in a certain way.
   */
  console.log(req.query);
  res.send(req.params.name + ":" + req.params.age);


Empty object is going to be the string parameter
 

 

After entering the values

 


Multiple query string parameters
 

Test with Jest

