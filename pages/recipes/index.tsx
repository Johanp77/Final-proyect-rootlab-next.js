import type { NextPage } from 'next'
import { Footer } from '../../components/footer'
import { Nav } from '../../components/Nav'
import styles from '../../styles/Recipes.module.css'



const Recipes: NextPage = ({ }) => {
    return (

        <div >
            <div className={styles.main_container}>
                <header>
                    <Nav />
                </header>

                <main>
                    <div className={styles.main_section}>
                    <h1>Recetas</h1>
                    <p> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    </div>
                    <div>

                    </div>

                </main>
            </div>
            <Footer />
        </div>
    )
}


export default Recipes