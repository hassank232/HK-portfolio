//import React, { useState } from 'react'; // useState for model control

function Home() {
    //showResume = true/false, setShowResume(true) = opens modal, setShowResume(false) = closes modal
    //const [showResume, setShowResume] = useState(false);
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center px-4 lg:px-0 pt-10 lg:pt-0">
      {/* Text Section */}
      <div className="w-full lg:w-1/2 lg:pl-24 text-center lg:text-left mt-8 lg:mt-0">
        <div><span className="inline-block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white hover:text-blue-500 hover:scale-110 transition-transform duration-300">Hi</span></div>
        <div><span className="inline-block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white hover:text-red-500 hover:scale-110 transition-transform duration-300">I'm Hassan,</span></div>
        <div><span className="inline-block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white hover:text-green-600 hover:scale-110 transition-transform duration-300">software engineer.</span></div>
        <p className="text-sm md:text-base text-gray-500">Computer science, 2024 at UW-Milwaukee</p>

        <button 
            className="border-2 border-x-red-500 border-y-red-500 text-white bg-transparent px-3 py-2 rounded hover:bg-white hover:text-black mt-3 transition-colors duration-300"
            onClick={() => window.open('/HKsResume.pdf', '_blank')}
        >Resume</button>
    </div>  


    {/* INSERT: animation, gif, or something here */}
    <div className="w-full lg:w-1/2 flex items-center justify-center mt-8 lg:-ml-28 lg:-mt-36">
        <div className="w-32 h-32 sm:w-52 sm:h-52 md:w-52 md:h-52 bg-black rounded-full flex items-center justify-center border-4 border-x-blue-700 border-y-blue-700 shadow-lg">
          <span className="text-white font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wider">HK</span>
        </div>
    </div>
    </div>
  );
}
    

//     {showResume && ( // only shows model when true (clicked on)
//     // line1 - dark overlay background
//     // line2 - white content box, onClick={(e) => e.stopPropagation()} = clicking inside doesn't close modal
//     // line3 - close button x
//     // line4 - resume image jpg
//         <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={() => setShowResume(false)}>
//             <div className="bg-white p-4 rounded-lg w-full max-w-4xl max-h-screen overflow-auto" onClick={(e) => e.stopPropagation()}>
//                 <button className="float-right text-xl font-bold mb-2 hover:text-red-500" onClick={() => setShowResume(false)}>×</button>
//                 <img src="/assets/HksResume.jpg" alt="Resume" className="w-full max-w-3xl mx-auto" />
//             </div>
//         </div>
//     )}
//     </div>
//   );
// }

export default Home;