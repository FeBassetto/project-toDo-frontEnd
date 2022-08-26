import React from "react";
import styles from './Loader.module.css'

import { VscLoading } from 'react-icons/vsc'

const Loader = () => {
    return (
        <div className={styles.loader}>
            <VscLoading className={styles.loader__spinner}/>
        </div>
    )
}

export default Loader