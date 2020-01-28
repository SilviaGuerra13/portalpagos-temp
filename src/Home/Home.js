import React from 'react'
import { Row, Col, Card } from 'antd'
import Searchbar from '../Common/Searchbar/Searchbar'
import CardItem from './CardItem/CardItem'
import travels from '../Assets/img/01.png'
import sports from '../Assets/img/02.png'
import schools from '../Assets/img/03.png'
import dealership from '../Assets/img/04.png'
import residency from '../Assets/img/05.png'
import commission from '../Assets/img/06.png'
import hotels from '../Assets/img/07.png'
import notaries from '../Assets/img/08.png'
import industries from '../Assets/img/09.png'
import medicine from '../Assets/img/10.png'
import publicService from '../Assets/img/11.png'
import otherComercies from '../Assets/img/12.png'
// import homeimg from "../Assets/img/background.png";

import './styles.less'

const Home = () => {
  return (
    <div>
      <div className="home__image">
        <Row>
          <Col sm={12} md={12} lg={10} xl={12} offset={3}>
            <h3>Busca el comercio en donde quieras hacer un pago</h3>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={12} lg={10} xl={12} offset={3}>
            <Searchbar />
          </Col>
        </Row>
      </div>
      <div className="home__cards">
        <Row>
          <Col sm={12} md={12} lg={10} xl={12} offset={3}>
            <h3>Has buscado antes</h3>
          </Col>
          <Col sm={12} md={12} lg={10} xl={12} offset={3}>
            <Card>hola card</Card>
          </Col>
        </Row>
      </div>
      <div className="home__cards">
        <Row>
          <Col sm={12} md={12} lg={10} xl={12} offset={3}>
            <h3>Categorías de comercios</h3>
          </Col>
        </Row>
        <Row className="home__cards-padding">
          <CardItem title="Agencia de viajes" img={travels} />
          <CardItem title="Club social y Deportivo" img={sports} />
          <CardItem title="Colegios e instituciones educativas" img={schools} />
          <CardItem title="Concesionarios" img={dealership} />
        </Row>
        <Row className="home__cards-padding">
          <CardItem title="Conjuntos residenciales" img={residency} />
          <CardItem title="Fiduciarias y comisionistas" img={commission} />
          <CardItem title="Hoteles e inmobiliarias" img={hotels} />
          <CardItem title="Impuestos, servicios, notarías" img={notaries} />
        </Row>
        <Row className="home__cards-padding">
          <CardItem title="Industrias y constructoras" img={industries} />
          <CardItem title="Salud y medicina prepagada" img={medicine} />
          <CardItem title="Servicios públicos" img={publicService} />
          <CardItem title="Otros comercios..." img={otherComercies} />
        </Row>
      </div>
    </div>
  )
}

export default Home
