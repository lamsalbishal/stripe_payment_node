const express = require("express");
const dotenv = require("dotenv");

const bodyparser = require("body-parser");

const app = express();
dotenv.config({ path: "config.env" });

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.


app.use(express.static("public"));
app.use(express.json());

const apiPort = process.env.PORT || 8000;

app.use("/", require("./routes/router"));

app.get("/test",(req,res) => {
    res.send("i am testing")
})

app.listen(apiPort, () =>
  console.log(`Node server listening on port ${apiPort} !`)
);
