import React from "react"


class MonForm01 extends React.Component {
    constructor(props) {
        super(props)
        //J'initialise un attribut state.nom avec la valeur DIGI
        this.state = {nom : '', prenom : '', age:0}
    }


    /**
     * 
     *  onChgNom = (e)=>this.setState({nom:e.target.value})
  
    onChgPrenom = (e)=>this.setState({prenom:e.target.value})

    onChgAge = (e)=>this.setState({age:e.target.value})
     * 
     * @param {*} e 
     * @returns 
     */

   

    onSubForm01 = (e)=>{e.preventDefault();alert(this.state.nom + this.state.prenom + this.state.age)}
    
    onChgForm01 = (change)=>{
        const target  = change.target //Le contenu de la balise parente
        const value = target.type === 'checkbox'? target.checked : target.value
        const name = target.name
        this.setState({[name] : value})
    }

    /**
     * 
     * @returns Submit refait tout le téléchargement
     * onChange : binding
     */
    render() {
        /**
             * OnSubmit  : Je bloque le submit et j'affiche la valeur du state.nom
             * OnChange : JE fais un lien bilatéral avec le state.nom avec value et on change : il faut connaîte html et js
             * Je peux mettre des controles sur les balises au noveau pattern (regex), min, max des valeurs par défaut
             */
        
        
        return (
        
            
            <form onSubmit={this.onSubForm01}>
                <label htmlFor="nom">Nom</label>
            
                <input type="text" value={this.state.nom} name = "nom" required 
                    onChange={this.onChgForm01}
                    />
                <br/>
                <label htmlFor="prenom">Prenom</label>
                <input type="text" value={this.state.prenom} name = "prenom" required
                    onChange={this.onChgForm01}
                    />
                <br/>
                <label htmlFor="age">Age</label>
                <input type="number" value={this.state.age} name = "age" min = '18' max = '65'
                    onChange={this.onChgForm01}
                    />
                <br/>
			    <input type="submit" value="Validation" />
		    </form>

        
        )
    }       
  }
  export default MonForm01