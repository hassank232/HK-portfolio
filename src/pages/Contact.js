import React from 'react';

export default function Contact() {
  return (
    <div className="min-h-full">
      <div className="container mx-auto px-8 py-6">
        
        {/* Title */}
        <h1 className="text-4xl font-bold text-white text-center mb-4">
          Contact Me
        </h1>

        {/* Welcome Message */}
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-base text-gray-300 text-center">
            Thank you for your interest in getting in touch with me! 
          </p>
          <p className="text-base text-gray-300 text-center">
            I typically respond within 24 hours. Choose your preferred method below to reach out directly.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="max-w-2xl mx-auto">
          <div className="space-y-6">
            
            {/* Email Contact */}
            <a 
              href="mailto:hassank2413@gmail.com?subject=Let's%20Connect&body=Hi%20Hassan,%0D%0A%0D%0AI'd%20like%20to%20discuss..."
              className="block w-full p-8 bg-gray-800 border border-gray-600 rounded-lg hover:bg-gray-700 hover:border-blue-500 transition-all duration-200 group"
            >
              <div className="flex items-center space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 text-blue-400 group-hover:text-blue-300 text-3xl flex items-center justify-center">
                    <i className="fas fa-envelope"></i>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white group-hover:text-blue-300 mb-2">Send me an email</h3>
                  <p className="text-gray-400 text-lg mb-2">hassank2413@gmail.com</p>
                  <p className="text-gray-500">Click to open your email</p>
                </div>
              </div>
            </a>

            {/* LinkedIn Contact */}
            <a 
              href="https://linkedin.com/in/hassankhalid24" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full p-8 bg-gray-800 border border-gray-600 rounded-lg hover:bg-gray-700 hover:border-blue-500 transition-all duration-200 group"
            >
              <div className="flex items-center space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 text-blue-400 group-hover:text-blue-300 text-3xl flex items-center justify-center">
                    <i className="fab fa-linkedin"></i>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white group-hover:text-blue-300 mb-2">Connect on LinkedIn</h3>
                  <p className="text-gray-400 text-lg mb-2">Professional networking</p>
                  <p className="text-gray-500">Let's connect and discuss opportunities</p>
                </div>
              </div>
            </a>

          </div>
        </div>

      </div>
    </div>
  );
}