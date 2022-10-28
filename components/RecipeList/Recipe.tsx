import { FC } from "react";
import { IRecipes } from "./RecipeList";

interface TProps {
    mapRecipe: IRecipes;
}

export const Recipe : FC<TProps> = ({ mapRecipe }) => {
    return (
        <li>
            <h3>{mapRecipe.title}</h3>
            <p>{mapRecipe.instructions}</p>
            <img src={mapRecipe.image} alt={mapRecipe.title} />
        </li>
    );
}