import React, { FormEvent, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators, Dispatch } from "redux";
import { warningActions } from "../../store/actions/warningActions";
import Input from "../Input/Input";
import Loader from "../Loader/Loader";
import ProfileImage from "../ProfileImage/ProfileImage";
import UserLogged from "../UserLogged/UserLogged";
import styles from './Form.module.css'

const RegisterForm = (props: any) => {

    const [user, setUser] = useState(
        {
            name: {
                value: ''
            },
            email: {
                value: ''
            },
            password: {
                value: ''
            },
            confirmpassword: {
                value: ''
            },
            phone: {
                value: ''
            },
            image: {
                value: { name: '' }
            }
        }
    )

    const [preview, setPreview] = useState(null)

    function handleChange(e: any) {
        setUser({ ...user, [e.target.name]: { value: e.target.value } })
    }

    function setWarningMessage(type: null | String, message: String) {
        props.setWarning({
            message,
            type
        })
    }

    function fileChange(e: any) {
        const file = e.target.files[0]

        if (!String(file.name).includes('.png') && !String(file.name).includes('.jpg')) {

            setPreview(null)
            setWarningMessage('error', 'Apenas arquivos ".jpg" e ".png" são aceitos!')

        } else {
            setPreview(file)
        }

        setUser({ ...user, image: { value: file } })
    }

    function handleSubmit(e: FormEvent) {

        e.preventDefault()

        if (!String(user.image.value.name).includes('.png') && !String(user.image.value.name).includes('.jpg') && user.image.value.name.length > 0) {
            return setWarningMessage('error', 'Apenas arquivos ".jpg" e ".png" são aceitos como imagem!')
        }

        if (user.name.value.length < 4) {
            return setWarningMessage('error', 'Digite um nome com pelo menos 4 caracteres!')
        }

        if (user.phone.value.length < 10 || user.phone.value.length > 11) {
            return setWarningMessage('error', 'Digite um celular com ddd no formato "1498765432"!')
        }

        if (!user.email.value.includes('@') || !user.email.value.includes('.com') || user.email.value.length < 6) {
            return setWarningMessage('error', 'Digite um email válido!')
        }

        const regex = /\W|_/

        if (user.password.value.length < 9 || !regex.test(user.password.value)) {
            return setWarningMessage('error', 'Digite uma senha com no mínimo 9 caracteres, e use pelo menos um caracter especial (@ # $ % &)!')
        }

        if (user.password.value !== user.confirmpassword.value) {
            return setWarningMessage('error', 'As senhas não estão compatíveis!')
        }

        return props.registerUser({
            name: user.name.value,
            image: user.image.value,
            phone: user.phone.value,
            email: user.email.value,
            password: user.password.value,
            confirmpassword: user.confirmpassword.value
        })

    }

    return (
        <div className={styles.form}>
            <h1>Criar conta</h1>
            <ProfileImage
                src={preview}
                alt={preview}
            />
            <form onSubmit={e => handleSubmit(e)}>
                <Input
                    type='file'
                    name='image'
                    handleOnChange={fileChange}
                    value={user.image.value}
                />

                <Input
                    type='text'
                    name='name'
                    placeholder='Digite seu nome'
                    handleOnChange={handleChange}
                    value={user.name.value}
                />
                <Input
                    type='number'
                    name='phone'
                    placeholder='Digite seu celular com DDD'
                    handleOnChange={handleChange}
                    value={user.phone.value}
                />
                <Input
                    type='email'
                    name='email'
                    placeholder='Digite seu email'
                    handleOnChange={handleChange}
                    value={user.email.value}
                />
                <Input
                    type='password'
                    name='password'
                    placeholder='Digite sua senha'
                    handleOnChange={handleChange}
                    value={user.password.value}
                />
                <Input
                    type='password'
                    name='confirmpassword'
                    placeholder='Confirme sua senha'
                    handleOnChange={handleChange}
                    value={user.confirmpassword.value}
                />
                <input type="submit" value='Cadastrar' />
            </form>
            <p className={styles.form__link}>Já tem login? <Link to='/login'>Logar-se</Link></p>
        </div>
    )
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(warningActions, dispatch)

export default connect(null, mapDispatchToProps)(RegisterForm)