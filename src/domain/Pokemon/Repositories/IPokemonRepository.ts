import Pokemon from '../Entity/Pokemon';

export default interface IPokemonRepository {
  create(pokemon: Pokemon): Promise<Pokemon>;
  findAll(): Promise<Array<Pokemon>>;
  findByName(name: string): Promise<Pokemon | undefined>;
}
