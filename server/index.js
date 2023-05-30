/* packages */
const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cookieParser = require('cookie-parser');


/* internal dependencies */
const {router} = require('./router/singleRouter');

/* env configuration */
dotenv.config();

/* database configuration */


/* app object */
const app = express();

/* middleware */
app.use(cookieParser(process.env.COOKIE_TOKEN));
app.use(express.json());
app.use(express.urlencoded({extended : true}));


/* routes */
app.use("/api",router);



/* port address */
const port = process.env.PORT || 8800;


app.use(express.static(path.join(__dirname,"/../client/build/")));
app.get('*', (req, res) =>{
  res.sendFile(path.join(__dirname, "/../client/build/index.html"))
});


/* error handler moduler */
app.use((err, req, res, next) => {

  const status = err.status || 500;
  const message = err.message || "Something went wrong";

  res.status(status).json({
    success: false,
    status: status,
    message: message,
    stack: err.stack || null
  });

})

/* listener */
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});