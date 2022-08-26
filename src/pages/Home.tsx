import React from "react";
import { connect } from "react-redux";
import HomeContent from "../components/HomeContent/HomeContent";
import Loader from "../components/Loader/Loader";
import NoLogin from "../components/NoLogin/NoLogin";

const Home = (props: any) => {
    return (
        <section>
            {!props.token && !props.loading && (
                <NoLogin />
            )}

            {props.loading && (
                <Loader />
            )}
            {props.token && !props.loading && (
                <HomeContent />
            )}
        </section>
    )
}

const mapStateToProps = (state: any) => ({
    token: state.userReducer.token,
    loading: state.loadingReducer.loading
})

export default connect(mapStateToProps, null)(Home)