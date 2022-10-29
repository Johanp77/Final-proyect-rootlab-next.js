import Link from "next/link";
import { FC } from "react";
import { IRecipes } from "./RecipeList";

interface TProps {
    mapRecipe: IRecipes;
}

export const Recipe : FC<TProps> = ({ mapRecipe }) => {
    return (
        <li>
            <h3>{mapRecipe.title}</h3>
            <Link href={`/recipes/${mapRecipe.id}`}>
            <img src={mapRecipe.image} alt={mapRecipe.title} />
            </Link>
        </li>
    );
}