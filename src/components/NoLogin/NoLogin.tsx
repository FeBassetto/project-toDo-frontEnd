import React from "react";
import styled from "styled-components";
import IStyledTheme from "../../models/IStyledTheme";
import styles from './NoLogin.module.css'
import { useNavigate } from "react-router-dom";

const StyledButton = styled.button`
    background-color: ${({ theme }: IStyledTheme) => theme.primaryColor};
    color: ${({ theme }: IStyledTheme) => theme.primaryBackground};
`

const NoLogin = () => {

    const navigate = useNavigate()

    return (
        <section className={styles.nologin}>
            <div className={styles.nologin__box}>
                <p>Comece sua organização com ToDo</p>
                <StyledButton onClick={() => navigate('/login')}>
                    Login
                </StyledButton>
            </div>
        </section>
    )
}

export default NoLogin