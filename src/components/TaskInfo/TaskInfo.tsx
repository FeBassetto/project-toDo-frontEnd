import React from "react";
import styles from './TaskInfo.module.css'

const TaskInfo = (props: any) => {

    const taskById = props.task

    const limitDateSeconds = props.task.limitDate.seconds
    const createdAtSeconds = props.task.createdAt.seconds

    const createdAt = new Date(createdAtSeconds * 1000)
    const limitDate = new Date(limitDateSeconds * 1000)

    const createdDay = String(createdAt.getDate()).padStart(2, "0")
    const createdMonth = String(createdAt.getMonth()).padStart(2, "0")
    const createdYear = String(createdAt.getFullYear())

    const limitDateDay = String(limitDate.getDate()).padStart(2, "0")
    const limitDateMonth = String(limitDate.getMonth()).padStart(2, "0")
    const limitDateYear = String(limitDate.getFullYear())

    return (
        <div className={styles.taskInfo}>
            <h1>{taskById.title}</h1>
            <h2>{taskById.description}</h2>
            <div className={styles.taskInfo__timestamp}>
                <p>{`Criado em: ${createdDay}/${createdMonth}/${createdYear}`}</p>
                <p>{`Data limite: ${limitDateDay}/${limitDateMonth}/${limitDateYear}`}</p>
            </div>
        </div>
    )
}

export default TaskInfo