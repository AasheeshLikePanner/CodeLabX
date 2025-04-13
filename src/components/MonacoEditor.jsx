import React from 'react'
import { Editor } from '@monaco-editor/react'
import { jsSampleCode } from '../utils/sampleCode';

export default function MonacoEditor() {
  const defaultLanguage = 'javascript';


  return (
    <div className='w-full h-full justify-center items-center flex'>
      <Editor
        height="90vh" defaultLanguage={defaultLanguage} language={defaultLanguage} defaultValue={jsSampleCode} 
      />
    </div>
  )
}