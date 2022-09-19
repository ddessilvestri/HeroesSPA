import React from 'react'
import { Route, Routes,Navigate,Link } from 'react-router-dom'
import { Navbar } from '../../ui'
import { DcPage,MarvelPage,SearchPage,HeroPage  } from '../pages';


export const HeroesRoutes = () => {
  return (
        <>
            <Navbar />
            <div className='container'>
                <Routes>              
                    <Route path="marvel" element={<MarvelPage/>} />
                    <Route path="dc" element={<DcPage/>} />
                    
                    <Route path="search" element={<SearchPage/>} />
                    <Route path="hero/:id" element={<HeroPage/>} />
                
                    <Route path="/" element={<Navigate to="/marvel"/>}></Route>
                </Routes>

            </div>
        </>
  )
}
