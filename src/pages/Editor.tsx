import React from 'react'
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor'
import { EditorData } from '../data/dummy'
import { Header } from '../components'

const Editor = () => {  
  return (
    <div className='m-2 md:m-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header title='Editor' category='App' />
      <RichTextEditorComponent
      >
        <EditorData/>
        <Inject services={[Image, Link, Toolbar, HtmlEditor, QuickToolbar]}/>
      </RichTextEditorComponent>
    </div>
  )
}

export default Editor