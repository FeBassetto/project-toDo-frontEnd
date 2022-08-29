import React, { useState } from "react";
import styles from './Form.module.css';
import Input from "../Input/Input";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import IStyledTheme from "../../models/IStyledTheme";
import { bindActionCreators, Dispatch } from "redux";
import { warningActions } from "../../store/actions/warningActions";
import { connect } from "react-redux";

const StyledTextArea = styled.textarea`
    border: 1px solid ${({ theme }: IStyledTheme) => theme.primaryColor};
    background-color: ${({ theme }: IStyledTheme) => theme.primaryBackground};
    color: ${({ theme }: IStyledTheme) => theme.primaryColor};
`

const EditTaskForm = (props: any) => {

    const navigate = useNavigate()

    const taskById = props.task[0]

    const { id, concluded } = taskById

    const dateById: Date = new Date(props.task[0].limitDate.seconds * 1000)

    const dayById = String(dateById.getDate()).padStart(2, '0')
    const monthById = String(dateById.getMonth()).padStart(2, '0')
    const yearById = String(dateById.getFullYear())

    const [task, setTask] = useState({
        title: taskById.title,
        description: taskById.description,
        date: `${(yearById)}-${monthById}-${dayById}`
    })

    function handleChange(e: any) {
        setTask({ ...task, [e.target.name]: e.target.value })
    }

    function setWarningMessage(type: null | String, message: String) {
        props.setWarning({
            message,
            type
        })
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()

        if (!task.title) {
            return setWarningMessage('error', 'Digite um titulo para a Task!')
        }

        if (task.title.length > 7) {
            return setWarningMessage('error', 'Digite um titulo de no máximo 7 letras!')
        }

        if (!task.description) {
            return setWarningMessage('error', 'Digite uma descrição para a Task!')
        }

        if (!task.date) {
            return setWarningMessage('error', 'Digite uma data limite para a Task!')
        }

        const dateArray = task.date.split("-")

        const year = dateArray[0]
        const month = dateArray[1]
        const day = dateArray[2]

        const todayYear = new Date().getFullYear()
        const todayMonth = new Date().getMonth() + 1
        const todayDay = new Date().getDate()

        if (todayYear > Number(year)) {
            return setWarningMessage('error', 'Digite uma data limite maior que a atual!')
        }

        if (todayYear === Number(year) && todayMonth > Number(month)) {
            return setWarningMessage('error', 'Digite uma data limite maior que a atual!')
        }

        if (todayYear === Number(year) && todayMonth === Number(month) && todayDay >= Number(day)) {
            return setWarningMessage('error', 'Digite uma data limite maior que a atual!')
        }

        const limitDateData = new Date(Number(year), Number(month), Number(day)).getTime() / 1000

        const limitDate = {
            seconds: limitDateData
        }

        props.editTask({ id, concluded, title: task.title, description: task.description, limitDate: limitDate })

        navigate('/tasks')
    }

    return (
        <div className={styles.form}>
            <h1>Editar Task</h1>
            <form onSubmit={e => handleSubmit(e)}>
                <Input
                    type='text'
                    name='title'
                    placeholder='Digite o titulo da task'
                    handleOnChange={handleChange}
                    value={task.title}
                />
                <StyledTextArea
                    name='description'
                    placeholder='Digite a descrição da Task (Máximo 150 caracteres)'
                    onChange={handleChange}
                    value={task.description}
                    maxLength={150}
                />

                <div className={styles.form__date}>
                    Data para conclusão:
                    <input
                        type="date"
                        name="date"
                        onChange={handleChange}
                        value={task.date}
                    />
                </div>

                <input type="submit" value="Atualizar Task" />
            </form>
            <p className={styles.form__link}>Voltar para as <Link to='/tasks'>Tasks</Link></p>
        </div>
    )
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(warningActions, dispatch)

export default connect(null, mapDispatchToProps)(EditTaskForm)