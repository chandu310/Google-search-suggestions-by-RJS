// Write your code here

import './index.css'

const SuggestionItem = props => {
  const {suggestionList, arrowFun} = props
  const {suggestion} = suggestionList

  const onClickChange = () => {
    arrowFun(suggestion)
  }
  return (
    <li>
      <p>{suggestion}</p>
      <img
        onClick={onClickChange}
        className="arrow"
        alt="arrow"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
      />
    </li>
  )
}
export default SuggestionItem
