import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { warningActions } from "../../store/actions/warningActions";
import Input from "../Input/Input";
import ProfileImage from "../ProfileImage/ProfileImage";
import styles from './Form.module.css'

const RegisterForm = (props: any) => {

    console.log(props)

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
                value: ''
            }
        }
    )

    const [preview, setPreview] = useState()

    function handleChange(e: any) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    function fileChange(e: any) {
        const file = e.target.files[0]
        if (!String(file.name).includes('.png') && !String(file.name).includes('.jpg')) {

            setPreview(undefined)
            setUser({ ...user, image: { value: '' } })
            console.log(props)
            props.setWarning({
                message: 'Apenas arquivos jpg e png são aceitos!',
                type: 'error'
            })
            return
        }
        setPreview(file)
        setUser({ ...user, [e.target.name]: file })
    }

    return (
        <div className={styles.form}>
            <h1>Criar conta</h1>
            <ProfileImage
                src={preview}
                alt={preview}
            />
            <form>
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
                    type='text'
                    name='phone'
                    placeholder='Digite seu celular'
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
                    name='password'
                    placeholder='Confirme sua senha'
                    handleOnChange={handleChange}
                    value={user.confirmpassword.value}
                />
                <input type="submit" value='Cadastrar' />
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(warningActions, dispatch)

const mapStateToProps = (state: any) => ({
    message: state.warningReducer.message,
    type: state.warningReducer.type
})

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm)