import './index.css'

const HistoryItem = props => {
  const {historyDetails} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  return (
    <li className="history-item">
      <p className="time-accessed"> {timeAccessed} </p>
      <div className="logo-title-domain-delete-container">
        <div className="logo-title-domain-container">
          <img src={logoUrl} className="logo" />
          <div className="title-domain-container">
            <p className="title"> {title} </p>
            <p className="domain"> {domainUrl} </p>
          </div>
        </div>
        <button type="button" className="delete-btn">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
