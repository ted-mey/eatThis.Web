import { Ingredient } from './ingredient';

export class Recipe {
  id: number;
  name: string;
  imageUrl: string;
  ingredients: Array<Ingredient>;
}
