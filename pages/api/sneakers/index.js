import dbConnect from "../../../db/dbConnect";
import Sneakers from "../../../db/models/Sneakers";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    try {
      const sneakers = await Sneakers.find();

      const sneakersArray = sneakers.map((sneaker) => {
        return {
          id: sneaker._id,
          producer: sneaker.producer,
          name: sneaker.name,
          release: sneaker.release,
          price: sneaker.price,
          isFavorite: sneaker.isFavorite,
          title: sneaker.title,
          description1: sneaker.description1,
          description2: sneaker.description2,
          img: sneaker.img,
          pictures: sneaker.pictures,
          shops: sneaker.shops,
        };
      });

      res.status(200).json(sneakersArray);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}
