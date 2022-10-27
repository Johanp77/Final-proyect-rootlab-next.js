import Image from "next/image";
import { FC } from "react";
import styles from '../styles/Home.module.css'

export const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <a
                className={styles.link}
                href="https://github.com/Johanp77"
                target="_blank"
                rel="noopener noreferrer"
            >
                <span>
                    Web page designed by <strong>Johan Castañeda</strong>
                    {/* texto de ejemplo 1 */}
                </span>
                <span>
                    johanp877@gmail.com
                    {/* texto de ejemplo 2 */}
                </span>
            </a>
            <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                <span className={styles.logo}>
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                </span>
            </a>
        </footer>
    )
}