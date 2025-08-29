import React from 'react';
import { useNavigate } from 'react-router-dom';

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      style={{
        padding: '8px 16px',
        backgroundColor: '#6c757d',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginBottom: '20px'
      }}
    >
      ← Back
    </button>
  );
};
export const BackButton2 = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      style={{
        backgroundColor:'transparent',
        border:'none',
        cursor:'pointer',      
        color:'white',
        fontWeight:'bold',
        marginRight:'10px',
        fontSize:'30px',
        marginTop:'10px',  
      }}
      
    >
    <span>&#8592;</span>
    </button>
  );
};

export const HomeButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/home')}
      style={{
        padding: '8px 16px',
        backgroundColor: '#6c757d',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginBottom: '20px',
        justifySelf:'end',
        alignSelf:'end',
        marginRight:'20px'

      }}
    >
      🏠 Home
    </button>
  );
};
