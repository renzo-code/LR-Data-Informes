import styled from 'styled-components'
import { useRouter } from 'next/router';

const Articles = ({ redirect, picture, description, drafting }) => {
  const router = useRouter();
  return (
    <>
      <ContentArticles>
        <Redirect href={redirect} target="_parent">
          <WrapperImage>
            <Image src={picture} />
          </WrapperImage>
          <Description>{description}</Description>
        </Redirect>
        {/* <Drafting className={router.pathname == '/' ? 'show' : 'close'}>Redactado por: {drafting}</Drafting> */}
        
      </ContentArticles>
    </>
  )
}

export default Articles

const Redirect = styled.a`
  text-decoration: none;
`
const ContentArticles = styled.div`
  height: 52%;
  max-width: 300px;
  width: 300px;
  margin: 0 auto;
`
const WrapperImage = styled.div`
  height: 160px;
  width: 100%;
  margin: 0 auto;
  margin-top: 20px;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const Description = styled.h4`
  color: white;
  font-weight: 600;
  max-width: 263px;
  width: 263px;
  font-size: 18.5px;
  margin: 10px 0;
  line-height: 19px;
  letter-spacing: 0.5px;
  &:hover {
    text-decoration: currentcolor solid underline;
    cursor: pointer;
  }
`
const Drafting = styled.h6`
  color: white;
  font-size: 14px;
  font-weight: 100;
  font-style: oblique;
`