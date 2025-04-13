


export default function AppHeader({ language, onLanguageChange }) {
  return (
    <header className="bg-white border-b border-neutral-200 py-2 px-4 flex items-center justify-between">
      <div className="flex items-center">
        <h1 className="text-xl font-semibold text-primary flex items-center">
          <i className="ri-flow-chart text-xl mr-2"></i>
          Code Flow Visualizer
        </h1>
        <div className="ml-8 flex space-x-1">
          <button 
            className="px-3 py-1 text-sm rounded-md bg-primary text-white font-medium hover:bg-secondary transition-colors"
            onClick={() => {
              // Reset project functionality
            }}
          >
            New Project
          </button>
          <button 
            variant="outline" 
            className="px-3 py-1 text-sm rounded-md border border-neutral-300 hover:bg-neutral-100 transition-colors"
          >
            Examples
          </button>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <div className="border border-neutral-300 rounded-md overflow-hidden flex">
          <button 
            variant={language === "javascript" ? "default" : "ghost"}
            className={`px-3 py-1 text-sm rounded-none ${language === "javascript" ? "bg-primary text-white font-medium" : "bg-white hover:bg-neutral-100"}`}
            onClick={() => onLanguageChange("javascript")}
          >
            JavaScript
          </button>
          <button 
            variant={language === "python" ? "default" : "ghost"}
            className={`px-3 py-1 text-sm rounded-none ${language === "python" ? "bg-primary text-white font-medium" : "bg-white hover:bg-neutral-100"}`}
            onClick={() => onLanguageChange("python")}
          >
            Python
          </button>
        </div>
        <button variant="ghost" className="p-1 rounded-md hover:bg-neutral-100">
          <i className="ri-settings-3-line text-lg"></i>
        </button>
        <button variant="ghost" className="p-1 rounded-md hover:bg-neutral-100">
          <i className="ri-question-line text-lg"></i>
        </button>
      </div>
    </header>
  );
}
