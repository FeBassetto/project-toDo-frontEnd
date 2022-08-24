import React from "react";
import styled from "styled-components";
import IStyledTheme from "../../models/IStyledTheme";
import styles from './Container.module.css';

const StyledSection = styled.section`
    background-color: ${({ theme }: IStyledTheme) => theme.primaryBackground};
    color: ${({ theme }: IStyledTheme) => theme.primaryColor};
`

const Container = ({ children }: any) => {

    return (
        <StyledSection className={styles.container}>
            {children}
        </StyledSection>
    )
}

export default Container