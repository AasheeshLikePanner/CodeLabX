import React from 'react'
import { Editor as MonacoEditor} from '@monaco-editor/react'
import { jsSampleCode } from '../utils/sampleCode';

export default function Editor() {
  const defaultLanguage = 'javascript';


  return (
    <div className='w-full h-full justify-center items-center flex'>
      <MonacoEditor
         defaultLanguage={defaultLanguage} language={defaultLanguage} defaultValue={jsSampleCode} 
      />
    </div>
  )
}