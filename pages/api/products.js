import productsArray from "../../public/products.json";

export default (req, res) => {
  res.status(200).json(productsArray);
};
