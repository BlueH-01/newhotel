import React, { useState } from "react";
import ReservationPage from "./ReservationPage";

function MyPage() {
  const [activePage, setActivePage] = useState("profile");

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <div>
      <h2>My Page</h2>
      <p>Welcome to your personal page! Here you can manage your profile and bookings.</p>

      <div>
        <button onClick={() => handlePageChange("profile")}>Profile</button>
        <button onClick={() => handlePageChange("reservation")}>Reservations</button>
        <button onClick={() => handlePageChange("settings")}>Settings</button>
      </div>

      <div>
        {activePage === "profile" && <p>Your Profile Information</p>}
        {activePage === "reservation" && <ReservationPage />}
        {activePage === "settings" && <p>Settings</p>}
      </div>
    </div>
  );
}

export default MyPage;
