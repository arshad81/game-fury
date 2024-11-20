import React from "react";
import GameCard from "./GameCard";
import kippon from "../assets/images/games/kipon.jpg";


const GameCardGrid = () => {
  const games = [
    {
      name: "Valorant",
      genre: "First-Person Shooter",
      free_or_paid: "Free",
    },
    {
      name: "The Witcher 3: Wild Hunt",
      genre: "Action Role-Playing",
      free_or_paid: "Paid",
    },
    {
      name: "Among Us",
      genre: "Social Deduction",
      free_or_paid: "Free",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-8">
      {games.map((game, index) => (
        <GameCard key={index} game={game} />
      ))}
      <div className="group transition-all duration-500 rounded-xl relative overflow-hidden bg-vanilla-pudding bg-gradient-to-t from-poinciana/60 to-transparent hover:from-transparent">
        <img className="absolute top-0 -z-10" src={kippon} alt="" />
        <p className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 text-3xl text-amber-800 font-bold w-3/4 text-center mx-auto group-hover:scale-125">Explore Our Games</p>
      </div>
    </div>
  );
};

export default GameCardGrid;
