import React from 'react'
import Link from 'next/link'
import styles from './styles.module.css'
import Head from 'next/head'
import Layout from '@/components/layout'

export default function About() {
  return (
    <>
      <Layout>
        <Head>
          <title>Page Component</title>
        </Head>
        <div>
          <h1>pages component</h1>
          <Link href='/'>Go Home</Link>
        </div>
      </Layout>
    </>

  )
}
