import React from "react";
import { connect } from "react-redux";
import styles from './HomeContent.module.css';

import taskImage from '../../assets/images/checkImage.png'
import taskImageDarkMode from '../../assets/images/checkImageDarkMode.jpg'
import userImage from '../../assets/images/user.png'
import userImageDarkmode from '../../assets/images/userDarkMode.webp'

import styled from "styled-components";
import IStyledTheme from "../../models/IStyledTheme";
import { useNavigate } from "react-router-dom";

const StyledButton = styled.button`
    background-color: ${({ theme }: IStyledTheme) => theme.primaryColor};
    color: ${({ theme }: IStyledTheme) => theme.primaryBackground};
`

const HomeContent = (props: any) => {

    const taskImageUrl = props.lightMode ? taskImage : taskImageDarkMode
    const userImageUrl = props.lightMode ? userImage : userImageDarkmode

    const navigate = useNavigate()

    return (
        <div className={styles.homeContent}>
            <h1>Bem vindo <br /> {props.name}!</h1>
            <div className={styles.homeContent__container}>
                <div className={styles.container__info}>
                    <h1>Veja suas Tasks</h1>
                    <img src={taskImageUrl} alt="Task logo" />
                    <StyledButton onClick={() => navigate('/tasks')}>Ver tasks</StyledButton>
                </div>
                <div className={styles.container__info}>
                    <h1>Edite seu perfil</h1>
                    <img src={userImageUrl} alt="Task logo" />
                    <StyledButton onClick={() => navigate('/profile')}>Ver perfil</StyledButton>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    name: state.userReducer.name,
    lightMode: state.themeReducer.lightMode
})

export default connect(mapStateToProps, null)(HomeContent)