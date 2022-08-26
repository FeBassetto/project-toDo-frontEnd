import React from "react";
import { connect } from "react-redux";
import Loader from "../components/Loader/Loader";
import NoLogin from "../components/NoLogin/NoLogin";
import EditForm from "../components/Forms/EditForm";
import { bindActionCreators, Dispatch } from "redux";
import { userActions } from "../store/actions/userActions";

const Profile = (props: any) => {
    return (
        <section>
            {props.loading && (
                <Loader />
            )}
            {!props.token && !props.loading && (
                <NoLogin />
            )}
            {props.token && !props.loading && (
                <EditForm 
                editUser={props.editUser}
                />
            )}
        </section>
    )
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(userActions, dispatch)

const mapStateToProps = (state: any) => ({
    loading: state.loadingReducer.loading,
    token: state.userReducer.token
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)