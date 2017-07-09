import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Search.css'

class Search extends Component {

  render() {
    return (
      <div className='SearchBar'>
       <form action="">
        <a href='#' id="findSearch"> #</a>
        <input type="text" value='Lowell, MA' />
          <a href='#' id="locationSearch">O</a>
        </form>
      </div>
    )
  }
}

const mapStateToProps = function(state) {
  return {}
}

const mapDispatchToProps = function(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
