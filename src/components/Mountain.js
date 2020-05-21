import React, { Component } from 'react'

export default class Mountain extends Component {
    render() {
        return (
            <div>

            <div class="high-container row text-center my-5">
             <div class="higlight col-md-6">
             <p>Actually it's probably a list/keys issue</p>
             <h2>{this.props.title}</h2>
            
             <h3>{this.props.descrip}</h3>
    </div>
             </div>
             </div>

        )
    }
}
