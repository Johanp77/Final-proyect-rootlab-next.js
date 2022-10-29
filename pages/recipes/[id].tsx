import { GetServerSideProps, NextPage } from "next"
import { FC } from "react";
import { Footer } from "../../components/footer";
import { Nav } from "../../components/Nav";
import { IRecipes } from "../../components/RecipeList/RecipeList"

export interface IIngredients {
    name: string;
    quantity: number;
    unit: string;
}

interface TProps {
    recipe: IRecipes
    ingredients: IIngredients
    }

    interface Props {
        recipe: IRecipes[]
    }


const DetailRecipePage: NextPage<TProps> = ({recipe, ingredients}) => {
    return(
        console.log(ingredients),
        <div>
            <Nav />
            <h1>Detail Recipe</h1>
            <h2>{recipe.title}</h2>
            <p>{recipe.instructions}</p>
            <img src={recipe.image} alt={recipe.title} />
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
            {
                recipe.ingredients.push(ingredients)
}
{
                console.log(recipe.ingredients)
}
            <p>{recipe.ingredients[0].name}</p>
            <p>{recipe.ingredients[0].quantity}</p>
            <p>{recipe.ingredients[0].name}</p>

            <p>{recipe.ingredients[2].name}</p>


            <Footer />
        </div>
    )
}

export const IngredientsList : FC<TProps> = ({recipe}) => {
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