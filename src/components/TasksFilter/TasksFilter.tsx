import React, { useEffect, useState } from "react";
import Input from "../Input/Input";
import styles from './TasksFilter.module.css';


const TaskFilter = (props: any) => {

    const [search, setSearch] = useState('')
    const [concluded, setConcluded] = useState(false)

    function handleChange(e: any){
        setSearch(e.target.value)
    }

    useEffect(() => {

    }, [concluded, search])

    return (
        <div className={styles.taskfilter}>
            <Input
                type='text'
                name='title'
                placeholder='Pesquise uma Task'
                handleOnChange={handleChange}
                value={search}
            />
            <div className={styles.taskfilter__checkbox}>
                Tasks concluídas 
                <input type="checkbox" name="concluded" checked={concluded} onChange={() => setConcluded(!concluded)}/>
            </div>
        </div>
    )
}

export default TaskFilter