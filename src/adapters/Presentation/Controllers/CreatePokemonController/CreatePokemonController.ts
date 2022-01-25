import { Request, Response } from 'express';
import { PokemonProps } from '../../../../domain/Pokemon/Entity/Pokemon';
import CreatePokemonUseCase from '../../../../domain/Pokemon/UseCases/CreatePokemon/CreatePokemonUseCase';

export default class CreatePokemonController {
  constructor(private createPokemonUseCase: CreatePokemonUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const result = await this.createPokemonUseCase.execute(
      request.body as PokemonProps
    );

    if (result.isLeft()) {
      return response.status(400).json(result.value);
    }
    // seguindo os principios do Command and Query, apenas retorno o status http
    return response.status(201).send();
  }
}
