import React from "react"


class Body extends React.Component {
    constructor(props) {
        super(props)
        this.state= {time2:new Date()}
        //this.state = {second:new TimeRanges()}

    }

  /**
   * 
   * @param {*} e 
   */

    onPause = (e)=>{console.log("OnPause")}
    onStop = (e)=>{console.log("OnStop")}
    onStart= (e)=>{console.log("OnStart")}
    onReStart= (e)=>{console.log("OnReStart")}


    /**
     * 
     * @returns Submit refait tout le téléchargement
     */
    render()
    {
    return (

        <div>
            <h1>{this.props.message}</h1>

    

            <button onClick={this.onStop}>Stop</button>
            <br/>
            <button onClick={this.onStart}>Start</button>
            <br/>
            <button onClick={this.onPause}>Pause</button>
            <br/>
            <button onClick={this.onReStart}>Restart</button> 
        </div>

        
        )
    }       
  }

  export default Body