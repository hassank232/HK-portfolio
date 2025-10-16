import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-700 py-2 px-8">
      <div className="flex justify-center items-center space-x-4">
        <p className="text-sm text-white">Copyright © Hassan Khalid</p>
        
        <a 
          href="https://linkedin.com/in/hassankhalid24" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:text-red-500 text-2xl"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        
        <a 
          href="https://github.com/hassank232" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:text-red-500 text-2xl"
        >
          <i className="fab fa-github"></i>
        </a>
        
      </div>
    </footer>
  );
}

export default Footer;