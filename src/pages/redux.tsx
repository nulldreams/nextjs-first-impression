import React from 'react'
import { HeroesList } from '../components/Heroes/HeroesList'
import { DefaultLayout } from '../layouts/Default'

const Home: React.FC = () => {
  return (
    <DefaultLayout>
      <HeroesList />
    </DefaultLayout>
  )
}

export default Home
