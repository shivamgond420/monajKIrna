const mongoose = require("mongoose");
const Rejesterd = new mongoose.Schema({
  NAME: {
    type: String,
  },
  MOBIL: {
    type: String,
  },
});

const Cmail =
  mongoose.models.Companrty || mongoose.model("Companrty", Rejesterd);

module.exports = Cmail;
