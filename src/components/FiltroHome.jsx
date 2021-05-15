import React, { Component } from 'react'
import { lista } from '../assets/lista'
import '../styles/home.css'
import 'font-awesome/css/font-awesome.min.css';

export default class FiltroHome extends Component {
    state = {
        txtBuscador: '',
        newList : []
        
    }
      

    onSubmit = e => {
        this.filtrarData();
        e.preventDefault();
    }
    onChangeTxtFiltroHome = e => {
        console.log(e.target.name, e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    filtrarData() {
    let task_names = lista.filter(x => x.city.toUpperCase() == this.state.txtBuscador.toUpperCase());
  

   if (this.state.txtBuscador.trim()===''){
    this.state.newList=lista;
   }else{
    this.state.newList=task_names;
   }

   this.props.dataNew(this.state.newList);

    }

    render = () => {

        return (
            <form className="contenedor_buscador_home" onSubmit={this.onSubmit}>


                <div className="contenedor_logo"><i className='fa fa-caret-up'></i>
                <strong >windbnb</strong>
                </div>

                <div className="contenedor_buscador">

                    <div className="contenedor_panel_buscador">

                        <div className="ciudad_resultado_filtro"> <span>{this.state.newList.length>0 && this.state.txtBuscador.trim()!==''? this.state.newList[0].city:''},
                        {this.state.newList.length>0 && this.state.txtBuscador.trim()!==''? this.state.newList[0].country:''}</span><div className="linea_buscador"></div></div>
                        <div className="select_texto_buscar1"><input name="txtBuscador" className="txtBuscar" type="text" placeholder="ingrese la ciudad" onChange={this.onChangeTxtFiltroHome} value={this.state.txtBuscador}  ></input></div>
                        <div className="select_button_buscar1"><button type="submit" className="searchButton"><i className="fa fa-search"></i> </button></div>

                    </div>
                </div>


            </form>

        )
    }


}


