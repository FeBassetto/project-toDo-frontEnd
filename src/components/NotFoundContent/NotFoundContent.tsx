import React from "react";
import styled from "styled-components";
import IStyledTheme from "../../models/IStyledTheme";
import styles from './NotFoundContent.module.css'

const StyledButton = styled.button`
    color: ${({ theme }: IStyledTheme) => theme.primaryBackground};
    background-color: ${({ theme }: IStyledTheme) => theme.primaryColor};
`

const NotFoundContent = () => {
    return (
        <div className={styles.notFoundContent}>
            <h1>Erro 404!</h1>
            <h2>Página não encontrada!</h2>
            <StyledButton>Voltar para Home</StyledButton>
        </div>
    )
}

export default NotFoundContent