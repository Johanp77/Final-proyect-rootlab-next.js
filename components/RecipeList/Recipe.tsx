import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { IRecipes } from "./RecipeList";
import styles from "../../styles/Recipes.module.css";

interface TProps {
    mapRecipe: IRecipes;
}

export const Recipe : FC<TProps> = ({ mapRecipe }) => {
    return (
        <li className={styles.list_recipe_li}>
            <Link href={`/recipes/${mapRecipe.id}`}>
            <img src={mapRecipe.image} alt={mapRecipe.title} className={styles.img_recipe}/>
            </Link>
            <h3>{mapRecipe.title}</h3>
        </li>
    );
}