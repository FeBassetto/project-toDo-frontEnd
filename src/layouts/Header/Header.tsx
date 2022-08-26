import React from "react";
import styled from "styled-components";
import styles from './Header.module.css'

import { RiTodoLine } from 'react-icons/ri'

import IStyledTheme from "../../models/IStyledTheme";
import MobileHeader from "./MobileHeader/MobileHeader";
import DesktopHeader from "./DesktopHeader/DesktopHeader";
import { Link } from "react-router-dom";
import { bindActionCreators, Dispatch } from "redux";
import { userActions } from "../../store/actions/userActions";
import { connect } from "react-redux";

const StyledHeader = styled.header`
    background-color: ${({ theme }: IStyledTheme) => theme.headerBackground};
    color: ${({ theme }: IStyledTheme) => theme.headerColor};
    border-bottom: 2px solid ${({ theme }: IStyledTheme) => theme.headerColor};
`

const Header = (props: any) => {

    function logOut() {
        props.addToReducer({
            token: null,
            name: null,
            image: null,
            email: null,
            phone: null,
        })
    }

    return (
        <StyledHeader className={styles.header}>
            <span className={styles.header__logo}>
                <Link to='/'>
                    <RiTodoLine />
                    ToDo
                </Link>
            </span>
            <div className={styles.header__mobile}>
                <MobileHeader logOut={logOut} />
            </div>
            <div className={styles.header__desktop}>
                <DesktopHeader logOut={logOut} />
            </div>
        </StyledHeader>
    )
}


const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(userActions, dispatch)

export default connect(null, mapDispatchToProps)(Header)