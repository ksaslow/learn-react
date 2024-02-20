// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
// import Profile from './qcomps/profile_mistake'
import MyComp from './qcomps/firstcomp'
import Bio from './qcomps/bios'
import Profile from './components/profile_props'
//import Gallery from './components/gallery' // note that Profile must match exactly how component is exported in profile.js
// import Gallery from './qcomps/gallery_props'
import Holder from './components/square'
// import PackingList from './components/props_item'
import PackingList from './qcomps/props_item'
import TodoList from './qcomps/todos'
// import List from './components/list_plain'
// import List from './components/list_keys'
import List from './qcomps/list_keys_id'
import ImagesList from './qcomps/list_keys_id'
import RecipeList from './qcomps/recipes'
// import Gallery from './components/whyState'
//import Gallery from './components/state'
//import Gallery from './qcomps/state'
import PersonData from './components/stateObj'
import Form from './qcomps/stuckForm'
import FeedbackForm from './qcomps/thankYouCrash'
import Counter from './components/queueUpdates'
//import Form from './components/snapshot2'
import RequestTracker from './qcomps/shoppingCart'

export default function Home() { // component called "Home": see styles > Home.module.css
  return (
    <div className={styles.main}>
        <FeedbackForm/> 
    </div>
  )
}

// note that the Component in the HTML tag must always have an uppercase name, because 
// if it is lowercase, it won't be correctly understood as a Component to be imported. 
