import "./popUpCard.css";

const PopUpCard = ({ selectedCard, closePopup }) => {
    
  return (
    <div className="team-card-popup">
      <div className="team-card-popup-content">
        <span className="close-popup">
          <div className="close-popup-btn" onClick={() => closePopup()}>
            &times;
          </div>
        </span>
        <div className="team-card-popup-container">
          <img src={selectedCard.photo} className="popup-img" alt="pic" />
          <div className="team-card-popup-container-title">
            <p className="team-card-popup-container-title_name">
              {selectedCard.name}
            </p>
            <p className="team-card-popup-container-title_position">
              {selectedCard.position}
            </p>
          </div>
        </div>
        <div className="team-card-popup-container-info">
          <p>{selectedCard.information}</p>
        </div>
      </div>
    </div>
  );
};

export default PopUpCard;
