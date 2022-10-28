import { Recipe } from "./Recipe";


export interface IRecipes {
    id: number;
    title: string;
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
        <div>
            <ul>
                {recipes.map((mapRecipe) => (
                    <Recipe key={mapRecipe.id} mapRecipe={mapRecipe} />
                ))}
            </ul>
        </div>
    );
};
