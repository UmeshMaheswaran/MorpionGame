import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="Titlehome">
          {" "}
          <h1 className="welcome">WELCOME TO THE MORPION GAME</h1>
        </div>
        <div>
          <Link to={"/morpion"}>
            {" "}
            <button className="start">START THE GAME</button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Home;
