const mongoose = require("mongoose");

const URL = `mongodb+srv://aditya:markdown@cluster0.sxoibky.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}).then(() => console.log("Connected")).catch((error) => console.log(error));
