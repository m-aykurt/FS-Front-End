import React, { Component } from 'react'

class CardClass extends Component {
    render() {
        return (
            <div className="card w-100">
                <img src={this.props.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.cardTitle}</h5>
                        <p className="card-text">{this.props.cardText}</p>
                        <p className="card-text"><small className="text-muted">{this.props.updatedTime}</small></p>
                    </div>
            </div>
        )
    }
}

CardClass.defaultProps = {
    cardTitle : "default card title"
}

export default CardClass;