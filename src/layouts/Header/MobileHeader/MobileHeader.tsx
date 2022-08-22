import React, { useState } from "react";
import styles from './MobileHeader.module.css'

import { BsMoonFill, BsSunFill } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { connect } from "react-redux";
import styled from "styled-components";
import IStyledTheme from "../../../models/IStyledTheme";
import { Link } from "react-router-dom";
import { bindActionCreators, Dispatch } from "redux";
import { themeActions } from "../../../store/actions/themeActions";

const StyledMenu = styled.div`
    background-color: ${({ theme }: IStyledTheme) => theme.headerBackground};
    border-top: 1px solid ${({ theme }: IStyledTheme) => theme.headerColor};

    & ul li{
       border-bottom : 1px solid ${({ theme }: IStyledTheme) => theme.headerColor};
    }
`

const MobileHeader = (props: any) => {

    const [openMenu, setOpenMenu] = useState(false)

    const toggleMenu = () => {
        setOpenMenu(openMenu => !openMenu)
    }

    const setTheme = () => {
        props.changeTheme(!props.lightMode)
    }

    return (
        <>
            <div className={styles.mobileHeader}>
                {props.lightMode ?
                    <BsMoonFill onClick={() => setTheme()} />
                    :
                    <BsSunFill onClick={() => setTheme()} />
                }
                <GiHamburgerMenu onClick={() => toggleMenu()} />
            </div>
            <StyledMenu className={`${styles.mobileHeader__menu} ${!openMenu && styles.mobileHeader__menu_closed}`}>
                <ul>
                    <li onClick={() => toggleMenu()}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li onClick={() => toggleMenu()}>
                        <Link to='/Tasks'>Tasks</Link>
                    </li>
                    <li onClick={() => toggleMenu()}>
                        <Link to='/Profile'>Perfil</Link>
                    </li>
                    <li onClick={() => toggleMenu()}>
                        <Link to='/Exit'>Sair</Link>
                    </li>
                </ul>
            </StyledMenu>
        </>
    )
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(themeActions, dispatch)

const mapStateToProps = (state: any) => ({
    lightMode: state.themeReducer.lightMode
})

export default connect(mapStateToProps, mapDispatchToProps)(MobileHeader)