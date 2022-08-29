import React from "react";
import styled from "styled-components";
import IStyledTheme from "../../models/IStyledTheme";
import styles from './Task.module.css';

import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { useNavigate } from "react-router-dom";
import { bindActionCreators, Dispatch } from "redux";
import { taskActions } from "../../store/actions/taskActions";
import { connect } from "react-redux";

const StyledTask = styled.div`
    border-color: ${({ theme }: IStyledTheme) => theme.primaryColor};
`

const Task = ({ concluded, description, id, limitDate, title, deleteTask, editTask }: any) => {

    const limitDateNumber: any = limitDate * 1000

    const date: Date = new Date(limitDateNumber)

    const day: String = String(date.getDate()).padStart(2, '0')
    const month: String = String(Number(date.getMonth() + 1)).padStart(2, '0')
    const year: String = String(date.getFullYear())

    const navigate = useNavigate()

    return (
        <StyledTask className={styles.task}>
            <div className={styles.task__infos} onClick={() => navigate(`/tasks/${id}`)}>
                <p>{title} até {day}/{month}/{year}</p>
            </div>
            <div className={styles.task__functions}>
                <button className={styles.task__functions_edit} onClick={() => navigate(`/tasks/edit/${id}`)}>
                    <AiFillEdit />
                </button>
                <button className={styles.task__functions_delete} onClick={() => deleteTask(id)}>
                    <AiFillDelete />
                </button>
                <input
                    type="checkbox"
                    checked={concluded}
                    onChange={() => editTask({ id, concluded: !concluded })}
                />
            </div>
        </StyledTask>
    )
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(taskActions, dispatch)

export default connect(null, mapDispatchToProps)(Task)