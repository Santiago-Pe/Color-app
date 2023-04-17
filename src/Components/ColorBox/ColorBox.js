import React, {Component} from "react";
import "./ColorBox.css"
import CopyToClipboard from "react-copy-to-clipboard";

/*
Aca visualizo cada Caja de Color. 

*/

export default class ColorBox extends Component{
    constructor(props){
        super(props);
        /* ---------- States ---------- */
        this.state = { copied: false}

        /* ---------- Binding Functions ---------- */
        this.changeCopyState = this.changeCopyState.bind(this)
    }

    /* ---------- Functions ---------- */
    changeCopyState ()  {
        this.setState({copied: true});
        setTimeout(() => {
            this.setState({copied: false})
        }, 1500)
        console.log("copiado")
    }
    /* ---------- Render ---------- */
    render() {
        const {name, background} = this.props
        const {copied} = this.state
        return(
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>  
                <div className="ColorBox" style={{background: background}}>
                    <div className={`copy-overlay ${copied && "show"}`} style={{background: background}}>
                    </div>
                    <div className={`copy-msg ${copied && "show"}`}>
                        <h1>Copied !</h1>
                        <p>{background}</p>
                    </div>
                    <div className="copy-container">
                        <div className="box-content">
                            <span>{name}</span>
                        </div>
                    
                            <button className="copy-button">Copy</button>
                        
                    </div>
                    <span className="see-more">More</span>
                </div>
            </CopyToClipboard>
        )
    }
}