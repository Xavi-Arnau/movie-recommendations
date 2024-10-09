import { Suspense } from "react";
import Header from "../components/Header";
import Movie from "../components/Movie";
import BeatLoader from "react-spinners/BeatLoader";

const Main = () => {
  return (
    <div className="bg-black min-h-screen">
      <div className="w-8/12 mx-auto">
        <Header />
        <Suspense fallback={<BeatLoader color="red" />}>
          <Movie />
        </Suspense>
      </div>
    </div>
  );
};

export default Main;
