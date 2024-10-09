import { names } from "../data";

const Header = () => {
  const name = names[Math.floor(Math.random() * names.length)];

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl text-green-500 py-8 font-bold text-center">
        Recomanacions {name}
      </h1>
    </div>
  );
};

export default Header;
