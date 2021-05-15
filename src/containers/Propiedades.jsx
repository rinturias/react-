import React, { Component } from 'react'
import Home from '../components/Home'
import FiltroHome  from'../components/FiltroHome'
import '../styles/main.css'
import { lista } from '../assets/lista'



export default class Propiedades extends Component{

state={
    filtradoList:[]
}

filtrarDatoDeFormularioHome=(newLista)=>{
this.setState({
    filtradoList:newLista
});
    
console.log(this.state.filtradoList)
 }



 render =() => {

    return (
        <div className="contenedor">
            <FiltroHome dataNew={this.filtrarDatoDeFormularioHome}></FiltroHome>
            <br></br>
            <Home title={"Casas en Bolivia"} data={this.state.filtradoList} />
        </div>
    );
   }
}

// export default Propiedades
