import React, { useState } from "react";
import styled from "styled-components";
import IInputComponent from "../../models/IInputComponent";
import IStyledTheme from "../../models/IStyledTheme";
import styles from './Input.module.css'

const StyledInput = styled.div`
    background-color: ${({ theme }: IStyledTheme) => theme.primaryBackground};
    color: ${({ theme }: IStyledTheme) => theme.primaryColor};
    border: 1px solid ${({ theme }: IStyledTheme) => theme.primaryColor};
`

const Input = ({ type, name, placeholder, handleOnChange, value }: IInputComponent) => {

    const [focusInput, setFocusInput] = useState(value ? true : false)

    return (
        <StyledInput className={styles.input}>
            {type !== 'file' ?
                <>
                    <input
                        autoComplete="chrome-off"
                        autoCapitalize="false"
                        onBlur={() => {
                            if (value.length < 1) {
                                setFocusInput(false)
                            }
                        }}
                        onFocus={() => setFocusInput(true)}
                        name={name}
                        type={type}
                        placeholder='.'
                        onChange={handleOnChange}
                        value={value}
                    />
                    <p
                        className={`${styles.input__placeholder} ${focusInput ? styles.input__placeholder_disable : styles.input__placeholder_active}`}
                        onClick={(e: any) => e.target.parentNode.firstChild.focus()}
                    >
                        {placeholder}
                    </p>
                </>
                :
                <input
                    name={name}
                    type={type}
                    onChange={handleOnChange}
                />
            }
        </StyledInput>
    )
}

export default Input