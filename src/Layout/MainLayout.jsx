import React from 'react';
import Footer from '../Component/Footer';
import Header from '../Component/Header';

const MainLayout =({children}) =>{
    return(
        <>
        <main className='main-container'>

       <Header/>
        <div >{children}</div>
         </main>
        <Footer/>
        </>
    )
}

export default MainLayout;