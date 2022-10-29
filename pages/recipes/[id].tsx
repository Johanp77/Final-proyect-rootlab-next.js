import { GetServerSideProps, NextPage } from "next"
import { FC } from "react";
import { Footer } from "../../components/footer";
import { Nav } from "../../components/Nav";
import { IRecipes } from "../../components/RecipeList/RecipeList"
import styles from "../../styles/Recipes.module.css";


export interface IIngredients {
    name: string;
    quantity: number;
    unit: string;
}

interface TProps {
    recipe: IRecipes
    ingredientsArray: IIngredients
}

interface Props {
    recipe: IRecipes[]
}


const DetailRecipePage: NextPage<TProps> = ({ recipe, ingredientsArray }) => {

    recipe.ingredients.push(ingredientsArray)
    console.log(recipe.ingredients)
    console.log(ingredientsArray)

    return (
        console.log(ingredientsArray),
        <div>
            <Nav />
            <h1 className={styles.recipe_main_title}>Detail Recipe</h1>
            <div className={styles.container_img_instructions}>
                <div className={styles.container_img_detail_recipe}>
                    <img src={recipe.image} alt={recipe.title} className={styles.img_detail_recipe} />
                </div>
                <div className={styles.container_other_things}>
                    <h2>{recipe.title}</h2>
                    <p>Time to cook: {recipe.time} minutes</p>
                    <p >Category: {recipe.category}</p>
                </div>
            </div>
            <p className={styles.recipe_instructions}>{recipe.instructions}</p>

            {/* <div>{ingredients.name}</div> */}
            {/* <IngredientsList ingredients={ingredients} /> */}
            {/* {
                recipe.map((ingredient) => (
                    <div key={ingredient.name}>
                        <p>{ingredient.name}</p>
                        <p>{ingredient.quantity}</p>
                        <p>{ingredient.unit}</p>
                    </div>
                ))
            } */}

            <div className={styles.container_ingredients}>
                <ul>
                    <h4>Ingredients</h4>
                    <li>
                        <p>{recipe.ingredients[0].name} {recipe.ingredients[0].quantity} {recipe.ingredients[0].unit}</p>

                        {/* {recipe.ingredients.map((ingredient) => (
                            <li key={ingredient.name}>
                                <p>{ingredient.name}</p>
                                <p>{ingredient.quantity}</p>
                                <p>{ingredient.unit}</p>
                            </li>
                        ))} */}
                    </li>
                    <li>
                        <p>{recipe.ingredients[1].name} {recipe.ingredients[1].quantity} {recipe.ingredients[1].unit}</p>
                    </li>
                    <li>
                        <p>{recipe.ingredients[2].name} {recipe.ingredients[2].quantity} {recipe.ingredients[2].unit}</p>
                    </li>
                    <li>
                        <p>{recipe.ingredients[3].name} {recipe.ingredients[3].quantity} {recipe.ingredients[3].unit}</p>
                    </li>
                    <li>
                        <p>{recipe.ingredients[4].name} {recipe.ingredients[4].quantity} {recipe.ingredients[4].unit}</p>
                    </li>
                    <li>
                        <p>{recipe.ingredients[5].name} {recipe.ingredients[5].quantity} {recipe.ingredients[5].unit}</p>
                    </li>
                </ul>

            </div>

            <Footer />
        </div>
    )
}

export const IngredientsList: FC<TProps> = ({ recipe }) => {
    return (
        console.log(recipe),
        <div>
            <ul>
                {/* {recipe.map((ingredient) => (
                    <li key={ingredient.name}>{ingredient.name}</li>
                ))
                } */}
            </ul>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const recipes = await fetch(process.env.NEXT_PUBLIC_API_URL + "/recipes/" + context.params?.id);
    const recipe = await recipes.json();
    // const ingredients = recipe.forEach((element: { ingredients: any; }) => {
    //     console.log(element.ingredients)
    // });

    return {
        props: {
            recipe
        }
    }
}

export default DetailRecipePage