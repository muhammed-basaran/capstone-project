import mongoose from "mongoose";

const { Schema } = mongoose;

const sneakersSchema = new Schema({
  id: { type: String },
  producer: { type: String, required: true },
  name: { type: String, required: true },
  release: { type: String, required: true },
  price: { type: String, required: true },
  isFavorite: { type: Boolean, required: true },
  title: { type: String, required: true },
  description1: { type: String, required: true },
  description2: { type: String, required: true },
  img: { type: String, required: true },
  pictures: { type: Array, required: true },
  shops: { type: Array, required: true },
});

const Sneakers =
  mongoose.models.Sneakers || mongoose.model("Sneakers", sneakersSchema);

export default Sneakers;
