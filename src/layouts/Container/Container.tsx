import React from "react";
import styles from './Container.module.css';

const Container = ({ children }: any) => {

    return(
        <section className={styles.container}>
            {children}
        </section>
    )
}

export default Container