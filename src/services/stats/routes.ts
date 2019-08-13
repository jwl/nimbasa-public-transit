import { Request, Response } from "express";
import { Stats } from "../../engine/pokemon/Stats";

export default [
  {
    path: "/",
    method: "get",
    handler: async (req: Request, res: Response) => {
      //res.send("Hello world from the stats endpoint");
      const pokemonName = "Bulbasaur";
      const pokemon = new Stats(pokemonName);
      let pokemonStatString = `
        Name: ${pokemonName}
        HP: ${pokemon.getHP()}\n
        Atk: ${pokemon.getAttack()}\n
        Def: ${pokemon.getDefense()}\n
        SpAtk: ${pokemon.getSpAtk()}\n
        SpDef: ${pokemon.getSpDef()}\n
        Spd: ${pokemon.getSpeed()}\n
        Types: [${pokemon.getTypes()}]
      `;
      res.send(`Pokemon Stats:
        ${pokemonStatString}`);
    },
  },
];
