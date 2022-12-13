import Products from "../../models/Products";
import connectDB from "../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method === "POST") {
    console.log(req.body);
    const data = req.body;
    try {
      let temp = new Products({
        id: data.id,
        title: data.title,
        price: data.price,
        description: data.description,
        category: data.category,
        image: data.image,
      });

      const response = await temp.save();
      res.status(201).json(response);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  } else {
    res.status(400).json({ message: "Method not allowed" });
  }
};

export default connectDB(handler);
