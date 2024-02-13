import "./home.css";
import clubtoilets_header from "../assets/img/clubtoilets_header.png";
import hero from "../assets/img/hero2.jpg";

function Home() {
  return (
    <>
      <section
        className="h-screen flex flex-col bg-cover bg-center"
        style={{
          backgroundImage: `url(${hero})`,
          // backgroundSize: "cover",
          // backgroundPosition: "center",
        }}
      >
        <h1 className=" font-wallpoet text-8xl  text-center bg-custom-grey bg-opacity-75">
          Berliner Klo ? Irgendwo!
        </h1>
        <div className="search-box">
          <input
            className="w-1/4 h-14 font-wallpoet text-center text-white text-2xl bg-black bg-opacity-75 rounded-3xl"
            style={{ color: "#FFFFFF" }}
            type="text"
            placeholder="enter your location"
          />
          <button className="home-btn">GO</button>
          <button className="home-btn">X</button>
        </div>
      </section>
    </>
  );
}
export default Home;
