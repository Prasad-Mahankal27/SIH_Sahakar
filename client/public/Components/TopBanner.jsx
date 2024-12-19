import React from 'react';
import gov_logo from '../Images/gov_logo.png';
import sahakar_logo from '../Images/sahakarlogo.png'; // Import the new logo image
import { useNavigate, useLocation } from 'react-router-dom';

const TopBanner = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogOut = () => {
    navigate('/');
  };

  return (
    <>
      <div className="top-banner flex items-center justify-between p-4 bg-white shadow-md">
        <img className="gov-logo" src={gov_logo} alt="Government Logo" width={160} />
        <div className="ban-logo" style={{ textAlign: 'center' }}>
          <img src={sahakar_logo} alt="Sahakar Logo" width={360} />
        </div>
        {location.pathname === '/' ? (
          <button id="empty-but" style={{ backgroundColor: 'white', width: '140px', height: '30px', border: 'none' }}></button>
        ) : (
          <button onClick={handleLogOut} id="logout-but" className="bg-red-500 text-white rounded px-4 py-2 hover:bg-red-600 transition">
            Logout
          </button>
        )}
      </div>
      <div className="notice-bar bg-black p-1 text-white font-semibold" style={{ overflow: 'hidden', whiteSpace: 'nowrap', height: '50px', display: 'flex', alignItems: 'center' }}>
        <div
          className="moving-text"
          style={{
            display: 'inline-block',
            animation: 'move-horizontally 50s linear infinite',
            whiteSpace: 'nowrap',
          }}
        >
          Update: We are thrilled to announce the upcoming launch of our new Interdepartmental Collaboration Portal, designed to enhance collaboration across departments.
          &nbsp;&nbsp;|&nbsp;&nbsp; Civil Department Update: New road maintenance schedules and mapping integrated for inter-departmental coordination.
          &nbsp;&nbsp;|&nbsp;&nbsp; Electricity Board Update: Notification system for upcoming power outages to assist in project scheduling.
          &nbsp;&nbsp;|&nbsp;&nbsp; Water Department Update: Pipeline installation projects mapped to avoid site conflicts.
          &nbsp;&nbsp;|&nbsp;&nbsp; Urban Development: Upcoming workshop on interdepartmental collaboration scheduled for next month.
          {/* Duplicate the content to make it loop seamlessly */}
          &nbsp;&nbsp;|&nbsp;&nbsp; Update: We are thrilled to announce the upcoming launch of our new Interdepartmental Collaboration Portal, designed to enhance collaboration across departments.
          &nbsp;&nbsp;|&nbsp;&nbsp; Civil Department Update: New road maintenance schedules and mapping integrated for inter-departmental coordination.
          &nbsp;&nbsp;|&nbsp;&nbsp; Electricity Board Update: Notification system for upcoming power outages to assist in project scheduling.
          &nbsp;&nbsp;|&nbsp;&nbsp; Water Department Update: Pipeline installation projects mapped to avoid site conflicts.
          &nbsp;&nbsp;|&nbsp;&nbsp; Urban Development: Upcoming workshop on interdepartmental collaboration scheduled for next month.
        </div>
      </div>
      <style jsx="true">{`
        @keyframes move-horizontally {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </>
  );
};

export default TopBanner;
