import Affiche from "./Affiche";
import Body from "./Body";
import BodyVirginie from "./BodyVirginie";
import MainBody from "./BodyKieran";
import MonForm01 from "./MonForm01";
import MonForm02 from "./MonForm02";
import MonComp04 from "./MonComp04";
import MonForm03 from "./MonForm03";

function Comp01(props) {
  return(<h1>{props.message}</h1>)
}

function App() {
  let onCallBack = (e) =>{console.log("App")}
  
  /*
  *
  */
  
  
  
  return (
    
   
   
   
   <div>
          <MonForm03 />
          <Comp01 message='Form de saisie V1'/>
          <MonForm01 />
          <MonForm02 />
          
          <MonComp04 />      
      </div>
  );
}

export default App;
