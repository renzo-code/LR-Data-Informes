import styled from 'styled-components'

const Footer = () => {
  return(
    <ContainerFooter>
      <BlockViews>
        <WrapperText>
          <Redirect href="https://larepublica.pe/ultimas-noticias/">
            Últimas noticias
          </Redirect>
          <Redirect href="https://larepublica.pe/mundo/">
            Mundo
          </Redirect>
          <Redirect href="https://larepublica.pe/mundo/mexico/">
            México
          </Redirect>
          <Redirect href="https://larepublica.pe/economia/precio-del-dolar/2021/06/17/tipo-de-cambio-cotizacion-del-dolar-este-jueves-17-de-junio-del-2021-atmp/">
            Dólar en Perú
          </Redirect>
        </WrapperText>

        <WrapperText>
          <Redirect href="https://larepublica.pe/politica/">
            Política
          </Redirect>
          <Redirect href="https://larepublica.pe/tendencias/">
            Tendencias
          </Redirect>
          <Redirect href="https://larepublica.pe/mundo/venezuela/">
            Venezuela
          </Redirect>
          <Redirect href="https://larepublica.pe/mundo/venezuela/2021/06/17/dolartoday-precio-del-dolar-este-jueves-17-de-junio-del-2021-en-venezuela-mdga/">
            Dolartoday
          </Redirect>
        </WrapperText>

        <WrapperText>
          <Redirect href="https://larepublica.pe/economia/">
            Economía
          </Redirect>
          <Redirect href="https://larepublica.pe/tecnologia/">
            Tecnología
          </Redirect>
          <Redirect href="https://larepublica.pe/mundo/argentina/">
            Argentina
          </Redirect>
          <Redirect href="https://larepublica.pe/deportes/2021/06/17/partidos-de-hoy-17-de-junio-del-2021-en-vivo-horarios-canales-de-futbol-en-vivo-atmp/">
            Partidos de hoy
          </Redirect>
        </WrapperText>

        <WrapperText>
          <Redirect href="https://larepublica.pe/sociedad/">
            Sociedad
          </Redirect>
          <Redirect href="https://larepublica.pe/autores/">
            Columnistas
          </Redirect>
          <Redirect href="https://larepublica.pe/elecciones/">
            Elecciones 2021
          </Redirect>
          <Redirect href="https://larepublica.pe/horoscopo/2021/06/17/horoscopo-de-hoy-jueves-17-de-junio-de-2021-consulta-tus-predicciones-atmp/">
            Horóscopo
          </Redirect>
        </WrapperText>

        <WrapperText>
          <Redirect href="https://larepublica.pe/deportes/">
            Deportes
          </Redirect>
          <Redirect href="https://larepublica.pe/verificador/">
            Verificador
          </Redirect>
          <Redirect href="https://larepublica.pe/horoscopo-chino/">
            Horóscopo chino
          </Redirect>
          <Redirect href="https://larepublica.pe/sociedad/2021/06/17/aprendo-en-casa-en-vivo-hoy-17-de-junio-del-2021-inicial-primaria-secundaria-via-tv-peru-en-vivo-canal-7-horarios-programacion-atmp/">
            Aprendo en Casa
          </Redirect>
        </WrapperText>

        <WrapperText>
          <Redirect href="https://larepublica.pe/espectaculos/">
            Espectáculos
          </Redirect>
          <Redirect href="https://larepublica.pe/datos-lr/">
            Datos LR
          </Redirect>
          <Redirect href="https://larepublica.pe/sociedad/2021/06/17/coronavirus-en-peru-en-vivo-hoy-17-junio-2021-ultimas-noticias-casos-y-cifras-mdga/">
            Coronavirus en Perú
          </Redirect>
        </WrapperText>
      </BlockViews>

      <BlockMarca>
        <WrapperMarcaText>
          <ContentLogoMarca>
            <LogoMarca src="https://cdn.larepublica.pe/images/content/default/newHome/larepublica-01.svg"/>
          </ContentLogoMarca>
          <Copyright>©Todos los derechos reservados - 2021</Copyright>
          <Redirect href="https://larepublica.pe/politicas-y-estandares/">
            <h6>Políticas y estándares</h6>
          </Redirect>
          <Redirect href="https://larepublica.pe/contactenos/">
            <h4>Contáctenos</h4>
          </Redirect>
        </WrapperMarcaText>
      </BlockMarca>
    </ContainerFooter>
  )
}

export default Footer

const ContainerFooter = styled.div`
  display: flex;
  max-width: 1440px;
  width: 100%;
  height: auto;
  padding-top: 20px;
  margin: 0 auto 0;
  padding-bottom: 20px;
  background-color: white;
  box-shadow: 1px 1px 10px 5px rgba(0,0,0,0.7);
  @media (max-width: 600px) {
    display: block;
  }
`
const BlockViews = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1000px;
  width: 100%;
  height: auto;
  padding: 5px 15px;
  margin: 0 auto;
  @media (max-width: 600px) {
    padding-bottom: 20px;
  }
`
const BlockMarca = styled.div`
  display: flex;
  align-items: center;
  width: calc(1440px - 1000px);
  height: auto;
  border-left: 1px solid #9A9898;
  margin: 0 auto;
  justify-content: center;
  @media (max-width: 600px) {
    justify-content: center;
    width: 100%;
    padding: 25px 0;
    border-left: none;
    border-top: solid 1px #9A9898;
  }
`
const WrapperMarcaText = styled.div`
  margin-left: 10px;
  max-width: 250px;
  width: 100%;
  & h4 {
    line-height: 20px;
    font-size: 13px;
    font-weight: 100;
    margin-left: 10px;
    letter-spacing: -0.3px;
    text-align: center;
    &:hover {
      cursor: pointer;
      color: #387AC2;
    }
  }
  & h6 {
    line-height: 20px;
    font-size: 13px;
    font-weight: 100;
    margin-left: 10px;
    letter-spacing: -0.3px;
    text-align: center;
    &:hover {
      cursor: pointer;
      color: #387AC2;
    }
  }
`
const ContentLogoMarca = styled.div`
  margin-left: 10px;
  max-width: 250px;
  max-width: 220px;
`
const LogoMarca = styled.img`
  width: 100%;
  height: auto;
`
const WrapperText = styled.div`
  width: 150px;
  height: auto;
`
const Copyright = styled.h3`
  text-align: center;
  line-height: 25px;
  font-size: 13px;
  font-weight: 100;
  margin-left: 10px;
  letter-spacing: -0.3px;
`
const Redirect = styled.a`
  display: block;
  text-decoration: none;
  color: black;
  line-height: 25px;
  font-size: 13px;
  font-weight: 100;
  margin-left: 10px;
  letter-spacing: -0.3px;
  &:hover {
    cursor: pointer;
    color: #387AC2;
  }
`