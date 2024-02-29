import { useState } from 'react'
import './App.css'
import AboutUs from './Components/About/AboutUs'
import Header from './Components/Header/Header'
import HeroPage from './Components/Hero/HeroPage'
import PopularPage from './Components/PopularPage/PopularPage'
import RecentlyPage from './Components/Recently/RecentlyPage'
import SubscribePage from './Components/Subscribe/SubscribePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <HeroPage/>
     <AboutUs/>
     <PopularPage/>
     <RecentlyPage/>
     <SubscribePage/>
    </>
  )
}

export default App
