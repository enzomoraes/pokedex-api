import { Router } from 'express';
import { createPokemonController } from '../Controllers/';
import { listAllPokemonController } from '../Controllers/';

export default class PokemonRoutes {
  constructor(private router: Router) {
    router.post('/pokemons', (request, response) => {
      return createPokemonController.handle(request, response);
    });

    router.get('/pokemons', (request, response) => {
      return listAllPokemonController.handle(request, response);
    });
  }

  get getRouter(): Router {
    return this.router;
  }
}
