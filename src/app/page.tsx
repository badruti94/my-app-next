import HelloWorld from '@/components/HelloWorld'
import { API } from '@/config/api'
import axios from 'axios'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import { Context, use, useEffect, useState } from 'react'


interface Data {
  userId: number
  id: number
  title: string
  body: string
}

const getData = async (): Promise<Data[]> => {
  const result = await API.get<Data[]>('/posts')

  return result.data
};


export default function Home() {
  // const data = use(getData()


  // const data = await getData()


  const message: string = process.env.URL as string


  return (
    <main>
      <Head>
        <title>tes</title>
      </Head>
      tes
      <HelloWorld message={message} />
      {/* {data.map(dt => <div key={dt.id}>{dt.id}</div>)} */}
    </main>
  )
}
