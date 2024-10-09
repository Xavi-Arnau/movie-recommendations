import Header from "../components/Header";
import Movie from "../components/Movie";

const Main = () => {
  return (
    <div className="bg-black min-h-screen">
      <div className="w-8/12 mx-auto">
        <Header />

        <Movie />
      </div>
    </div>
  );
};

export default Main;
