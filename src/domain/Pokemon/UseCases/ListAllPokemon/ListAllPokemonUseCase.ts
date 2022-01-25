import Pokemon from '../../Entity/Pokemon';
import IPokemonRepository from '../../Repositories/IPokemonRepository';

class ListAllPokemonUseCase {
  constructor(private repository: IPokemonRepository) {}
  execute(): Promise<Array<Pokemon>> {
    return Promise.resolve(this.repository.findAll());
  }
}

export default ListAllPokemonUseCase;
