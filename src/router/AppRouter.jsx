import { Routes, Route, Link, Navigate } from 'react-router-dom';

import {DcPage,MarvelPage} from '../heroes/pages'
import { LoginPage } from '../auth';
import { Navbar } from '../ui';


export const AppRouter = () => {
    return (
        <>
            <Navbar/>
            <Routes>              
                <Route path="marvel" element={<MarvelPage/>} />
                <Route path="dc" element={<DcPage/>} />
                <Route path="login" element={<LoginPage/>} />

                <Route path="/" element={<Navigate to="/marvel"/>}></Route>
            </Routes>
        </>
    )
}
