import React from 'react';

const Experience = () => {
  return (
    <div className="min-h-full">
      <div className="container mx-auto px-8 py-6">
        
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Experience</h1>
          <p className="text-gray-300 text-lg">Building expertise through continuous learning and development</p>
        </div>

        {/* Experience Cards - Horizontal Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Independent Software Development Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-xl border border-white/20 hover:bg-white/15 hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="mb-3">
              <h2 className="text-lg font-bold text-white mb-1">Software Developer</h2>
              <h3 className="text-md text-blue-300 font-semibold">Current Independent Project</h3>
            </div>
            
            <div className="text-gray-300 space-y-2 text-base">
              <div className="flex items-start">
                <span className="text-red-500 mr-2 mt-1 text-lg">•</span>
                <p>Developing RAG chatbot with LangChain and OpenAI API processing 50+ documents using ChromaDB vector database for semantic search reducing hallucinations by 80% through document embeddings and re-ranking algorithms</p>
              </div>
              <div className="flex items-start">
                <span className="text-red-500 mr-2 mt-1 text-lg">•</span>
                <p>Engineering full-stack application with React and FastAPI enabling real-time streaming responses with conversation memory and dynamic document upload</p>
              </div>
            </div>
          </div>

          {/* CodePath Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-xl border border-white/20 hover:bg-white/15 hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="mb-4">
              <h2 className="text-lg font-bold text-white mb-1">CodePath</h2>
              <h3 className="text-md text-blue-300 font-semibold">(partnered with Microsoft, Amazon, Google)</h3>
              <p className="text-gray-400 text-xs mt-1">Software Engineering Prep • Remote</p>
            </div>
            
            <div className="text-gray-300 space-y-2 text-base">
              <div className="flex items-start">
                <span className="text-red-500 mr-2 mt-1 text-lg">•</span>
                <p>Solved 30+ challenging data structure and algorithm problems in Python through collaboration with industry mentors and peers, covering trees, graphs, recursion, and dynamic programming.</p>
              </div>
              <div className="flex items-start">
                <span className="text-red-500 mr-2 mt-1 text-lg">•</span>
                <p>Applied problem-solving patterns including sliding window, two pointers, binary search, and graph traversal to optimize algorithmic efficiency.</p>
              </div>
              <div className="flex items-start">
                <span className="text-red-500 mr-2 mt-1 text-lg">•</span>
                <p>Refined technical communication and problem-solving speed through participation in 5+ mock interviews.</p>
              </div>
            </div>
          </div>

          {/* Future Experience Placeholder Card */}
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 shadow-xl border border-white/10 border-dashed hover:bg-white/10 transition-all duration-300">
            <div className="text-center h-full flex flex-col justify-center">
              <h2 className="text-lg font-bold text-gray-400 mb-2">Next Chapter</h2>
              <p className="text-gray-500 text-sm mb-4">Ready for new opportunities and challenges</p>
              <div>
                <span className="bg-gray-600/20 text-gray-400 px-3 py-1 rounded-full text-xs">
                  Coming Soon
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Experience;