import React from 'react';
import Editor from './Editor';
import { Play, ChevronRight, ChevronLeft, RotateCcw } from 'lucide-react';

export default function LeftPanel(props) {
  const {
    currentStep = 0,
    totalSteps = 0,
    isRunning = false,
    onRun = () => {},
    onStepForward = () => {},
    onStepBackward = () => {},
    onReset = () => {}
  } = props;

  const progress = totalSteps > 0 ? (currentStep / totalSteps) * 100 : 0;
  const canStepBack = currentStep > 0;
  const canStepForward = currentStep < totalSteps;

  return (
    <div className='w-full h-full flex flex-col'>
      {/* Editor Section (takes majority of space) */}
      <div className='flex-1 min-h-0'>
        <Editor/>
      </div>
      
      {/* Controls Section (fixed height) */}
      <div className="border-t border-neutral-200 p-3 bg-white">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <button 
              onClick={onRun}
              disabled={isRunning}
              className="h-8 w-8 p-0 flex items-center justify-center rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
              title="Run"
            >
              <Play className="h-4 w-4" />
            </button>
            <button 
              onClick={onStepBackward}
              disabled={!canStepBack}
              variant="outline"
              className="h-8 w-8 p-0 flex items-center justify-center rounded-full border border-neutral-300 hover:bg-neutral-100 transition-colors"
              title="Step Back"
            >
              <ChevronLeft className={`h-4 w-4 ${canStepBack ? '' : 'text-neutral-400'}`} />
            </button>
            <button 
              onClick={onStepForward}
              disabled={!canStepForward}
              variant="outline"
              className="h-8 w-8 p-0 flex items-center justify-center rounded-full border border-neutral-300 hover:bg-neutral-100 transition-colors"
              title="Step Forward"
            >
              <ChevronRight className={`h-4 w-4 ${canStepForward ? '' : 'text-neutral-400'}`} />
            </button>
            <button 
              onClick={onReset}
              variant="outline"
              className="h-8 w-8 p-0 flex items-center justify-center rounded-full border border-neutral-300 hover:bg-neutral-100 transition-colors"
              title="Reset"
            >
              <RotateCcw className="h-4 w-4" />
            </button>
          </div>
          <div className="flex items-center">
            <span className="text-sm text-neutral-500">
              Step: <span className="font-medium text-neutral-800">{currentStep}/{totalSteps}</span>
            </span>
            <div className="ml-2 w-24 h-1 bg-neutral-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}