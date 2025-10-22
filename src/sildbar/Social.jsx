import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Social.css'

function SocialLinks() {
  return (
    <div className="icon">
      <a href="https://github.com/SokpisethNhoeun" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github"></i>
      </a>
      <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="https://t.me/Nhoeunsokpiseth" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-telegram"></i>
      </a>
      <a href="https://facebook.com/Nhoeunsokpiseth" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook"></i>
      </a>
      <a href="https://www.tiktok.com/@n_s_piseth" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-tiktok"></i>
      </a>
      <a href="mailto:sokpisethnhom0963@gmail.com">
        <i className="fas fa-envelope"></i>
      </a>
    </div>
  );
}

export default SocialLinks;
