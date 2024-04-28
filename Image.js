const mongoose = require("mongoose");

const DetailProductSchema = new mongoose.Schema({
  image: String,
});

const ImageSchema = new mongoose.Schema({
  imageUrl: String,
  nama_product: String,
  harga: Number,
  deskripsi: String,
  rate: Number,
  category: String,
  lokasi: String,
  terjual: Number,
  stok: Number,
  type: String,
  createdat: { type: Date, default: Date.now },
  detailproduct: [DetailProductSchema],
});

const ImageModel = mongoose.model("ProductsBaru", ImageSchema);

module.exports = ImageModel;
