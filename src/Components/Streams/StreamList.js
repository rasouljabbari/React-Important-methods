import React from "react";
import {connect} from "react-redux";
import {fetchStreams, deleteStream} from "../../redux/actions";

class StreamList extends React.Component {

    componentDidMount() {
        this.props.fetchStreams()
    }

    renderList() {
        return this.props.streams.map((stream) => {
            return (
                <div key={stream.id} className={'card mb-3'}>
                    <div className="card-header">{stream.title}</div>
                    <div className="card-body">{stream.description}</div>
                    {
                        this.renderAdmin(stream)
                    }
                </div>
            )
        })
    }

    renderAdmin = (stream) => {
        console.log(stream, this.props.currentUserId)
        if (stream.userId?.user_id === this.props.currentUserId) {
            return (
                <div>
                    <button className={'btn btn-danger text-light'}
                            onClick={() => this.removeHandler(stream.id)}>Remove
                    </button>
                    <button className={'btn btn-info text-light'}
                            onClick={() => this.editHandler(stream.id)}>Edit
                    </button>
                </div>
            )
        }
    }

    removeHandler = async (id) => {
        await this.props.deleteStream(id)
        this.props.fetchStreams()
        this.renderList()
    }

    editHandler = (id) => {
        console.log(this.props.currentUserId, id)
        // this.props.deleteStream(id)
        // this.props.fetchStreams()
    }

    render() {
        console.log(this.props.streams)
        return (
            <>
                <h2>Streams : </h2>
                {this.renderList()}
            </>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.user_id
    }
}

export default connect(mapStateToProps, {fetchStreams, deleteStream})(StreamList)