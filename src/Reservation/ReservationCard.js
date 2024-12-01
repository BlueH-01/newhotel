import React, { useState } from 'react';
import ReviewModal from './ReviewModel';

function ReservationCard({ reservation, onDelete, onRetry }) {
  const [showReviewModal, setShowReviewModal] = useState(false);

  const handleOpenReviewModal = () => {
    setShowReviewModal(true);
  };

  const handleCloseReviewModal = () => {
    setShowReviewModal(false);
  };

  const handleSubmitReview = (data) => {
    console.log('리뷰 데이터:', {
      hotelName: reservation.hotelName,
      imageUrl: reservation.imageUrl,
      ...data,
    });
    alert('리뷰가 등록되었습니다.');
    setShowReviewModal(false);
  };

  return (
    <div
      className="card"
      style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '8px',
      }}
    >
      {/* 이미지 영역 */}
      <div
        style={{
          flex: '0 0 250px',
          height: '250px',
          marginRight: '15px',
          overflow: 'hidden',
          borderRadius: '8px',
        }}
      >
        <img
          src={reservation.imageUrl}
          alt={reservation.hotelName}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      {/* 텍스트 정보 영역 */}
      <div style={{ flex: '1' }}>
        <h5 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>
          {reservation.hotelName}
        </h5>
        <p style={{ margin: '5px 0' }}>예약번호: {reservation.id}</p>
        <p style={{ margin: '5px 0' }}>예약일자: {reservation.date}</p>
        <p style={{ margin: '5px 0' }}>숙박기간: {reservation.duration}</p>
        <p style={{ margin: '5px 0' }}>예약자: {reservation.user}</p>
        <p style={{ margin: '5px 0', fontWeight: 'bold', color: '#007bff' }}>
          가격: {reservation.price.toLocaleString()}원
        </p>

        {/* 체크아웃 상태 표시 */}
        {reservation.isCheckedOut ? (
          <p style={{ color: 'green', fontWeight: 'bold', marginTop: '10px' }}>
            체크아웃 완료
          </p>
        ) : (
          <p style={{ color: 'red', fontWeight: 'bold', marginTop: '10px' }}>
            체크아웃 미완료
          </p>
        )}

        {/* 버튼 영역 */}
        <div style={{ marginTop: '10px', display: 'flex', gap: '10px' }}>
          <button className="button" onClick={() => onRetry(reservation.id)}>
            다시 예약
          </button>
          <button className="button button-danger" onClick={() => onDelete(reservation.id)}>
            예약 취소
          </button>
          <button
            className="button"
            onClick={handleOpenReviewModal}
            disabled={!reservation.isCheckedOut}
            style={{
              backgroundColor: reservation.isCheckedOut ? '#007bff' : '#ccc',
              cursor: reservation.isCheckedOut ? 'pointer' : 'not-allowed',
            }}
          >
            리뷰 쓰기
          </button>
        </div>
      </div>

      {/* 리뷰 모달 */}
      <ReviewModal
        show={showReviewModal}
        onClose={handleCloseReviewModal}
        reservation={reservation}
        onSubmit={handleSubmitReview}
      />
    </div>
  );
}

export default ReservationCard;