import './trd.css'
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"
import { useEffect, useRef } from 'react'
gsap.registerPlugin(ScrollTrigger)

type TrdProps = {
    text:string
}

export default function Trd({text}:TrdProps){

    const TrdRef = useRef<HTMLDivElement>(null)
    const divRef = useRef<HTMLDivElement>(null)

    useGSAP(()=>{

        const tl = gsap.timeline()
        tl.set(divRef.current,{
            scale:0.8,
        })
        tl.to(divRef.current,{
            top:"50%",
            left:"50%",
            scale:1,
            opacity:1,
        })

        ScrollTrigger.create({
            animation:tl,
            trigger:".container-trd",
            start: `${window.innerHeight*2} top`,
            end: `${window.innerHeight*3} top`, 
            scrub: 1,
            pinSpacing: false, 
          })    
          ScrollTrigger.update()

          return()=>{
            ScrollTrigger.killAll();
          }
    },[])

    return(
        <div className='container-trd' ref={TrdRef}>
            <div className="text-div" ref={divRef}>
                {text}
            </div>
        </div>
    )
}