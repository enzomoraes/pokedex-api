import { Either, left, right } from '../../../../core/Either';
import Pokemon, { PokemonProps } from '../../Entity/Pokemon';
import CreatePokemonException from '../../Exceptions/CreatePokemonException';
import IPokemonRepository from '../../Repositories/IPokemonRepository';

export default class CreatePokemonUseCase {
  constructor(private repository: IPokemonRepository) {}

  async execute(
    props: PokemonProps
  ): Promise<Either<CreatePokemonException, Pokemon>> {
    if (!props) {
      return left(new CreatePokemonException('Requisition body invalid'));
    }

    const exists = await this.repository.findByName(props.name);
    if (exists) {
      return left(new CreatePokemonException('Pokemon already exists'));
    }

    const pokemonOrError: Either<CreatePokemonException, Pokemon> =
      Pokemon.create(props);
    if (pokemonOrError.isLeft()) {
      return left(pokemonOrError.value);
    }

    const pokemon = await this.repository.create(pokemonOrError.value);

    return right(pokemon);
  }
}
