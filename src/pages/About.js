import React, { useState } from 'react';

function About() {
    const [activeSection, setActiveSection] = useState('languages');

    // Skills data organized by category
    const skillsData = {
        languages: [
            { name: 'Java', years: "4+", percentage: 80 },
            { name: 'Python', years: 4, percentage: 65 },
            { name: 'JavaScript/TypeScript', years: 3, percentage: 45 },
            { name: 'C', years: 1, percentage: 20 },
            { name: 'Node.js', years: 1, percentage: 20 }
        ],
        frameworks: [
            { name: 'Spring Boot', years: 2, percentage: 35 },
            { name: 'Next.js', years: 1, percentage: 20 },
            { name: 'Svelte/SvelteKit', years: 1, percentage: 20 },
            { name: 'Tailwind CSS', years: 2, percentage: 35 },
            { name: 'React', years: 2, percentage: 35 },
            { name: 'Django', years: 1, percentage: 20 }
        ],
        tools: [
            { name: 'AWS', years: 1, percentage: 20 },
            { name: 'Docker', years: 1, percentage: 20 },
            { name: 'Git/GitHub', years: "4+", percentage: 80 },
            { name: 'MySQL', years: 3, percentage: 45 },
            { name: 'PostgreSQL', years: 2, percentage: 35 },
            { name: 'Supabase', years: 1, percentage: 20 }
        ]
    };

    return (

        <div className="min-h-full">
            <div className="container mx-auto px-4 md:px-8 py-6">
                <h1 className="text-4xl font-bold text-white text-center mb-4">
                    About Me
                </h1>
                
                {/* About Me Statement */}
                <div className="max-w-3xl mx-auto mb-7">
                    <p className="text-lg text-gray-300 leading-relaxed">
                    I'm an ambitious Software Engineer, with
                    hands-on experience in full-stack development, agile methodologies, and software design
                    principles. Strong foundation in data structures, algorithms, and object-oriented programming,
                    combined with practical experience in collaborative development using industry-standard
                    DevOps tools and version control systems.
                    </p>
                </div>
                
              {/* Skills Section */}
              <div className="max-w-4xl mx-auto">
                    
                    {/* Navigation Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mb-8">
                        <button 
                            onClick={() => setActiveSection('languages')}
                            className={`px-4 sm:px-6 py-3 rounded-lg font-semibold text-sm sm:text-base ${
                                activeSection === 'languages' 
                                ? 'bg-blue-500 text-white shadow-lg transform scale-105' 
                                : 'bg-white/20 text-gray-300 hover:bg-white/30 hover:text-white'
                            }`}
                        >
                            Languages
                        </button>
                        
                        <button 
                            onClick={() => setActiveSection('frameworks')}
                            className={`px-4 sm:px-6 py-3 rounded-lg font-semibold text-sm sm:text-base ${
                                activeSection === 'frameworks' 
                                ? 'bg-red-700 text-white shadow-lg transform scale-105' 
                                : 'bg-white/20 text-gray-300 hover:bg-white/30 hover:text-white'
                            }`}
                        >
                            Frameworks
                        </button>
                        
                        <button 
                            onClick={() => setActiveSection('tools')}
                            className={`px-4 sm:px-6 py-3 rounded-lg font-semibold text-sm sm:text-base ${
                                activeSection === 'tools' 
                                ? 'bg-green-600 text-white shadow-lg transform scale-105' 
                                : 'bg-white/20 text-gray-300 hover:bg-white/30 hover:text-white'
                            }`}
                        >
                            Tools & Databases
                        </button>
                    </div>

                    {/* Skills Grid - shows different content based on activeSection */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {skillsData[activeSection].map((skill, index) => (
                            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-5">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-xl font-semibold text-white">{skill.name}</span>
                                    <span className="text-sm text-gray-300">{skill.years} years</span>
                                </div>
                                <div className="w-full bg-gray-800 rounded-full h-3">
                                    <div className="bg-blue-500 h-3 rounded-full" 
                                         style={{ width: `${skill.percentage}%` }}>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;