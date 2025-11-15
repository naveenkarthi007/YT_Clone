import React from "react";
import "./Home.css";
import { useNavigate } from 'react-router-dom';
import { FaYoutube, FaHistory } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions, MdLibraryAdd, MdAccountCircle } from "react-icons/md";
function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <div className="navbar">
        <h1 className="logo1"><FaYoutube /></h1>
        <h2 className="logo">YouTube</h2>
        <input className="search" type="text" placeholder="Search" />
        <button className='Logout' onClick={() => navigate('/login')}>Logout</button>
      </div>
      <div className="body">
        <div className="sidebar">
          <button className="side-btn" >
            <IoIosHome className="icon" /> Home
          </button>
          <button className="side-btn" onClick={() => navigate('/shorts')}>
            <SiYoutubeshorts className="icon" /> Shorts
          </button>
          <button className="side-btn">
            <MdSubscriptions className="icon" /> Subscriptions
          </button>
          <hr className="line" />
          <button className="side-btn">
            <MdLibraryAdd className="icon" /> Library
          </button>
          <button className="side-btn">
            <FaHistory className="icon" /> History
          </button>
          <button className="side-btn">
            <MdAccountCircle className="icon" /> Your Channel
          </button>
          <button className="side-btn">
            <MdAccountCircle className="icon" /> Watch Later
          </button>
          <button className="side-btn">
            <MdAccountCircle className="icon" /> Playlists
          </button>
          <hr className="line" />
          <h3 className="side-title">Explore</h3>
          <button className="side-btn"><MdSubscriptions className="icon" /> Trending</button>
          <button className="side-btn"><MdSubscriptions className="icon" /> Music</button>
          <button className="side-btn"><MdSubscriptions className="icon" /> Movies</button>
          <button className="side-btn"><MdSubscriptions className="icon" /> Gaming</button>
          <button className="side-btn"><MdSubscriptions className="icon" /> News</button>
          <button className="side-btn"><MdSubscriptions className="icon" /> Sports</button>
        </div>
        <div className="videos">
          <div className="video-row">
            <iframe src="https://www.youtube.com/embed/CgkZ7MvWUAA" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/RVFAyFWO4go" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/nCTh4OWjdMs" allowFullScreen></iframe>
          </div>
          <div className="video-row">
            <iframe src="https://www.youtube.com/embed/EVdh8DCLnA0" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/UYFtY7Acngw" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/uLQRrc6ODaY" allowFullScreen></iframe>
          </div>
          <div className="video-row">
            <iframe src="https://www.youtube.com/embed/CvCiNeLnZ00" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/b9eMGE7QtTk" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/oSmvHbnPCHA" allowFullScreen></iframe>
          </div>          
           <div className="video-row">
            <iframe src="https://www.youtube.com/embed/CgkZ7MvWUAA" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/RVFAyFWO4go" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/nCTh4OWjdMs" allowFullScreen></iframe>
          </div>
          <div className="video-row">
            <iframe src="https://www.youtube.com/embed/EVdh8DCLnA0" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/UYFtY7Acngw" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/uLQRrc6ODaY" allowFullScreen></iframe>
          </div>
          <div className="video-row">
            <iframe src="https://www.youtube.com/embed/CvCiNeLnZ00" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/b9eMGE7QtTk" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/oSmvHbnPCHA" allowFullScreen></iframe>
          </div>
           <div className="video-row">
            <iframe src="https://www.youtube.com/embed/CgkZ7MvWUAA" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/RVFAyFWO4go" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/nCTh4OWjdMs" allowFullScreen></iframe>
          </div>
          <div className="video-row">
            <iframe src="https://www.youtube.com/embed/EVdh8DCLnA0" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/UYFtY7Acngw" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/uLQRrc6ODaY" allowFullScreen></iframe>
          </div>
          <div className="video-row">
            <iframe src="https://www.youtube.com/embed/CvCiNeLnZ00" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/b9eMGE7QtTk" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/oSmvHbnPCHA" allowFullScreen></iframe>
          </div>
           <div className="video-row">
            <iframe src="https://www.youtube.com/embed/CgkZ7MvWUAA" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/RVFAyFWO4go" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/nCTh4OWjdMs" allowFullScreen></iframe>
          </div>
          <div className="video-row">
            <iframe src="https://www.youtube.com/embed/EVdh8DCLnA0" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/UYFtY7Acngw" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/uLQRrc6ODaY" allowFullScreen></iframe>
          </div>
          <div className="video-row">
            <iframe src="https://www.youtube.com/embed/CvCiNeLnZ00" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/b9eMGE7QtTk" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/oSmvHbnPCHA" allowFullScreen></iframe>
          </div>
           <div className="video-row">
            <iframe src="https://www.youtube.com/embed/CgkZ7MvWUAA" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/RVFAyFWO4go" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/nCTh4OWjdMs" allowFullScreen></iframe>
          </div>
          <div className="video-row">
            <iframe src="https://www.youtube.com/embed/EVdh8DCLnA0" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/UYFtY7Acngw" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/uLQRrc6ODaY" allowFullScreen></iframe>
          </div>
          <div className="video-row">
            <iframe src="https://www.youtube.com/embed/CvCiNeLnZ00" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/b9eMGE7QtTk" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/oSmvHbnPCHA" allowFullScreen></iframe>
          </div>
           <div className="video-row">
            <iframe src="https://www.youtube.com/embed/CgkZ7MvWUAA" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/RVFAyFWO4go" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/nCTh4OWjdMs" allowFullScreen></iframe>
          </div>
          <div className="video-row">
            <iframe src="https://www.youtube.com/embed/EVdh8DCLnA0" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/UYFtY7Acngw" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/uLQRrc6ODaY" allowFullScreen></iframe>
          </div>
          <div className="video-row">
            <iframe src="https://www.youtube.com/embed/CvCiNeLnZ00" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/b9eMGE7QtTk" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/oSmvHbnPCHA" allowFullScreen></iframe>
          </div>
           <div className="video-row">
            <iframe src="https://www.youtube.com/embed/CgkZ7MvWUAA" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/RVFAyFWO4go" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/nCTh4OWjdMs" allowFullScreen></iframe>
          </div>
          <div className="video-row">
            <iframe src="https://www.youtube.com/embed/EVdh8DCLnA0" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/UYFtY7Acngw" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/uLQRrc6ODaY" allowFullScreen></iframe>
          </div>
          <div className="video-row">
            <iframe src="https://www.youtube.com/embed/CvCiNeLnZ00" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/b9eMGE7QtTk" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/oSmvHbnPCHA" allowFullScreen></iframe>
          </div>
           <div className="video-row">
            <iframe src="https://www.youtube.com/embed/CgkZ7MvWUAA" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/RVFAyFWO4go" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/nCTh4OWjdMs" allowFullScreen></iframe>
          </div>
          <div className="video-row">
            <iframe src="https://www.youtube.com/embed/EVdh8DCLnA0" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/UYFtY7Acngw" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/uLQRrc6ODaY" allowFullScreen></iframe>
          </div>
          <div className="video-row">
            <iframe src="https://www.youtube.com/embed/CvCiNeLnZ00" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/b9eMGE7QtTk" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/oSmvHbnPCHA" allowFullScreen></iframe>
          </div>
           <div className="video-row">
            <iframe src="https://www.youtube.com/embed/CgkZ7MvWUAA" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/RVFAyFWO4go" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/nCTh4OWjdMs" allowFullScreen></iframe>
          </div>
          <div className="video-row">
            <iframe src="https://www.youtube.com/embed/EVdh8DCLnA0" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/UYFtY7Acngw" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/uLQRrc6ODaY" allowFullScreen></iframe>
          </div>
          <div className="video-row">
            <iframe src="https://www.youtube.com/embed/CvCiNeLnZ00" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/b9eMGE7QtTk" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/oSmvHbnPCHA" allowFullScreen></iframe>
          </div>
           <div className="video-row">
            <iframe src="https://www.youtube.com/embed/CgkZ7MvWUAA" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/RVFAyFWO4go" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/nCTh4OWjdMs" allowFullScreen></iframe>
          </div>
          <div className="video-row">
            <iframe src="https://www.youtube.com/embed/EVdh8DCLnA0" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/UYFtY7Acngw" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/uLQRrc6ODaY" allowFullScreen></iframe>
          </div>
          <div className="video-row">
            <iframe src="https://www.youtube.com/embed/CvCiNeLnZ00" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/b9eMGE7QtTk" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/oSmvHbnPCHA" allowFullScreen></iframe>
          </div>
           <div className="video-row">
            <iframe src="https://www.youtube.com/embed/CgkZ7MvWUAA" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/RVFAyFWO4go" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/nCTh4OWjdMs" allowFullScreen></iframe>
          </div>
          <div className="video-row">
            <iframe src="https://www.youtube.com/embed/EVdh8DCLnA0" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/UYFtY7Acngw" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/uLQRrc6ODaY" allowFullScreen></iframe>
          </div>
          <div className="video-row">
            <iframe src="https://www.youtube.com/embed/CvCiNeLnZ00" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/b9eMGE7QtTk" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/oSmvHbnPCHA" allowFullScreen></iframe>
          </div>
           <div className="video-row">
            <iframe src="https://www.youtube.com/embed/CgkZ7MvWUAA" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/RVFAyFWO4go" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/nCTh4OWjdMs" allowFullScreen></iframe>
          </div>
          <div className="video-row">
            <iframe src="https://www.youtube.com/embed/EVdh8DCLnA0" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/UYFtY7Acngw" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/uLQRrc6ODaY" allowFullScreen></iframe>
          </div>
          <div className="video-row">
            <iframe src="https://www.youtube.com/embed/CvCiNeLnZ00" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/b9eMGE7QtTk" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/oSmvHbnPCHA" allowFullScreen></iframe>
          </div>
           <div className="video-row">
            <iframe src="https://www.youtube.com/embed/CgkZ7MvWUAA" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/RVFAyFWO4go" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/nCTh4OWjdMs" allowFullScreen></iframe>
          </div>
          <div className="video-row">
            <iframe src="https://www.youtube.com/embed/EVdh8DCLnA0" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/UYFtY7Acngw" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/uLQRrc6ODaY" allowFullScreen></iframe>
          </div>
          <div className="video-row">
            <iframe src="https://www.youtube.com/embed/CvCiNeLnZ00" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/b9eMGE7QtTk" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/oSmvHbnPCHA" allowFullScreen></iframe>
          </div>
           <div className="video-row">
            <iframe src="https://www.youtube.com/embed/CgkZ7MvWUAA" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/RVFAyFWO4go" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/nCTh4OWjdMs" allowFullScreen></iframe>
          </div>
          <div className="video-row">
            <iframe src="https://www.youtube.com/embed/EVdh8DCLnA0" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/UYFtY7Acngw" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/uLQRrc6ODaY" allowFullScreen></iframe>
          </div>
          <div className="video-row">
            <iframe src="https://www.youtube.com/embed/CvCiNeLnZ00" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/b9eMGE7QtTk" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/oSmvHbnPCHA" allowFullScreen></iframe>
          </div>
           <div className="video-row">
            <iframe src="https://www.youtube.com/embed/CgkZ7MvWUAA" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/RVFAyFWO4go" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/nCTh4OWjdMs" allowFullScreen></iframe>
          </div>
          <div className="video-row">
            <iframe src="https://www.youtube.com/embed/EVdh8DCLnA0" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/UYFtY7Acngw" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/uLQRrc6ODaY" allowFullScreen></iframe>
          </div>
          <div className="video-row">
            <iframe src="https://www.youtube.com/embed/CvCiNeLnZ00" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/b9eMGE7QtTk" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/oSmvHbnPCHA" allowFullScreen></iframe>
          </div>
           <div className="video-row">
            <iframe src="https://www.youtube.com/embed/CgkZ7MvWUAA" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/RVFAyFWO4go" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/nCTh4OWjdMs" allowFullScreen></iframe>
          </div>
          <div className="video-row">
            <iframe src="https://www.youtube.com/embed/EVdh8DCLnA0" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/UYFtY7Acngw" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/uLQRrc6ODaY" allowFullScreen></iframe>
          </div>
          <div className="video-row">
            <iframe src="https://www.youtube.com/embed/CvCiNeLnZ00" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/b9eMGE7QtTk" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/oSmvHbnPCHA" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
