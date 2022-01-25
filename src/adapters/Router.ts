import { Router } from 'express';
import PokemonRoutes from './Presentation/Routes/PokemonRoutes';

const router = Router();

router.use(new PokemonRoutes(router).getRouter);

export default router;
