import React from "react";
import { useNavigate } from "react-router-dom";
import styles from './NewTaskButton.module.css';

const NewTaskButton = () => {

    const navigate = useNavigate()

    return (
        <div className={styles.newTaskContainer}>
            <button className={styles.newTask} onClick={() => navigate('/tasks/create')}>
                Criar nova Task
            </button>
        </div>
    )
}

export default NewTaskButton