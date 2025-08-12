
const Experience = () => {
  return (
    <section id="experience" className="min-h-screen px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12">Work Experience</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Company logo sidebar */}
          <div className="space-y-6">
            <div className="bg-gray-700 rounded-2xl w-16 h-16 flex items-center justify-center text-white font-bold text-xl">
              [Logo]
            </div>
          </div>

          {/* Experience details */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-white mb-2">[Company Name]</h3>
                <h4 className="text-xl text-blue-400 font-semibold mb-4">[Job Title]</h4>
              </div>
              
              <div className="flex items-center gap-4 text-gray-400 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
                  <span>[Start Date] - [End Date]</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
                  <span>[Location]</span>
                </div>
              </div>

              <p className="text-gray-300 mb-8">
                [Brief description of your role and key accomplishments. Highlight specific technologies used and impact made.]
              </p>

              <div>
                <h5 className="text-white font-semibold mb-4">Skills & Technologies</h5>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-700 text-gray-300 px-4 py-2 rounded-full text-sm">[Skill 1]</span>
                  <span className="bg-gray-700 text-gray-300 px-4 py-2 rounded-full text-sm">[Skill 2]</span>
                  <span className="bg-gray-700 text-gray-300 px-4 py-2 rounded-full text-sm">[Skill 3]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
