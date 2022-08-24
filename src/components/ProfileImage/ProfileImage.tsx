import React from "react";
import styles from './ProfileImage.module.css'

const ProfileImage = ({ src, alt }: any) => {

    return (
        <img src={src ?
            URL.createObjectURL(src)
            :
            `${process.env.REACT_APP_BASE_URL_IMAGE}/nullimage.jpg`
        }
            alt={alt?.name ? alt.name : 'Sem imagem'} className={styles.profileImage} />
    )
}

export default ProfileImage