import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


export default function Footer() {
  return (
    <div style={{ position: 'fixed', bottom: 0, left: 0, width: '100%' }}>
    <footer className="footer bg-dark text-light">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center tc-white">
            <p></p>
            <p>&copy; 2024 GameStop. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}