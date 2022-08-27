import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { warningActions } from "../../store/actions/warningActions";
import Input from "../Input/Input";
import styles from './Form.module.css';


const DeleteForm = (props: any) => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    function handleChange(e: any) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    function setWarningMessage(type: null | String, message: String) {
        props.setWarning({
            message,
            type
        })
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()

        if (!user.email.includes('@') || !user.email.includes('.com') || user.email.length < 6) {
            return setWarningMessage('error', 'Email inválido!')
        }

        const regex = /\W|_/

        if (user.password.length < 9 || !regex.test(user.password)) {
            return setWarningMessage('error', 'Senha inválida!')
        }

        props.deleteUser({
            email: user.email,
            password: user.password
        })
    }


    return (
        <div className={styles.form}>
            <h1>Faça login para remover a conta</h1>
            <form onSubmit={e => handleSubmit(e)}>
                <Input
                    type='email'
                    name='email'
                    placeholder='Digite seu email'
                    handleOnChange={handleChange}
                    value={user.email}
                />
                <Input
                    type='password'
                    name='password'
                    placeholder='Digite sua senha'
                    handleOnChange={handleChange}
                    value={user.password}
                />

                <input type="submit" value="Remover conta" id={styles.form__danger} />
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(warningActions, dispatch)

export default connect(null, mapDispatchToProps)(DeleteForm)