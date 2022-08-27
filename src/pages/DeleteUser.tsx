import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import DeleteForm from "../components/Forms/DeleteForm";
import Loader from "../components/Loader/Loader";
import NoLogin from "../components/NoLogin/NoLogin";
import { userActions } from "../store/actions/userActions";


const DeleteUser = (props: any) => {
    return (
        <section>
            {props.loading && (
                <Loader />
            )}
            {!props.token && !props.loading && (
                <NoLogin />
            )}
            {props.token && !props.loading && (
                <DeleteForm
                    deleteUser={props.deleteUser}
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

export default connect(mapStateToProps, mapDispatchToProps)(DeleteUser)