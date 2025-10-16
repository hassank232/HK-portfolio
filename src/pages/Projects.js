import React from 'react';

const Projects = () => {
  // Step 1: Data Structure - Array of project objects
  const projects = [
    {
      id: 1,
      title: "Ora-cloud Storage", 
      techStack: "AWS, Spring Boot, PostgreSQL, React",
      link: "https://github.com/hassank232/ora-cloudStorage", 
    },
    {
      id: 2,
      title: "Serverless URL Shortener", 
      techStack: "Next.js, TypeScript, AWS, Node.js",
      link: "https://github.com/your-username/projectname", 
    },
    {
      id: 3,
      title: "Nitin-Collaborative Study Platform ",
      techStack: "JavaScript, Svelte/SvelteKit, Tailwind CSS, Docker, Supabase",
      link: "https://github.com/hassank232/nitin-collaborativeStudyPlatform", 
    },
    {
      id: 4,
      title: "Zyemlja-TA Scheduler", 
      techStack: "Python, Django, HTML, CSS",
      link: "https://github.com/hassank232/zyemlja-TA-scheduler", 
    }
  ];

  // Step 2: Handle click function - opens link in new tab
  const handleProjectClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div className="min-h-full">
      <div className="container mx-auto px-8 py-6">
        
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Projects</h1>
          <p className="text-gray-300 text-lg">A showcase of my coding applications with demo video + live link in github</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Step 3: Array Mapping - Transform project data into JSX */}
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-xl border border-white/20"
            >
              {/* Project Title */}
              <h3 className="text-lg font-bold text-white mb-1">
                {project.title}
              </h3>
              
              {/* Tech Stack */}
              <p className="text-gray-400 text-sm mb-4">
                {project.techStack}
              </p>

              {/* View Button */}
              <div className="text-right">
                <button
                  onClick={() => handleProjectClick(project.link)}
                  className="border-2 border-x-red-500 border-y-red-500 text-white bg-transparent px-3 py-1 rounded hover:bg-white hover:text-black transition-colors"
                >
                  View
                </button>
              </div>
            </div>
          ))}

          {/* Empty card for future project */}
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 shadow-xl border border-white/10 border-dashed">
            <div className="text-center h-full flex flex-col justify-center">
              <h2 className="text-lg font-bold text-gray-400 mb-2">Next Project = Ai</h2>
              <p className="text-gray-500 text-sm mb-4">Coming Soon</p>
              <div>
                <span className="bg-gray-600/20 text-gray-400 px-3 py-1 rounded-full text-xs">
                  In Development
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;