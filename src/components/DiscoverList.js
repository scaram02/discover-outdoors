// import React from 'react'

import React, { Component } from 'react'


const posts = [
    {id: "1", title: "Discover the forest", sub: "Welcome to the forest. Explore the trees, the moss, the mulch, the woody scents.", content: "lorem ipsum"},
    {id: "2", title: "Discover the mountains", sub: "Breathe in. Breathe out. Look around.", content: "lorem"}
]


export default class DiscoverList extends Component {

    render() {
        return (
            <div>
                {posts.map(item => 
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <h4>{item.sub}</h4>
                    </div>)}
            </div>
        )
    }
}
