// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Profile from './components/profile'

export default function Home() { // component called "Home": see styles > Home.module.css
  return (
    <div className={styles.main}>
        <Profile />
    </div>
  )
}
