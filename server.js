const express = require("express");
const app = express();
const turing = require("./routes/index");
app.use(express.json());
app.use("/turing", turing);

app.listen(4000);
