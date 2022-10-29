import type { GetServerSideProps, NextPage } from 'next'
import { Footer } from '../../components/footer'
import { Nav } from '../../components/Nav'
import { IRecipes, RecipeList } from '../../components/RecipeList/RecipeList'
import styles from '../../styles/Recipes.module.css'


interface TProps {
    recipes: IRecipes[],
    response: string;
}

const Recipes: NextPage<TProps> = ({ recipes }) => {
    return (
        console.log(recipes),
        <div >
            <div className={styles.main_container}>
                <header>
                    <Nav />
                </header>

                <main>
                    <div className={styles.main_section}>
                        <h1>Recipes</h1>
                        <p>
                        Find out your favorite recipes here, with us!
                        </p>
                    </div>
                    <div>
                        <RecipeList recipes={recipes} />
                    </div>

                </main>
            </div>
            <Footer />
        </div>
    )
}

export default Recipes

export const getServerSideProps: GetServerSideProps = async (context) => {

    const recipes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/recipes`)
        .then((res) => res.json())
        .then((data: IRecipes[]) => data)
        .catch((err) => console.log(err));

    return {
        props: {
            recipes
        }
    }
}