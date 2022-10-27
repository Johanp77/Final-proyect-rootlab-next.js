import Link from "next/link";
import React, { FC } from "react";
import styles from '../styles/Home.module.css'


export const Nav: FC = () => {
    return (
        <div>
        <nav className={styles.nav_container}>
          <div>
            <img src="https://res.cloudinary.com/dzkollux2/image/upload/v1664636478/next-js_dgq8pd.svg" alt="logo" width={100} height={100} />
          </div>
          <div className={styles.container_links}>
            <Link href="/">Home</Link>
            <Link href="/recipes">Recipes</Link>
          </div>
        </nav>
      </div>
    )
}