import React from 'react'
import Topmenu from '../components/topmenu.jsx'
import Carousel from "../components/carousel.jsx"
import Sliderproduct from '../components/sliderproduct.jsx'




import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Footer3dd from './Footer3dprint.jsx';
import { MdHeight } from 'react-icons/md';



function Home() {

    return (





        <div>
            <Topmenu />
          
                <div className='w-full relative overflow-hidden rounded-lg shadow-lg'  >
                    <Carousel />


                </div>
                <Sliderproduct />
                <Footer3dd />

          


        </div>
    )
}

export default Home
