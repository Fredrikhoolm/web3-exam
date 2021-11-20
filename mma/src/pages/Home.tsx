import "../css/Home.css";
import homepageBackground from "../assets/images/homepage.jpg";

const Home = () => {
  return (
    <div className="container-fluid-0 position-relative text-center">
      <img src={homepageBackground} alt="homepage.jpg" className="img-fluid" />
      <div>
        <h2 className="homepageHeader position-absolute ">Backyard Brawl</h2>
      </div>
      <div>
        <h4 className="homepageText position-absolute">
          Welcome to the site where you can add, delete and edit athletes and
          arenas!
        </h4>
      </div>
    </div>
  );
};

export default Home;
