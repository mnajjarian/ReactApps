import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import marked from 'marked'

const placeholder = 
`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`
marked.setOptions({
    breaks: true,
})

class MarkdownPreviewer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: placeholder
        }
    }
    handleChange = () => {
        this.setState({
            text: event.target.value
        })
    }
    render() {
        function createMarkup(text) {
            return {__html: marked(text)};
          }
        return(
            <div>
                <div className='row row-content'>
                    <div className='col-12 col-md-6 offset-3 editor'>
                        <label>Editor</label>
                        <textarea
                            id="editor"
                            rows='10'
                            cols='50'
                            value={this.state.text}
                            onChange={this.handleChange}>
                        </textarea>
                    </div>
                </div>
                <div className='row row-content'>
                    <div className='col-12 col-md-10 offset-1'>
                    <label>Preview</label>
                        <div className='preview' id='preview' dangerouslySetInnerHTML={createMarkup(this.state.text) } />
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<MarkdownPreviewer />, document.getElementById('root'))