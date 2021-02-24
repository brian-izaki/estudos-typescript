// implementando interface na Classe
class Squirtle implements SeaPokemon {
  // default é public
  name: string;
  type: 'water'
  hp: number;

  constructor(hp: number) {
    this.name = 'Squirtle'
    this.type = 'water';
    this.hp = hp
  }

  atack() {
    console.log('Realizou um ataque!')
  }
}

export default Squirtle;