import './spinner.scss'
const Spinner = (props) => {
    return(
        <div className="spinner-parent">
            <div className="d-flex flex-column justify-content-center align-items-center spinner">
                <div className="d-flex">
                    <div className="spinner-grow mx-1 mb-4" role="status" aria-hidden="true"/>
                    <div className="spinner-grow mx-1 mb-4" role="status" aria-hidden="true"/>
                    <div className="spinner-grow mx-1 mb-4" role="status" aria-hidden="true"/>
                </div>
                <strong>{props.message}</strong>
            </div>
        </div>
    )
}

Spinner.defaultProps = {
    message : 'Loader ...'
}

export default Spinner