import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import Loader from "../components/Loader/Loader";
import NewTaskButton from "../components/NewTaskButton/NewTaskButton";
import NoLogin from "../components/NoLogin/NoLogin";
import TasksContent from "../components/TasksContent/TasksContent";
import TaskFilter from "../components/TasksFilter/TasksFilter";


const Tasks = (props: any) => {
    return (
        <section>
            {!props.token && !props.loading && (
                <NoLogin />
            )}

            {props.loading && (
                <Loader />
            )}
            {props.token && !props.loading && (
                <>
                    <TaskFilter />
                    <NewTaskButton />
                    <TasksContent />
                </>
            )}
        </section>
    )
}

/* const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators() */

const mapStateToProps = (state: any) => ({
    loading: state.loadingReducer.loading,
    token: state.userReducer.token
})

export default connect(mapStateToProps, null)(Tasks)