export default function AppHeader({ language, onLanguageChange }) {
  return (
    <header className="bg-white border-b border-neutral-100 py-3 px-6 flex items-center justify-between shadow-sm">
      <div className="flex items-center space-x-8">
        <h1 className="text-xl font-semibold text-black flex items-center">
          <i className="ri-flow-chart text-2xl mr-2 text-primary"></i>
          <span className="bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
            CodelabX
          </span>
        </h1>
        <div className="flex space-x-2">
          <button 
            className="px-4 py-1.5 text-sm rounded-lg bg-black text-white font-medium hover:bg-gray-800 transition-all duration-200 shadow-sm hover:shadow-md"
            onClick={() => {
            }}
          >
            New Project
          </button>
          <button 
            className="px-4 py-1.5 text-sm rounded-lg border border-gray-200 hover:bg-gray-50 transition-all duration-200 font-medium text-gray-700 shadow-sm"
          >
            Examples
          </button>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="border border-gray-200 rounded-lg overflow-hidden flex bg-gray-50 shadow-inner">
          <button 
            className={`px-4 py-1.5 text-sm transition-all duration-200 ${language === "javascript" ? "bg-black text-white font-medium" : "bg-white text-gray-600 hover:bg-gray-100"}`}
            onClick={() => onLanguageChange("javascript")}
          >
            JavaScript
          </button>
          <button 
            className={`px-4 py-1.5 text-sm transition-all duration-200 ${language === "python" ? "bg-black text-white font-medium" : "bg-white text-gray-600 hover:bg-gray-100"}`}
            onClick={() => onLanguageChange("python")}
          >
            Python
          </button>
        </div>
        <button className="p-2 rounded-lg hover:bg-gray-100 transition-all duration-200 text-gray-600 hover:text-gray-900">
          <i className="ri-settings-3-line text-lg"></i>
        </button>
        <button className="p-2 rounded-lg hover:bg-gray-100 transition-all duration-200 text-gray-600 hover:text-gray-900">
          <i className="ri-user-3-line text-lg"></i>
        </button>
      </div>
    </header>
  );
}