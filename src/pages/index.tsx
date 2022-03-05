import type { NextPage } from 'next'
import BasicHead from "src/components/BasicHead";
import Router from 'next/router'
import { useEffect } from 'react'

const Index: NextPage = () => {
  useEffect(() => {
    Router.replace(`/home`)
  },)
  return <><BasicHead/></>
}

export default Index
