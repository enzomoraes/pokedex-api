import Pokemon from '../Entity/Pokemon';
import IPokemonRepository from './IPokemonRepository';

export default class InMemoryPokemonRepository implements IPokemonRepository {
  constructor(private mock: Array<Pokemon>) {}
  create(pokemon: Pokemon): Promise<Pokemon> {
    const foundId = this.mock.some(
      register => register.getId === pokemon.getId
    );

    if (foundId) {
      throw new Error('Pokemon already exists');
    }

    this.mock.push(pokemon);
    return Promise.resolve(pokemon);
  }

  findAll(): Promise<Array<Pokemon>> {
    return Promise.resolve(this.mock);
  }

  findByName(name: string): Promise<Pokemon | undefined> {
    return Promise.resolve(
      this.mock.filter(pokemon => pokemon.getName === name)[0]
    );
  }
}
