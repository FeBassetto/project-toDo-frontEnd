/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { taskActions } from "../../store/actions/taskActions";
import Input from "../Input/Input";
import styles from './TasksFilter.module.css';

const TaskFilter = (props: any) => {

    const [search, setSearch] = useState(props.search)
    const [concluded, setConcluded] = useState(props.concludedFilter)
    const [debounce, setDebounce]: any = useState(null)

    useEffect(() => {
        clearTimeout(debounce);

        setDebounce(setTimeout(function () {
            if (props.search !== search) {
                props.addFilters({ search, concludedFilter: concluded ? true : false })
                props.getAllTasks()
            }
        }, 500))
    }, [search])

    useEffect(() => {
        if (props.concludedFilter !== concluded) {
            props.addFilters({ search, concludedFilter: concluded ? true : false })
            props.getAllTasks()
        }
    }, [concluded])


    return (
        <div className={styles.taskfilter}>
            <Input
                type='text'
                name='title'
                placeholder='Pesquise uma Task'
                handleOnChange={(e: any) => {
                    setSearch(e.target.value)
                }}
                value={search}
            />
            <div className={styles.taskfilter__checkbox}>
                Tasks concluídas
                <input type="checkbox" name="concluded" checked={concluded} onChange={() => setConcluded(!concluded)} />
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(taskActions, dispatch)

const mapStateToProps = (state: any) => ({
    concludedFilter: state.taskReducer.concludedFilter,
    search: state.taskReducer.search
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskFilter)