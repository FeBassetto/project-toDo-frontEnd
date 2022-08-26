import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import LoginForm from "../components/Forms/LoginForm";
import Loader from "../components/Loader/Loader";
import UserLogged from "../components/UserLogged/UserLogged";
import { userActions } from "../store/actions/userActions";


const Login = (props: any) => {
    return (
        <section>
            {props.loading && (
                <Loader />
            )}
            {!props.loading && !props.token && (
                <LoginForm
                    loginUser={props.loginUser}
                />
            )}
            {!props.loading && props.token && (
                <UserLogged />
            )}
        </section>
    )
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(userActions, dispatch)

const mapStateToProps = (state: any) => ({
    loading: state.loadingReducer.loading,
    token: state.userReducer.token
})


export default connect(mapStateToProps, mapDispatchToProps)(Login)