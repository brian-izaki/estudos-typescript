import { Request, Response } from 'express';
import Squirtle from '../models/Squirtle';

// tipando parâmetros de uma função
function twoPokemon(pokemon1: Pokemon, pokemon2: Pokemon) {
  return {
    'pokemon 1': pokemon1,
    'pokemon 2': pokemon2,
  }
}

// tipando o retorno da função
function isSeaPokemon(pokemon: SeaPokemon): boolean {
  return pokemon.type === 'fly' || pokemon.type === 'water';
}

// parâmetro sendo opcional
function hasPokemon(pokemon?: Pokemon): string {
  return pokemon ? 'Tenho um Pokemon!' : "Nossa... não tenho um Pokemon!" 
}

// essa classe implementa a interface Pokemon também
const pok1 = new Squirtle(50);
const pok2 = new Squirtle(100);

export default {
  battle(req: Request, res: Response) {
    res.send(twoPokemon(pok1, pok2))
  },

  pokemonFromSea(req: Request, res: Response) {
    const isFromSea = isSeaPokemon(pok1)
    const youHasPokemon = hasPokemon()
    res.send({ isSea: isFromSea, hasPokemon: youHasPokemon })
  }
}

// especificando um tipo função
type longHand = { 
  (a: number, b: number): number
}
type shortHand = (a: number, b: number) => number
