import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators, Dispatch } from "redux";
import { warningActions } from "../../store/actions/warningActions";
import Input from "../Input/Input";
import styles from './Form.module.css';

const LoginForm = (props: any) => {

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
            return setWarningMessage('error', 'Digite um email válido!')
        }

        const regex = /\W|_/

        if (user.password.length < 9 || !regex.test(user.password)) {
            return setWarningMessage('error', 'Senha inválida!')
        }

        props.loginUser({
            email: user.email,
            password: user.password
        })
    }

    return (
        <div className={styles.form}>
            <h1>Entrar</h1>
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

                <input type="submit" value="Entrar" />
            </form>
            <p className={styles.form__link}>Não tem conta? <Link to='/register'>Cadastrar-se</Link></p>
        </div>
    )
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(warningActions, dispatch)

export default connect(null, mapDispatchToProps)(LoginForm)