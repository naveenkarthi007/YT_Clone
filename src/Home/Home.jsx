import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className='body' >
        <div className='left'>
          <div className="leftside">
            <button className='Logout' onClick={() => navigate('/login')}>Logout</button>
          </div>
          <div className='home'>
             
          </div>
        </div>
    </div>
  );
}

export default Home;
