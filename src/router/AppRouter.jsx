import { Routes, Route } from 'react-router-dom';

import { LoginPage } from '../auth';
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes';
import { PrivateRoute } from '../heroes/routes/PrivateRoute';
import { PublicRoute } from '../heroes/routes/PublicRoute';
export const AppRouter = () => {
    return (
        <>
            <Routes> 
                <Route path= "login/*" element={  //todo lo que venga con la palabra login
                    <PublicRoute>
                        {/* <LoginPage/> */}

                        <Routes>
                            <Route path="/*" element={<LoginPage/>} />
                        </Routes>
                    </PublicRoute>

                }/>

                {/* <Route path="login" element={<LoginPage/>} /> */}

                <Route path="*" element={ 
                    <PrivateRoute> 
                        <HeroesRoutes/>
                    </PrivateRoute>            
                } />

                {/* <Route path="/*" element={<HeroesRoutes/>} /> */}
             </Routes>
        </>
    )
}
