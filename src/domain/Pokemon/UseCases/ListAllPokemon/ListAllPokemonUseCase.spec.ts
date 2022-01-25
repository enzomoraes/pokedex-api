import ListAllPokemonUseCase from './ListAllPokemonUseCase';
import InMemoryRepository from '../../Repositories/InMemoryRepository';
import Pokemon from '../../Entity/Pokemon';
import CreatePokemonException from '../../Exceptions/CreatePokemonException';
import { Either } from '../../../../core/Either';

describe('ListAllPokemon', () => {
  it('should list all people', async () => {
    const mock: Array<Pokemon> = [];
    const repository = new InMemoryRepository(mock);
    const listAllPokemonUseCase = new ListAllPokemonUseCase(repository);

    const pokemon1: Either<CreatePokemonException, Pokemon> = Pokemon.create({
      name: 'Pokemon 1',
      image: 'url',
    });
    const pokemon2: Either<CreatePokemonException, Pokemon> = Pokemon.create({
      name: 'Pokemon 2',
      image: 'url',
    });

    await repository.create(pokemon1.value as Pokemon);
    await repository.create(pokemon2.value as Pokemon);

    const result = await listAllPokemonUseCase.execute();
    expect(result.length).toBe(2);
  });
});
