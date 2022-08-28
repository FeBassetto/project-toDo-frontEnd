import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import styled from "styled-components";
import IStyledTheme from "../../models/IStyledTheme";
import { ItaskInfos } from "../../models/states/IStateTask";
import { taskActions } from "../../store/actions/taskActions";
import styles from './TasksContent.module.css';

const StyledContent = styled.div`
    border: 1px solid ${({ theme }: IStyledTheme) => theme.primaryColor};
`

const TasksContent = (props: any) => {

    const {
        tasks,
        search,
        concludedFilter,
        getAllTasks
    } = props

    useEffect(() => {

        if (tasks === null) {
            getAllTasks()
        }

    }, [tasks, search, concludedFilter, getAllTasks])

    return (
        <StyledContent className={styles.tasks}>
            {(tasks?.length < 1 || tasks === null) && (
                <div className={styles.tasks__empty}>
                    <h1>Nenhuma Task encontrada!</h1>
                </div>
            )}
            {(tasks?.length > 0 || tasks !== null) && (
                <>
                    {tasks.map((task: ItaskInfos) => (
                        <h1>{task.title}</h1>
                    ))}
                </>
            )}
        </StyledContent>
    )
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(taskActions, dispatch)

const mapStateToProps = (state: any) => ({
    tasks: state.taskReducer.tasks,
    search: state.taskReducer.search,
    concludedFilter: state.taskReducer.concludedFilter
})

export default connect(mapStateToProps, mapDispatchToProps)(TasksContent)