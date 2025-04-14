import React from "react";
import {jsSampleCode} from "../utils/sampleCode"
import useResizable from "../hooks/useResizable";
import LeftPanel from "../components/LeftPanel";
import RightPanel from "../components/RightPanel";
import AppHeader from "../components/AppHeader";

export default function Home() {
    const [language, setLanguage] = React.useState('javascript');
    const [code, setCode] = React.useState(jsSampleCode);
    const { leftPanelRef, resizerRef, leftPanelWidth, isDragging } = useResizable();

    return (
        <div className="h-screen w-full flex flex-col bg-gray-50 text-neutral-700">
          <AppHeader 
            language={language} 
            onLanguageChange={setLanguage} 
          />
          
          <div className="flex-1 flex overflow-hidden">
            <div 
              ref={leftPanelRef}
              className="flex flex-col border-r border-neutral-200 min-w-1/2"
              style={{ width: leftPanelWidth }}
            >
              <LeftPanel 
                code={code}
                onCodeChange={setCode}
                language={language}
                
              />
            </div>
            
            <div 
              ref={resizerRef}
              className={`w-1 cursor-col-resize hover:bg-primary ${isDragging ? 'bg-primary' : 'bg-neutral-200'}`}
            />
            
            <RightPanel 
             
            />
          </div>
        </div>
      );
}