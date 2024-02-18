import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger)

export default function Test(){

    const containerRef = useRef<HTMLDivElement>(null)
    const circleRef = useRef<HTMLDivElement>(null)
    const squareRef = useRef<HTMLDivElement>(null)
    const heightRef = useRef<number>(3000)

    const resize = () =>{
        heightRef.current = 4000 - window.innerHeight;

    }
    useEffect(()=>{
        window.addEventListener("resize", resize)

        return ()=>{
            window.removeEventListener("resize",resize)
        }
    },[])

    // useEffect(()=>{
    //     const view = ()=>{
    //         console.log(window.scrollY)
    //     }

    //     window.addEventListener("scroll", view)

    //     return()=>{
    //         window.removeEventListener("scroll", view)
    //     }
    // },[])

    useGSAP(()=>{
      gsap.to(circleRef.current,{
        duration:1,
        scrollTrigger:{
          trigger:containerRef.current,
          start:"top top",
          end:`${heightRef.current} top`,
        //   markers:true,
          scrub:1
        },
        x:400,
      })
  
      const tl = gsap.timeline()
      
      tl.fromTo(containerRef.current,{
        background:"linear-gradient(135deg, #642a2a, rgb(28, 102, 193))"
      },{
        background:"linear-gradient(350deg, rgb(0 0 0), rgb(161 32 32))"
      })
  
      ScrollTrigger.create({
        animation:tl,
        trigger: containerRef.current,
        start:'top top',
        end:"+=4000 bottom",
        scrub:1,
        pinSpacing:false,
      })
  
    },{})
  
    return(
      <div className='container-test bg-gray-600'>
          <div className='fst-test' ref={containerRef}>
            <div className='circle' ref={circleRef}></div>
            <div className='square' ref={squareRef}></div>
          </div>
          
      </div>
    )
  }