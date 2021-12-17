import axios from "axios";
import connectDB from "../utils/connectDb";

function Home(props) {
  console.log(props);

  connectDB();

  return <>home</>;
}

Home.getInitialProps = async () => {
  const productURL = "http://localhost:3000/api/products";
  const req = await axios.get(productURL);
  return { products: req.data };
};

export default Home;
