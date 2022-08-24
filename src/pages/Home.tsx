import React from "react";
import { connect } from "react-redux";
import NoLogin from "../components/NoLogin/NoLogin";

const Home = (props: any) => {
    return (
        <section>
            {!props.token && (
                <NoLogin />
            )}
        </section>
    )
}

const mapStateToProps = (state: any) => ({
    token: state.userReducer.token
})

export default connect(mapStateToProps, null)(Home)