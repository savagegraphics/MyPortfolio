import React from 'react'
import ProjectUno from './ProjectUno'
import Portfolio from './Portfolio'
import ProductDos from './ProductDos'


type Props = {}

const AllComp = (props: Props) => {
  return (
    <div className="">
  <ProjectUno/>
  <Portfolio/>
  <ProductDos/>
    </div>
  )
}

export default AllComp