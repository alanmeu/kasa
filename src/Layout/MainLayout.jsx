import React from 'react';
import Footer from '../Component/Footer';
import Header from '../Component/Header';

const MainLayout =({children}) =>{
    return(
        <>
        <Header/>
        <main className='main-container'>

       
        {children}
         </main>
        <Footer/>
        </>
    )
}

export default MainLayout;