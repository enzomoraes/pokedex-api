import { Request, Response } from 'express';
import ListAllPokemonUseCase from '../../../../domain/Pokemon/UseCases/ListAllPokemon/ListAllPokemonUseCase';

export default class ListAllPokemonController {
  constructor(private listAllPokemonUseCase: ListAllPokemonUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    return response
      .status(200)
      .send(await this.listAllPokemonUseCase.execute());
  }
}
