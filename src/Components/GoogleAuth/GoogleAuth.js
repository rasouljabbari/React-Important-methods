import React, {Component} from 'react';
import {connect} from "react-redux";
import {signIn, signOut} from "../../redux/actions";

class GoogleAuth extends Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '182202868499-3r4j1tf0d8c6dcvtobif7qeikeqfhgpe.apps.googleusercontent.com',
                scope: 'email',
            }).then(() => {

                this.auth = window.gapi.auth2.getAuthInstance();

                this.onAuthChange(this.auth.isSignedIn.get())

                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId())
        } else {
            this.props.signOut()
        }
    }

    onSignOut = () => {
        this.auth.signOut()
    }

    onSignIn = () => {
        this.auth.signIn()
    }

    renderAuthButton() {

        if (this.props.isSignedIn === null) {
            return null
        } else if (this.props.isSignedIn) {
            return (
                <button className={'btn btn-danger'} onClick={this.onSignOut}>
                    Sign Out (User id is : {this.props.user_id})
                </button>
            )
        } else {
            return (
                <button className={'btn btn-info'} onClick={this.onSignIn}>
                    Sign In
                </button>
            )
        }
    }

    render() {
        return (
            <>
                {this.renderAuthButton()}
            </>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        isSignedIn: state.auth.isSignedIn,
        user_id: state.auth.user_id,
    }
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth)