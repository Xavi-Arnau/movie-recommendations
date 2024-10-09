import { names } from "../data";
import { Popcorn } from "lucide-react";

const Header = () => {
  const name = names[Math.floor(Math.random() * names.length)];

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl text-green-500 py-8 font-bold text-center flex">
        <Popcorn size={35} color="yellow" /> Recomanacions {name}
      </h1>
    </div>
  );
};

export default Header;
