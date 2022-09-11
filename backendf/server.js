

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


const link ="mongodb+srv://7twik:zKqW0UzgQO3G3iMy@cluster0.sjxr9uv.mongodb.net/TechC";
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
