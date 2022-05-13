import React, { useState } from 'react'

import { isEmpty } from 'ramda'
import styled from 'styled-components'
import Articles from '../../Articles/default'

const ImagenDefault = "https://larepublica.pe/resizer/3KAU2WunY-i2T7mJEn9_Hti5DNc=/130x130/top/smart/s3.amazonaws.com/arc-authors/gruporepublica/5c0b3df8-490f-4b2d-916a-7181d6dc24b6.png"

const Informes = ({ InformesPaquetes, InformesData }) => {
  let ArrayTotalInformes = [...InformesPaquetes, ...InformesData]
  
  console.log(InformesPaquetes)
  return (
    <>
      <ContainerArtcl>
        <Title>INFORMES</Title>
        <div className='WrapperInformes'>
          <WrapperArticles>
            {
              !isEmpty(ArrayTotalInformes) &&
              ArrayTotalInformes.filter(data => data.title != 'Data - [Home]' && data.title != 'Data - [Informes]' &&
                data.title != "Data - Encuesta IEP: aprobación y percepción del presidente, Congreso y la realidad peruana" &&
                data.title != "Data - Coronavirus en Perú: así evoluciona la pandemia en el país" &&
                data.title != "Data - Avance de la vacunación contra la COVID-19 en Perú").sort((a, b) => {
                  if (a.date > b.date) {
                    return -1
                  }
                  if (a.date < b.date) {
                    return 1
                  }
                  return 0;
                }).map((item, i) => {
                  {/* console.log(item?.data?.metadata_seo,'item') */}
                return (
                <Articles
                  key={i}
                  redirect={item?.slug}
                  picture={item?.data?.multimedia[0]?.path || ImagenDefault}
                  description={item?.title || "LR Data"}
                  //drafting={"LR Data"}
                />
              )})
            }
          </WrapperArticles>
        </div>
      </ContainerArtcl>
      <style jsx>{`
        .WrapperInformes {
          height: 590px;
          width: 90%;
          margin: 0 auto;
          overflow-x: hidden;
          overflow-y: scroll;
        }
        .WrapperInformes::-webkit-scrollbar {
          width: 7px;
          background: #252525;
        }
        .WrapperInformes::-webkit-scrollbar-thumb {
          background: #343434;
          border-radius: 1px;
        }
      `}</style>
    </>
  )
}

export default Informes

const ContainerArtcl = styled.div`
  height: 100%;
  width: 100%;
  padding-bottom: 15px;
`
const WrapperInformes = styled.div`
  height: 590px;
  width: 90%;
  margin: 0 auto;
  overflow-x: hidden;
  overflow-y: scroll;
`
const Title = styled.h1`
  text-align: center;
  font-size: 30px;
  color: white;
  font-weight: 800;
  line-height: 1.5;
  padding-top: 10px;
  margin: 0px auto 20px auto;
  width: 50%;
  &::after{
    content: "";
    display: block;
    background-color: #343434;
    width: 100%;
    height: 4px;
    margin-top: 5px;
    @media only screen and (max-width: 620px) {
      margin-bottom: 20px;
    }
  }
  @media only screen and (max-width: 655px) {
    font-size: 25px;
    margin: 20px auto 14px auto;
  }
  @media only screen and (max-width: 385px) {
    font-size: 23px;
  }
`
const WrapperArticles = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: 100%;
  margin: 0 auto;
  padding-bottom: 20px;
  width: 92%;
`
