import {Request, Response} from 'express';
import Squirtle from '../models/Squirtle';


// tipando parâmetros de uma função
function battleTwoPokemon(pokemon1: Pokemon, pokemon2: Pokemon) {
  return {
    'pokemon 1': pokemon1,
    'pokemon 2': pokemon2,
  }
}

// essa classe implementa a interface Pokemon também
const pok1 = new Squirtle(50);
const pok2 = new Squirtle(100);

export default {
  battle(req: Request, res: Response){
    res.send(battleTwoPokemon(pok1, pok2))
  },
}