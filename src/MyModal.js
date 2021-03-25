import React from 'react';
import './Mymodal.css';

const MyModal = ({ onClose }) => {
  return (
    <div className='MyModal'>
      <div className='content'>
        <h3>이것은 모달</h3>
        <p>궁시렁 궁시렁 내용</p>
        <button onClick={onClose}>닫기</button>
      </div>
    </div>
  );
};

export default MyModal;