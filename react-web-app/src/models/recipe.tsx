import {Ingredient} from './ingredient.tsx'

export class Recipe
{
    id!: number;
    title!: string;
    image!: string;
    isCustom!: boolean;
    readyInMinutes?: number;
    cookingMinutes?: number;
    preparationMinutes?: number;
    spoonacularSourceUrl?: string;
    cuisines?: string[];
    dairyFree?: boolean;
    diets?: string[];
    glutenFree?: boolean;
    extendedIngredients!: any;
    instructions!: string;
    ketogenic?: boolean;
    lowFodmap?: boolean;
    occasions?: string[];
    sustainable?: boolean;
    vegan?: boolean;
    vegetarian?: boolean;
    whole30?: boolean;
    dishTypes?: string[];
    summary?: string;
    pairingText?: string;
}