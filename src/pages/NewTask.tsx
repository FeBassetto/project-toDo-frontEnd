import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import NewTaskForm from "../components/Forms/NewTaskForm";
import Loader from "../components/Loader/Loader";
import NoLogin from "../components/NoLogin/NoLogin";
import { taskActions } from "../store/actions/taskActions";

const NewTask = (props: any) => {
    return (
        <section>
            {!props.token && !props.loading && (
                <NoLogin />
            )}

            {props.loading && (
                <Loader />
            )}
            {!props.loading && props.token && (
                <NewTaskForm
                    createTask={props.createTask}
                />
            )}
        </section>
    )
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(taskActions, dispatch)

const mapStateToProps = (state: any) => ({
    loading: state.loadingReducer.loading,
    token: state.userReducer.token
})

export default connect(mapStateToProps, mapDispatchToProps)(NewTask)