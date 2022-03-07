import React from "react";
import { Link } from "remix";
import { IPega } from "~/pega";
import { Score } from "./score";
import Timer from "./timer";

interface IPegaItem {
  pega: IPega;
  index: number;
  average: number;
  racingAt: Date;
}
export function PegaItem({
  pega,
  index,
  average,
  racingAt
}: IPegaItem) {
  return <li className="bg-gradient-to-r from-slate-900 to-fuchsia-900 py-2 my-6 mx-2 px-2 rounded-md font-bold grid grid-cols-6" key={pega.id}>
            <Link className="text-left pr-3" to={"pega/" + pega.id.toString()}>{index + 1}. {pega.name}<span className={`${pega.gender === "Male" ? `text-blue-600` : `text-pink-500`} ml-2 text-xs`}>({pega.breedCount}/3{pega.gender === "Male" ? "M" : "F"})</span></Link>
            <span className={index === 0 ? "text-amber-300" : index === 1 ? "text-slate-300" : ""}>{pega.winRate * 100}%</span>
            <span className="flex">{average}</span>
            <span><Score score={average}></Score></span>
            <span className={`${pega.energy === 25 ? `text-red-500` : `text-white`}`}>{pega.energy === 25 ? "! " : ""}{pega.energy}{pega.energy === 25 ? " !" : ""}
            {pega.energy === 25 && pega.winRate === 0 && pega.service != "RENT_SERVICE" ? <span className="ml-2 text-indigo-700"> 
            <Timer time={racingAt} />
            </span> : null}
            </span>
            <span>
              {pega.service === "RENT_SERVICE" ? "Renting" : "Resting"}
            </span>
          </li>;
}
  