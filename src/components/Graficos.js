import React,{useState,useEffect} from 'react';
import { Line, Doughnut } from 'react-chartjs-2';
import axios from 'axios';


const Graficos = ({ data, pais}) =>{
    const [datosDiarios, setDatosDiarios] = useState({});
    
    useEffect(() =>{
        const cargarDatos = async () =>{
            const data = await cargarDatosDiarios();
            setDatosDiarios(data);
        }
        cargarDatos();
    });

    
    const cargarDatosDiarios = async () => {
        try{
            const datos = await axios('http://covid19.mathdro.id/api/daily',{method:'GET',headers:{'Content-type': 'application/json'}});
            datos.json();
            setDatosDiarios(datos);
        }
        catch(e){
            console.log(e)
        }
    }

    let chart;

 if(data.data){
        chart = (
            <Doughnut
            data = {{
                labels:['Infectados', 'Muertos'],
                datasets:[{
                    label:'Gente',
                    backgroundColor:[
                        'cornflowerblue',
                        'red'
                    ],
                    data:[data.data.confirmed.value,
                             data.data.deaths.value]
                }]
            }}
            options={{
                legend: {
                    display: true,
                    fontColor:'white'
                },
                title:{
                    display:true,
                    text: `Coronavirus en ${pais}`,
                    fontColor: 'black'
                }
            }}
            
            />
        )
        }

    if(!data.data){
        return 'Cargando..'
    }else{
        return(
            <div>
                {chart}
            </div>
        )
    }

}

export default Graficos;