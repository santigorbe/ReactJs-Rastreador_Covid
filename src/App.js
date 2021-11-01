import React, {useState, useEffect} from 'react'; 
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Paises from './components/Paises'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Cards from './components/Cards';
import Graficos from './components/Graficos';

const App = () =>{

  const [pais,setPais] = useState("");
  const [data, setData] = useState({});

  useEffect(() =>{
      const cargarDatos = async () =>{
      const apiData = await fetchDatos(pais);
      setData(apiData)
    }
    cargarDatos();
  },[pais])

  const paisForm = async (pais) =>{
    setPais(pais);
  }

const fetchDatos = async (pais) =>{
  let url = "";
  if(pais === '' || pais  === 'World'){
    url ="https://covid19.mathdro.id/api"; 
  }else{
    url = `http://covid19.mathdro.id/api/countries/${pais}`;
  }

  try{
    const data = await axios.get(url);
    return data;
  }catch(err){
    console.log(err);
  }
}

  return(
    <div>
      <NavBar/>
      <Container fluid>
        <Row>
              <Col xl={2}>
                  <Paises paisForm={paisForm}/>
              </Col>
              <Col xl={8}>
                  <Graficos data={data} pais={pais}/>
              </Col>
              <Col xl={2}>
                <Cards data={data}/>
              </Col>
        </Row>
      </Container>
      
    </div>
  )
}

export default App;
