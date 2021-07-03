import React, { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import Layout from '@components/Layout/Layout'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'

//export const getServerSideProps = async () => {
export const getStaticProps = async () => {
  // window
  //     .fetch('/api/avo')
  //     .then((response) => response.json())
  //     .then(({ data }: TAPIAvoResponse) => {
  //       setProductList(data)
  //     })

  const response = await fetch('https://next-avocado.vercel.app/api/avo')
  const { data: productList }: TAPIAvoResponse = await response.json()

  return {
    props: {
      productList,
    },
  }
}

const HomePage = ({ productList }: { productList: TProduct[] }) => {
  return (
    <Layout>
      <KawaiiHeader />
      <ProductList products={productList} />
    </Layout>
  )
}

export default HomePage
