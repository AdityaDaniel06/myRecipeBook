import { Ingredients } from "../shared/ingredient.modal";

// A model in the end should just be a blueprint for objects we create and a class can do this job
export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredients[];

    constructor(name: string, desc: string, imagepath:string, ingredients: Ingredients[]){
        this.name = name;
        this.description = desc;
        this.imagePath = imagepath;
        this.ingredients = ingredients;
    }
}