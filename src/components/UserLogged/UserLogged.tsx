import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import IStyledTheme from "../../models/IStyledTheme";
import styles from './UserLogged.module.css';

const StyledButton = styled.button`
    background-color: ${({ theme }: IStyledTheme) => theme.primaryColor};
    color: ${({ theme }: IStyledTheme) => theme.primaryBackground};
`

const UserLogged = () => {

    const navigate = useNavigate()

    return (
        <div className={styles.userlogged}>
            <p>Usuário logado, crie uma Task!</p>
            <StyledButton onClick={() => navigate('/tasks/create')}>Criar Task</StyledButton>
        </div>
    )
}

export default UserLogged