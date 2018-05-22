import React, { Component } from 'react'
import './style.css'

export default class Search extends Component {
  render() {
    return (
      <div className = 'Search'>
        <form className = 'searchForm'>
            <input type = 'text' className = 'input' placeholder = 'Szukaj'/>
        </form>
      </div>
    )
  }
}
