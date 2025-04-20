import React from 'react';

function Footer() {
  return (
    <footer className="text-center mt-5">
      <p>Connect with us:</p>
      <div>
        <a
          href="https://www.facebook.com/profile.php?id=61551771230717&mibextid=ZbWKwL"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          <i className="fab fa-facebook fa-2x"></i>
        </a>
        <a
          href="https://linkedin.com/in/farhad-ali-turk-135369305"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a
          href="https://github.com/FarhadAliTurk"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          <i className="fab fa-github fa-2x"></i>
        </a>
        <a
          href="mailto:369farhadali@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          <i className="fas fa-envelope fa-2x"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;