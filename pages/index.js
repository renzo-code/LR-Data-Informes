import React from 'react'

import styled from 'styled-components'
import Layout from '../layouts/default'
import Informes from '../components/views/informes'
import { prop } from 'ramda'

const Home = ({ informes, data }) => {
  const InformesPaquetes = prop("data", prop("packages", prop("data", informes)))
  const InformesData = prop("data", prop("datas", prop("data", data)))

  console.log('InformesData', InformesData)
  return (
    <Layout>
      <Content>
        <Informes InformesPaquetes={InformesPaquetes} InformesData={InformesData} />
      </Content>
    </Layout>
  )
}

Home.getInitialProps = async (ctx) => {
  let responseInformes = {}
  let responseData = {}

  const objet_fect = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/menu',
      'token_id': 'eac355Be7AEhhj222E18JChIE7j972573BAj2B1Eg4'
    }
  }

  try {
    responseInformes = await fetch(`https://cronosservices.glr.pe/api/content/package/list?site_id=larepublica&status=1&order_field=updated_at&subdomain=data`, objet_fect)
    responseInformes = await responseInformes.json()

    responseData = await fetch(`https://cronosservices.glr.pe/api/content/data/list?site_id=larepublica&status=1&order_field=updated_at&subdomain=data`, objet_fect)
    responseData = await responseData.json()
  } catch (e) {
    console.error(e)
  }

  return {
    informes: responseInformes,
    data: responseData
  }
}

export default Home

const Content = styled.div`
  width: 100%;
  height: auto;
  background-color: #252525;
`