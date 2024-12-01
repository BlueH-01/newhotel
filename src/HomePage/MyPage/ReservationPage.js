import React, { useState } from 'react';
import ReservationList from '../../Reservation/ReservationList';

const initialReservations = [
    {
      id: '123451',
      hotelName: '더 리센츠 동대문호텔',
      date: '2024년 11월 7일',
      duration: '11월 23일 - 11월 25일',
      user: 'SEONGYUBIN',
      price: 122000,
      imageUrl: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/97714300.jpg?k=34a62a2ab3bda24881f47e35b4e39ecf3019d8a08537e7e92ee0b30dfefe751a&o=&hp=1', // 호텔 이미지 URL
      isCheckedOut: true, // 체크아웃 여부
    },
    {
      id: '123456',
      hotelName: '소노벨 동대문',
      date: '2024년 11월 01일',
      duration: '11월 17일 - 11월 18일',
      user: 'SEONGYUBIN',
      price: 160000,
      imageUrl: 'https://pix8.agoda.net/property/60391282/0/1f76cefb3a29ec01c5a17f755bba3352.jpeg?s=1024x', // 다른 호텔 이미지 URL
      isCheckedOut: false,
    },
    {
      id: '123450',
      hotelName: '골든 시티 호텔 동대문',
      date: '2024년 11월 01일',
      duration: '11월 17일 - 11월 18일',
      user: 'SEONGYUBIN',
      price: 130000,
      imageUrl: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/40213632.jpg?k=f118e8adad6bbec0bb34731b5df185f545095c269a157aca6fd48a129cdacdf2&o=&hp=1', // 다른 호텔 이미지 URL
      isCheckedOut: true,
    }
  ];
function ReservationsPage() {
  const [reservations, setReservations] = useState(initialReservations);

  const handleDelete = (id) => {
    setReservations(reservations.filter((res) => res.id !== id));
  };

  const handleRetry = (id) => {
    alert(`예약 ${id}를 다시 시도합니다.`);
  };

  return (
    <div>
      <h1 className="text-center">My 예약</h1>
      <ReservationList
        reservations={reservations}
        onDelete={handleDelete}
        onRetry={handleRetry}
      />
    </div>
  );
}

export default ReservationsPage;