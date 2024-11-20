import React from "react";
import kippon from "../assets/images/games/kipon.jpg";


const GameCard = ({game}) => {
    console.log(game)
    return(
        <div className="rounded-xl relative overflow-hidden text-white group">
            <img className="transition-all duration-500 group-hover:scale-110" src={kippon} alt="" />
            <div className="absolute z-10 top-0 transition-all duration-500 w-full h-full bg-gradient-to-t from-poinciana/60 to-transparent group-hover:from-transparent"></div>
            <div className="absolute bottom-8 start-8 z-10 transition-all duration-500 group-hover:opacity-0">
                <p className="font-bold text-xl">{game.name}</p>
                <p className="font-semibold">{game.genre} - {game.free_or_paid}</p>
            </div>
        </div>
    )
}

export default GameCard;