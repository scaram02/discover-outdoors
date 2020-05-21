import React, { Component } from 'react'
import "../stylesheets/nav.css";

export default class Nav extends Component {
    render() {
        return (
            <div>
<nav >
<ul class="topnav">
  <li><a href="d">Home</a></li>
  <li class="dropdown">
      <a href="">Discover</a>
      <div class="dropdown-content">
    <a href=''>Change later</a>
  </div>
      </li>
  <li><a href="">News</a></li>
  <li><a href="">About</a></li>
</ul> 
</nav>
            </div>
        )
    }
}
