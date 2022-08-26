import React from "react";
import styles from './DesktopHeader.module.css'

import { FaUser } from 'react-icons/fa'
import { BsMoonFill, BsSunFill } from 'react-icons/bs'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { themeActions } from "../../../store/actions/themeActions";

const DesktopHeader = (props: any) => {

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
                            <li>
                                <Link to='/profile'>
                                    <FaUser />
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
    token: state.userReducer.token
})

export default connect(mapStateToProps, mapDispatchToProps)(DesktopHeader)
