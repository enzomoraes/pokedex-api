import ListAllPokemonController from './ListAllPokemonController/ListAllPokemonController';
import Pokemon from '../../../domain/Pokemon/Entity/Pokemon';
import InMemoryPokemonRepository from '../../../domain/Pokemon/Repositories/InMemoryRepository';
import ListAllPokemonUseCase from '../../../domain/Pokemon/UseCases/ListAllPokemon/ListAllPokemonUseCase';
import CreatePokemonController from './CreatePokemonController/CreatePokemonController';
import CreatePokemonUseCase from '../../../domain/Pokemon/UseCases/CreatePokemon/CreatePokemonUseCase';

const mock: Array<Pokemon> = [];
const repository = new InMemoryPokemonRepository(mock);

const listAllPokemonUseCase = new ListAllPokemonUseCase(repository);
export const listAllPokemonController = new ListAllPokemonController(
  listAllPokemonUseCase
);

const createPokemonUseCase = new CreatePokemonUseCase(repository);
export const createPokemonController = new CreatePokemonController(
  createPokemonUseCase
);
