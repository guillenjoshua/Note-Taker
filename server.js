const express = require("express");
const app = express();
// const helmet = require('helmet')

const PORT = process.env.PORT || 3000;

// app.use(helmet())

// app.use(express.static('/public'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require("./Develop/routes/apiRoutes")(app);
require("./Develop/routes/htmlRoutes")(app);


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });