import React from "react";
import {buyMob} from "../redux";
import {connect} from "react-redux";

function MobContainer(props) {
    return(
        <div>
            <h1>Number Of Mob : {props.numOfMobs}</h1>
            <button onClick={props.buyMob}>Buy</button>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        numOfMobs: state.numOfMobs
    }
}
const mapDispatchToProps = dispatch => {
    return{
        buyMob : ()=> dispatch(buyMob())
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(MobContainer)