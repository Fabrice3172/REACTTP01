import React from "react"


class Affiche extends React.Component {
    constructor(props) {
        super(props)
        this.state= {date:new Date()}

    }

    /**
     * On monte apres constructeur
     */
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),1000
        )
    }

    /**
     * Lorsque appel du à un evenement lorsque je demonte le composant
     * Appelé avant la méthode suivante :
     */
    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        
        this.setState(
            {date:new Date()}
        )
    }

   

    render()
    {
    return (
        <div>
            <h1>{this.props.message}</h1>
            <h2> Heure : 
            {this.state.date.toLocaleTimeString()}.
            <br/>
                Date :
            {this.state.date.toLocaleDateString()}.
            </h2>
        </div>
        )
    }       
  }

  export default Affiche