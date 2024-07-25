import React from "react";


class BodyVirginie extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            elapsedTime: 0, 
            running: false, 
        };
        this.timer = null; 
        this.run = false;

     
        
    }


    onClickStart = (e) => {
        console.log('Start');
        if (!this.state.running) {
            this.timer = setInterval(() => {
                this.setState((prevState) => ({
                    elapsedTime: prevState.elapsedTime + 1000,
                }));
            }, 1000);
            this.setState({ running: true });
        }
    }


    onClickPauseAndStop = (e) => {
        console.log('Pause or Stop');
        if (this.state.running) {
            clearInterval(this.timer);
            this.setState({ running: false });
        }
        else {
            //if (this.run == false) {
                this.timer = setInterval(() => {
                    this.setState((prevState) => ({
                        elapsedTime: prevState.elapsedTime + 1000,
                    }));
                }, 1000);
                this.setState({ running: true });
            //}
        }
    }

    onClickStop = (e) => {
        console.log('Pause or Stop');
        if (this.state.running) {
            clearInterval(this.timer);
            this.setState({ running: false });
        }
    }

    // onClickEnd = (e) => {
    //     console.log('Stop');
    //     if (this.state.running) {
    //         clearInterval(this.timer);
    //         this.setState({ running: false });
    //     }
    // }


    onClickRestart = (e) => {
        console.log('Restart');
        clearInterval(this.timer);
        this.setState({ elapsedTime: 0, running: false });
        
        if (!this.state.running) {
            this.timer = setInterval(() => {
                this.setState((prevState) => ({
                    elapsedTime: prevState.elapsedTime + 1000,
                }));
            }, 1000);
            this.setState({ running: true });
        }
        
    }

    formatTime = (milliseconds) => {
        const totalSeconds = Math.floor(milliseconds / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    render() {
        return (

            <main className="my-5">
                <h2>Mon Chronomètre</h2>
                <p className="text-center" >{this.formatTime(this.state.elapsedTime)}</p>
                <div className="d-flex justify-content-around">
                    <button className="btn btn-primary" onClick={this.onClickStart} >Start</button>
                    <button className="btn btn-warning" onClick={this.onClickPauseAndStop} >Pause</button>
                    <button className="btn btn-danger" onClick={this.onClickStop} >Stop</button>
                    <button className="btn btn-success" onClick={this.onClickRestart} >Restart</button>

                </div>
            </main>


        );

    }
}

export default BodyVirginie;