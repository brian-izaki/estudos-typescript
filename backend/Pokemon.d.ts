// criando uma interface
interface Pokemon {
  name: string;
  hp: number;
  atack(): void;
  // não é obrigatório
  defend?(): void;
}