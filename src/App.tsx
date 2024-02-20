import React, { createContext, useRef, useState } from 'react';

import './App.css';
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"
import Nav from './component/nav/nav';
import { Route, Routes } from 'react-router-dom';
import Maincontainer from './component/mainContainer/mainContainer';

gsap.registerPlugin(ScrollTrigger)

function App() {


  return (
    <div className="App" style={{
      width:"100vw",
      height:"100vh",
      margin:"0px",
      padding:"0px",
    }}>
      <nav>
        <Nav/>
      </nav>
      <header className="App-header">
  
      </header>
      <section>
        <Routes>
          <Route path='/scrub' element={<TestScrollTrigger/>}/>
          <Route path='/toggleAction' element={<TestScrollTrigger1/>}/>
          <Route path='/' element={<Maincontainer/>}/>
        </Routes>
        {/* <Maincontainer/> */}
        {/* <TestScrollTrigger/> */}
      </section>
    </div>
  );
}

export default App;


function TestScrollTrigger1(){

	useGSAP(()=>{
      gsap.to(".square-fst",{
        x:600,
        rotate:"360deg",
        duration:1,
        scrollTrigger:{
          trigger:".square-fst",
          start:"center 300",
          end:"100 200",
          markers:true,
          toggleActions:"play pause reverse pause"
        }
      })
  },[])

    return(
    <div className='container-test' style={{
      width:"100vw",
      height:"500vh",
      backgroundColor:"rgb(36, 36, 36)",
      display:"flex",
      flexDirection:"column",
      gap:"5rem"
    }}>
      <div className='square-fst' style={{
        width:"5rem",
        height:"5rem",
        marginTop:"50vh",
        marginLeft:"5rem",
        background: "linear-gradient(161deg, rgb(223, 223, 223), rgb(186, 186, 186))"
      }}/>
      <div className='square-sec' style={{
        width:"5rem",
        height:"5rem",
        marginTop:"5rem",
        marginLeft:"5rem",
        background: " linear-gradient(161deg, rgb(223, 223, 223), rgb(186, 186, 186))"
      }}/>
    </div>
  )
}

function TestScrollTrigger(){

  useGSAP(()=>{
    gsap.to(".square-fst",{
      x:400,
      rotate:"360deg",
      duration:2,
      scrollTrigger:{
        trigger:".square-fst",
        start:"center center",
        end:"300 center",
        markers:true,
        scrub:true
      }
    })

    gsap.to(".square-sec",{
      x:400,
      rotate:"360deg",
      duration:2,
      scrollTrigger:{
        trigger:".square-fst",
        start:"center center",
        end:"300 center",
        markers:true,
        scrub:2
      }
    })
  },[])
  
  return(
    <div className='container-test' style={{
      width:"100vw",
      height:"500vh",
      backgroundColor:"rgb(36, 36, 36)",
      display:"flex",
      flexDirection:"column",
      gap:"5rem"
    }}>
      <div className='square-fst' style={{
        width:"5rem",
        height:"5rem",
        marginTop:"50vh",
        marginLeft:"5rem",
        background: "linear-gradient(161deg, rgb(223, 223, 223), rgb(186, 186, 186))"
      }}/>
      <div className='square-sec' style={{
        width:"5rem",
        height:"5rem",
        marginTop:"5rem",
        marginLeft:"5rem",
        background: " linear-gradient(161deg, rgb(81, 81, 81), rgb(51, 51, 51))"
      }}/>
    </div>
  )
}