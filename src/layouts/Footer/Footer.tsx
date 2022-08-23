import React from "react";
import styled from "styled-components";
import IStyledTheme from "../../models/IStyledTheme";
import styles from './Footer.module.css'

import { RiTodoLine } from 'react-icons/ri'
import { Link } from "react-router-dom";


const StyledFooter = styled.footer`
    background-color: ${({ theme }: IStyledTheme) => theme.footerBackground};
    color: ${({ theme }: IStyledTheme) => theme.headerColor};
    
    @media screen and (max-width: 600px){
        & > div:first-child{
        border-bottom: 1px solid ${({ theme }: IStyledTheme) => theme.headerColor};
    }

    & div ul li{
        border-bottom: 1px solid ${({ theme }: IStyledTheme) => theme.headerColor};
    }
    }
`

const Footer = () => {
    return (
        <StyledFooter className={styles.footer}>
            <div className={styles.footer__logo}>
                <Link to='/'>
                    <RiTodoLine />
                    ToDo
                </Link>
            </div>
            <div className={styles.footer__navigation}>
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
                    <li>
                        <Link to='/profile'>
                            Perfil
                        </Link>
                    </li>
                    <li>
                        <Link to='/exit'>
                            Sair
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles.footer__copyright}>
                <p>
                    Copyright©2022, ToDo. Todos os direitos reservados
                </p>
            </div>
        </StyledFooter>
    )
}

export default Footer