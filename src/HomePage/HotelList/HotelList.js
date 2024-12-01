import React from "react";
import "./HotelList.css";

function HotelList({ hotels }) {
  const groupedHotels = hotels.reduce((acc, hotel) => {
    const type = hotel.hotel_type_name; // 호텔 유형
    if (!acc[type]) {
      acc[type] = [];
    }
    acc[type].push(hotel);
    return acc;
  }, {});

  return (
    <div className="hotel-list">
      {Object.entries(groupedHotels).map(([type, hotels]) => (
        <div key={type} className="hotel-type-group">
          <h2 className="hotel-type-header">{type}</h2>
          <div className="hotel-cards">
            {hotels.map((hotel) => (
              <div key={hotel.hotel_id} className="hotel-card">
                <img
                  src="/hotel.jpg"
                  alt={hotel.hotel_name}
                  className="hotel-image"
                />
                <div className="hotel-info">
                  <h3 className="hotel-name">{hotel.hotel_name}</h3>
                  <p className="hotel-rating">
                    ⭐ {hotel.rating_avg || "N/A"}
                  </p>
                  <p className="hotel-price">
                    💰 {hotel.price_range || "Unknown"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default HotelList;
