import './index.css'

const HistoryItem = props => {
  const {historyDetails} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  return (
    <li>
      <p>{timeAccessed}</p>
      <div>
        <img src={logoUrl} alt="logo" />
        <div>
          <p> {title} </p>
          <p> {domainUrl}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </div>
    </li>
  )
}

export default HistoryItem