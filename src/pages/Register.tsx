import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import RegisterForm from "../components/Forms/RegisterForm";
import Loader from "../components/Loader/Loader";
import UserLogged from "../components/UserLogged/UserLogged";
import { userActions } from "../store/actions/userActions";

const Register = (props: any) => {
    return (
        <section>
            {!props.loading && !props.token && (
                <RegisterForm
                    registerUser={props.registerUser}
                />
            )}
            {props.loading && (
                <Loader />
            )}
            {props.token && !props.loading && (
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

export default connect(mapStateToProps, mapDispatchToProps)(Register)