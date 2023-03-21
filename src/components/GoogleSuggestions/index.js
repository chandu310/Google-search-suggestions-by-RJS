// Write your code here
import {Component} from 'react'

import './index.css'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {text: ''}

  textVisible = event => {
    const word = event.target.value
    const result = word.toLowerCase()
    this.setState({
      text: result,
    })
  }

  arrowFun = value => {
    this.setState({text: value})
  }

  render() {
    const {suggestionsList} = this.props
    const {text} = this.state
    const searchResults = suggestionsList.filter(eachUser =>
      eachUser.suggestion.toLowerCase().includes(text),
    )
    return (
      <div className="main-container">
        <div className="second-container">
          <img
            alt="google logo"
            className="img"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          />
          <div className="search-container">
            <div className="bar-cont">
              <img
                alt="search icon"
                className="search-icon"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              />
              <input
                type="search"
                onChange={this.textVisible}
                className="search-bar"
                placeholder="Search Google"
                value={text}
              />
            </div>
            <ul>
              {searchResults.map(each => (
                <SuggestionItem
                  suggestionList={each}
                  key={each.id}
                  arrowFun={this.arrowFun}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
