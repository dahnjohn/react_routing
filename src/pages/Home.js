import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <h1>My Home Page!</h1>
      <p>
        Go to <Link to="/products">the list of produts</Link>
      </p>
    </>
  );
};

export default Homepage;
