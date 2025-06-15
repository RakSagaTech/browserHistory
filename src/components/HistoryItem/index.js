import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistoryItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onClickDelete = () => {
    deleteHistoryItem(id)
  }

  return (
    <li className="history-item">
      <p className="time-accessed"> {timeAccessed} </p>
      <div className="logo-title-domain-delete-container">
        <div className="logo-title-domain-container">
          <img src={logoUrl} alt="domain logo" className="logo" />
          <div className="title-domain-container">
            <p className="title"> {title} </p>
            <p className="domain"> {domainUrl} </p>
          </div>
        </div>
        <button
          type="button"
          className="delete-btn"
          data-testid="delete"
          onClick={onClickDelete}
        >
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
