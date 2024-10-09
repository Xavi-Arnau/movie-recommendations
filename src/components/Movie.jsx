import { useEffect, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import axios from "axios";

const Movie = () => {
  const [movie, setMovie] = useState("");
  const [cont, setCont] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await axios.get(
          "https://express-actors.netlify.app/.netlify/functions/api/recommendation"
        );
        //console.log(response.data);
        setMovie(response.data[0]);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    }
    fetchData();
  }, [cont]);
  return (
    <div className="text-red-400 flex flex-col gap-4 items-center">
      {isLoading ? (
        <BeatLoader color="green" />
      ) : (
        <div className="flex flex-col gap-4 items-center">
          <h2 className="text-red-400 text-2xl">{movie.title}</h2>
          <img className="w-96 rounded-xl" src={movie.pic} alt="" />
          <div>{movie.description}</div>
          <button
            className="bg-orange-500 active:bg-orange-700 text-white rounded-lg py-2 px-4"
            onClick={() => setCont(cont + 1)}
          >
            Una altre peli siusplau
          </button>
        </div>
      )}
    </div>
  );
};

export default Movie;
