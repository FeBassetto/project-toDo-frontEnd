import React from "react";
import styled from "styled-components";
import styles from './Header.module.css'

import { RiTodoLine } from 'react-icons/ri'

import IStyledTheme from "../../models/IStyledTheme";
import MobileHeader from "./MobileHeader/MobileHeader";
import DesktopHeader from "./DesktopHeader/DesktopHeader";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
    background-color: ${({ theme }: IStyledTheme) => theme.headerBackground};
    color: ${({ theme }: IStyledTheme) => theme.headerColor};
    border-bottom: 2px solid ${({ theme }: IStyledTheme) => theme.headerColor};
`

const Header = () => {
    return (
        <StyledHeader className={styles.header}>
            <span className={styles.header__logo}>
                <Link to='/'>
                    <RiTodoLine />
                    ToDo
                </Link>
            </span>
            <div className={styles.header__mobile}>
                <MobileHeader />
            </div>
            <div className={styles.header__desktop}>
                <DesktopHeader />
            </div>
        </StyledHeader>
    )
}

export default Header