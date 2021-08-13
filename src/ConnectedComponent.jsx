import React, { Component } from 'react'
import { connect } from 'react-redux'

class ConnectedComponent extends Component {
    render() {
        return (
            <div>
                {this.props.greeting}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        greeting: state.greeting
    }
}

export default connect(mapStateToProps) (ConnectedComponent)

