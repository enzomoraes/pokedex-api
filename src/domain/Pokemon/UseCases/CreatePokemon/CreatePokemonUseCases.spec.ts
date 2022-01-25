import { left } from '../../../../core/Either';
import Pokemon from '../../Entity/Pokemon';
import CreatePokemonException from '../../Exceptions/CreatePokemonException';
import InMemoryRepository from '../../Repositories/InMemoryRepository';
import CreatePokemonUseCase from './CreatePokemonUseCase';

describe('CreatePokemonUseCase', () => {
  it('should create a pokemon', async () => {
    const mock: Array<Pokemon> = [];
    const repository = new InMemoryRepository(mock);
    const createPokemonUseCase = new CreatePokemonUseCase(repository);

    const pokemonProps = {
      name: 'Charmander',
      image:
        'https://seeklogo.com/images/C/charmander-logo-62F7FE99A5-seeklogo.com.png',
    };
    const result = (await createPokemonUseCase.execute(pokemonProps))
      .value as Pokemon;

    expect(result.getName).toEqual(pokemonProps.name);
    expect(result.getImage).toEqual(pokemonProps.image);
    expect(result.getId).toBeDefined();
  });

  it('should fail if there is a pokemon with the same name', async () => {
    const mock: Array<Pokemon> = [];
    const repository = new InMemoryRepository(mock);
    const createPokemonUseCase = new CreatePokemonUseCase(repository);

    const pokemonProps = {
      name: 'Charmander',
      image:
        'https://seeklogo.com/images/C/charmander-logo-62F7FE99A5-seeklogo.com.png',
    };
    await createPokemonUseCase.execute(pokemonProps);
    const error = await createPokemonUseCase.execute(pokemonProps);
    expect(error.value).toEqual(
      new CreatePokemonException('Pokemon already exists')
    );
  });
});
