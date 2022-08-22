import React from "react";
import styled from "styled-components";
import styles from './Header.module.css'

import { RiTodoLine } from 'react-icons/ri'

import IStyledTheme from "../../models/IStyledTheme";
import MobileHeader from "./MobileHeader/MobileHeader";

const StyledHeader = styled.header`
    background-color: ${({ theme }: IStyledTheme) => theme.headerBackground};
    color: ${({ theme }: IStyledTheme) => theme.headerColor};
    border-bottom: 2px solid ${({theme}:IStyledTheme) => theme.headerColor};
`

const Header = () => {
    return (
        <StyledHeader className={styles.header}>
            <span className={styles.header__logo}>
                <RiTodoLine />
                ToDo
            </span>
            <div className={styles.header__mobile}>
                <MobileHeader />
            </div>
        </StyledHeader>
    )
}

export default Header