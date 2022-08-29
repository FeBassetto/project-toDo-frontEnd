import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { bindActionCreators, Dispatch } from "redux";
import EditTaskForm from "../components/Forms/EditTaskForm";
import Loader from "../components/Loader/Loader";
import NoLogin from "../components/NoLogin/NoLogin";
import { taskActions } from "../store/actions/taskActions";


const EditTask = (props: any) => {

    const { id } = useParams()

    const tasksById = props.tasks.filter((task: any) => {
        if (task.id === id) {
            return task
        }
    })

    return (
        <section>
            {!props.token && !props.loading && (
                <NoLogin />
            )}

            {props.loading && (
                <Loader />
            )}
            {!props.loading && props.token && (
                <EditTaskForm
                    task={tasksById}
                    editTask={props.editTask}
                />
            )}
        </section>
    )
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(taskActions, dispatch)

const mapStateToProps = (state: any) => ({
    loading: state.loadingReducer.loading,
    token: state.userReducer.token,
    tasks: state.taskReducer.tasks
})

export default connect(mapStateToProps, mapDispatchToProps)(EditTask)