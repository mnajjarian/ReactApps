import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class App extends React.Component {
    render() {
        return(
            <div className='container' id='drum-machine'>
                <div className='row'>
                    <input className='drum-pad' type='button' value='Q'/>
                    <input className='drum-pad' type='button' value='W'/>
                    <input className='drum-pad' type='button' value='E'/>
                </div>
                <div className='row'>
                    <input className='drum-pad' type='button' value='A'/>
                    <input className='drum-pad' type='button' value='S'/>
                    <input className='drum-pad' type='button' value='D'/>
                </div>
                <div className='row'>
                    <input className='drum-pad' type='button' value='Z'/>
                    <input className='drum-pad' type='button' value='X'/>
                    <input className='drum-pad' type='button' value='C'/>
                </div>
                
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))