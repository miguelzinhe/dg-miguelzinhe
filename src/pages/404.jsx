import React from 'react'
import Layout from '../layout/layout'
import Menu from '../components/menu'

export default function NotFound() {
  return (
    <Layout title="404 - Note Not Found 😉">
      <div className='flex'>
        <h3>erro 404 - vish, sei não o que você quer saber.</h3>
        <br/>
        <p class="lead">tenta usar essa menu aqui ou procurar na barra de pesquisa, xuxu.</p>
        <Menu />
      </div>
    </Layout>
  )
}
