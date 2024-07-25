import React from "react";

export default class MonForm02 extends React.Component {


    constructor(props) {
        super(props)
        // this.inputNom = React.createRef() //Pointeur sur un élément du DOM
    
    
    }

    onSubmitForm2 = (e)=>{
        e.preventDefault()
        //console.log(this.inputNom)
        console.log(this.monForm.current.nom.value)
    }

    render() {

        /**
         * Pour les éléments on appel un callback
         * en js on passe les noms des méthodes ou des fonctions sans parenthèses
         * pour éviter que le navigateur (Javascript) soit exécuté immédiatement
         */
        return(
            <form onSubmit={(e)=>e.preventDefault()}>
                <input type='text' name='nom' ref={this.inputNom} />
                <button type="submit">Valider</button>
            </form>


        )
    }
}