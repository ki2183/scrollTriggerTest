import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import "./test.css"

gsap.registerPlugin(ScrollTrigger)

export default function Test2(){

  const heightRef = useRef<number>(3000)
  const circleRef = useRef<HTMLDivElement>(null)

  const resize = () =>{
    heightRef.current = 4000 - window.innerHeight;

  }
  useEffect(()=>{
      window.addEventListener("resize", resize)

      return ()=>{
          window.removeEventListener("resize",resize)
      }
  },[])

    useGSAP(()=>{
      gsap.to(circleRef.current,{
        duration:1,
        scrollTrigger:{
          trigger:".container-test",
          start:"top top",
          end:`${heightRef.current} top`,
          scrub:1,          
        },
        rotate:"360deg"
      })
    },{})
  
    return(
      <div className='frame-time' ref={circleRef}>
          <div className='time' >

          </div>
          
      </div>
    )
  }