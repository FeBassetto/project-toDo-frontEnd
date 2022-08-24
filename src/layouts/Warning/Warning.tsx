import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { warningActions } from "../../store/actions/warningActions";
import styles from './Warning.module.css'

const Warning = (props: any) => {

    const showWarning = props.type !== null
    const typeMessage = props.type === 'success' ? styles.warning_success : styles.warning_error

    useEffect(() => {
        if (props.type !== null) {
            setTimeout(() => {
                props.setWarning({
                    message: '',
                    type: null
                })
            }, 5000)
        }
    }, [props])

    return (
        <div className={`${styles.warning} ${!showWarning && styles.warning_disabled} ${typeMessage}`}>
            {props.message}
        </div>
    )
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(warningActions, dispatch)

const mapStateToProps = (state: any) => ({
    message: state.warningReducer.message,
    type: state.warningReducer.type
})

export default connect(mapStateToProps, mapDispatchToProps)(Warning)