import type { NextPage } from 'next'
import { Footer } from '../../components/footer'
import { Nav } from '../../components/Nav'
import styles from '../../styles/Recipes.module.css'

const Recipes: NextPage = ({ }) => {
    return (

        <div>
            <header>
                <Nav />
            </header>

            <main className={styles.main_container}>
                <h1>Hello World!</h1>
            </main>

            <Footer />
        </div>
    )
}


export default Recipes