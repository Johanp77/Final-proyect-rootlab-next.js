import { IIngredients } from "../../pages/recipes/[id]";
import { Recipe } from "./Recipe";
import styles from '../../styles/Recipes.module.css'


export interface IRecipes {
    id: number;
    title: string;
    ingredients: IIngredients[];
    name: string;
    quantity: number;
    unit: string;
    instructions: string;
    image: string;
    tags: string | null;
    category: string | null;
    time: number | null;
}

interface Props {
    recipes: IRecipes[]
}

export const RecipeList = ({ recipes }: Props) => {
    return (
        <div >
            <ul className={styles.list_recipe_ul}>
                {recipes.map((mapRecipe) => (
                    <Recipe key={mapRecipe.id} mapRecipe={mapRecipe} />
                ))}
            </ul>
        </div>
    );
};
