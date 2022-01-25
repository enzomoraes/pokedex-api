import CreatePokemonException from '../Exceptions/CreatePokemonException';
import { v4 } from 'uuid';
import { Either, left, right } from '../../../core/Either';

export interface PokemonProps {
  id?: string;
  name: string;
  image: string;
}

export default class Pokemon {
  private name: string;
  private id: string;
  private image: string;

  private constructor(props: PokemonProps) {
    if (!props.id) {
      this.id = v4();
    } else {
      this.id = props.id;
    }

    this.image = props.image;
    this.name = props.name;
    Object.freeze(this);
  }

  static create(props: PokemonProps): Either<CreatePokemonException, Pokemon> {
    if (!props.name)
      return left(new CreatePokemonException('Name is required'));
    if (!props.image)
      return left(new CreatePokemonException('Image is required'));
    return right(new Pokemon(props));
  }

  get getId() {
    return this.id;
  }

  get getName() {
    return this.name;
  }

  get getImage() {
    return this.image;
  }
}
