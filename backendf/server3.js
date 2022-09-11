// const express = require("express");
// const app = express();
// const cors = require("cors");
// const dotenv = require("dotenv");
// const mongoose = require("mongoose");
// const corsOptions = require('./config/corsOption');
// const PORT= process.env.PORT || 5000;
// app.use(cors(corsOptions));
// app.use(express.json());
// const path=require("path");
// const router = express.Router();

// dotenv.config();

// const link="mongodb+srv://7twik:zKqW0UzgQO3G3iMy@cluster0.sjxr9uv.mongodb.net/TechC";

// mongoose.connect(link,{
//   useNewUrlParser: true
// },()=> console.log("connected to db"));

// // const apiRouter=express.Router();
// // const foundRouter=express.Router();
// // const registerRouter=express.Router();
// // const delRouter=express.Router();
// // const noteRouter=express.Router();
// // const AuthRouter=express.Router();
// // const poostRouter=express.Router();
// // const cartRouter=express.Router();
// // const cartpostRouter=express.Router();

// // foundRouter.use("/found", require("./Routes/route"));
// // registerRouter.use("/register", require("./Routes/route"));
// // cartpostRouter.use("/cartpost", require("./Routes/route"));
// // noteRouter.use("/note", require("./Routes/route"));
// // AuthRouter.use("/Auth", require("./Routes/route"));
// // poostRouter.use("/poost", require("./Routes/route"));
// // cartRouter.use("/cart", require("./Routes/route"));

// // apiRouter.use(foundRouter);
// // apiRouter.use(registerRouter);
// // apiRouter.use(delRouter);
// // apiRouter.use(noteRouter);
// // apiRouter.use(AuthRouter);
// // apiRouter.use(poostRouter);
// // apiRouter.use(cartRouter);
// // apiRouter.use(cartpostRouter);
// // app.use("/api", apiRouter);







// app.use("/found", require("./routes/route"));
// app.use("/register", require("./routes/route"));
// app.use("/cartpost", require("./routes/route"));
// app.use("/note", require("./routes/route"));
// app.use("/Auth", require("./routes/route"));
// app.use("/poost", require("./routes/route"));
// app.use("/cart", require("./routes/route"));

// app.all('*', (req, res) => {
//   res.status(404).send('<h1>404! Page not found</h1>');
// });
// // --------------------------deployment------------------------------

// // const __dirname1 = path.resolve();





// // if (process.env.NODE_ENV === "production") {
 
// //  app.use(express.static('frontend/build'));
// //   app.get("/", (req, res) =>
// //     res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
// //   );
// //   app.get("/Register", (req, res) =>
// //     res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
// //   );
// //   app.get("/Home", (req, res) =>
// //     res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
// //   );
// //   app.get("/Post", (req, res) =>
// //     res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
// //   );


// // } else {
// //   app.get("/", (req, res) => {
// //     res.send("API is running..");
// //   });
// // }




// // app.use("/Login", require("./Routes/route"));
// // app.use("/Register", require("./Routes/route"));
// // app.use("/Home", require("./Routes/route"));
// // app.use("/Admin", require("./Routes/route"));


// // --------------------------deployment------------------------------


// app.listen(PORT, function () {
//   console.log("App is listening on port 5000");
// });



const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const corsOptions = require('./config/corsOption');
const PORT= process.env.PORT || 3001;
app.use(cors(corsOptions));
app.use(express.json());
const path=require("path");

dotenv.config();


const link ="mongodb+srv://7twik:zKqW0UzgQO3G3iMy@cluster0.sjxr9uv.mongodb.net/mydb";
mongoose.connect(process.env.MONGODB_URI || link);

app.use("/found", require("./routes/route"));
//app.use("/comment",require("./com"));
app.use("/register", require("./routes/route"));
app.use("/del", require("./routes/route"));
app.use("/note", require("./routes/route"));
app.use("/Auth", require("./routes/route"));
app.use("/poost", require("./routes/route"));
app.use("/cart", require("./routes/route"));
app.use("/cartpost", require("./routes/route"));
app.use("/Post", require("./routes/route"));
app.use("/MyPost", require("./routes/route"));
//app.use("/About", require("./routes/route"));

// app.use(route);
// __dirname=path.resolve();
// if (process.env.NODE_ENV==="production")
// {
//   app.use(express.static(path.join(__dirname,'/frontend/build')));

//   app.get('*',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'frontend',"build","index.html"));
//   })
// } else {
//   app.get("/",(req,res)=>{
//     res.send("API is running... ");
// });

// }

// const __dirname1=path.resolve();
// if(process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname1, './frontend/build')));
//   app.get("*", (req, res) => {
//       res.sendFile(path.resolve(__dirname1, "frontend","build", "index.html"));
//   })
// }
// else
// {
//   app.get("/",(req,res)=>{
//       res.send("API is running... ");
//      });
// }


// --------------------------deployment------------------------------

// const __dirname1 = path.resolve();

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname1, "/frontend/build")));

//   app.get("*", (req, res) =>
//     res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"))
//   );
// } else {
//   app.get("/", (req, res) => {
//     res.send("API is running..");
//   });
// }

// --------------------------deployment------------------------------


app.listen(PORT, function () {
  console.log("App is listening on port 3001");
});
