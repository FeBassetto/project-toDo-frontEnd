import React, { useEffect, useState } from "react";
import styles from './DesktopHeader.module.css'

import { BsMoonFill, BsSunFill } from 'react-icons/bs'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { themeActions } from "../../../store/actions/themeActions";
import ProfileImage from "../../../components/ProfileImage/ProfileImage";

const DesktopHeader = (props: any) => {

    const [preview, setPreview] = useState(props.image)

    useEffect(() => {

        setPreview(props.image)

    }, [props.image])

    const setTheme = () => {
        props.changeTheme(!props.lightMode)
    }

    return (
        <>
            <div className={styles.desktopHeader}>
                <ul>
                    <li>
                        <Link to='/'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/tasks'>
                            Tasks
                        </Link>
                    </li>
                    {props.token && (
                        <li>
                            {props.lightMode ?
                                <BsMoonFill onClick={() => setTheme()} />
                                :
                                <BsSunFill onClick={() => setTheme()} />
                            }
                        </li>
                    )}
                    {props.token ?
                        <>
                            <li id={styles.desktopHeader__image}>
                                <Link to='/profile'>
                                    <ProfileImage
                                        src={preview}
                                        alt={preview}
                                    />
                                </Link>
                            </li>
                            <li id={styles.exitButton} onClick={() => props.logOut()}>
                                <Link to='/'>
                                    Sair
                                </Link>
                            </li>
                        </>
                        :
                        <>
                            <li>
                                <Link to='/register'>
                                    Registrar
                                </Link>
                            </li>
                            <li>
                                <Link to='/login'>
                                    Entrar
                                </Link>
                            </li>
                        </>
                    }
                    {!props.token && (
                        <li>
                            {props.lightMode ?
                                <BsMoonFill onClick={() => setTheme()} />
                                :
                                <BsSunFill onClick={() => setTheme()} />
                            }
                        </li>
                    )}
                </ul>
            </div>
        </>
    )
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(themeActions, dispatch)

const mapStateToProps = (state: any) => ({
    lightMode: state.themeReducer.lightMode,
    token: state.userReducer.token,
    image: state.userReducer.image
})

export default connect(mapStateToProps, mapDispatchToProps)(DesktopHeader)
