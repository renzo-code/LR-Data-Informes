import styled from 'styled-components'

const Header = () => {
  return (
    <>
      <ContentItems>
      {/* <Redirect href="https://larepublica.pe/" target="_parent">
          <Return>
            <WrapperImage>
              Regresar a 
              <LogoReturn src="https://cdn.larepublica.pe/images/images/content/default/logo-lr-footer.svg"/>
              <LogoArrowReturn src="https://cdn.larepublica.pe/images/content/default/minisite/iconback.svg"/>
            </WrapperImage>
          </Return>
      </Redirect> */}

        <Redirect href="https://data.larepublica.pe/" target="_parent">
        <ContentHeader>
          <WrapperLogo>
            <LogoLrData src="./img/Logo_web_LRData.png"/>
          </WrapperLogo>
            <WrapperLogoResponsive>
              <LogoLrDataResponsive src="./img/Logo_Responsive_LRData.png" />
            </WrapperLogoResponsive>
        </ContentHeader>
        </Redirect>
      </ContentItems>
    </>
  )
}

export default Header

const ContentItems = styled.div`
  box-shadow: 1px 1px 9px 5px rgba(0,0,0,0.7);
  max-height: 135px;
  height: 100%;
  max-width: 1440px;
  margin: 0 auto;
`
const Redirect = styled.a`
  text-decoration: none;
`
const Return = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10%;
  height: 35px;
  width: 100%;
  background-color: #CCCCCC;
  margin: 0 auto;
`
const WrapperImage = styled.div`
  display: flex;
  width: 250px;
  color: white;
  font-size: 15px;
`
const LogoReturn = styled.img`
  position: relative;
  top: -2px;
  height: 20px;
  width: 100px;
  padding-left: 5px;
`
const LogoArrowReturn = styled.img`
  position: relative;
  top: -2px;
  height: auto;
  width: 30px;
  padding-left: 15px;
  padding-bottom: 3px;
`
const ContentHeader = styled.div`
  display: flex;
  align-items: center; 
  height: 83px;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  background-color: #252525;

  @media only screen and (max-width: 621px) {
    height: 100px;
  }
`
const WrapperLogo = styled.div`
  height: 50px;
  width: 290px;
  padding-left: 10px;
  margin: 0 auto;
  @media only screen and (max-width: 621px) {
    display: none;
  }
`
const LogoLrData = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`
const WrapperLogoResponsive = styled.div`
  height: 100px;
  width: 150px;
  padding-left: 10px;
  margin: 0 auto;
  @media only screen and (max-width: 621px) {
    display: block;
  }
  @media only screen and (min-width: 622px) {
    display: none;
  }
`
const LogoLrDataResponsive = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;

`