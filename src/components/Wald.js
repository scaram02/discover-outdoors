import React, { Component } from 'react'

export default class Wald extends Component {
    render() {
        return (
            <div>
                  <div class="high-container">
             <div class="higlight">
                 <div>
             <h1>{this.props.title}</h1>
             </div>
             <div>
             <h2>{this.props.descrip}</h2>
</div></div></div>
            </div>
        )
    }
}
