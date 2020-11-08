import React, {useState} from 'react'
import Navbar from '../compo/Navbar'
import Sidebar from '../compo/Sidebar'
import HeroSection from '../compo/HeroSection'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
        </>
    )
}

export default Home
