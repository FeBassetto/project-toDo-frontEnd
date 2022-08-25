import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import RegisterForm from "../components/Forms/RegisterForm";
import { userActions } from "../store/actions/userActions";

const Register = (props: any) => {
    return (
        <section>
            <RegisterForm 
            registerUser={props.registerUser}
            />
        </section>
    )
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(userActions, dispatch)

export default connect(null, mapDispatchToProps)(Register)