import { useRef, useState } from "react"
import "./sec.css"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"
gsap.registerPlugin(ScrollTrigger)

export default function Sec(){

    const secRef = useRef<HTMLDivElement>(null)
    const TextRef = useRef<HTMLSpanElement>(null)

    useGSAP(()=>{
        const tl = gsap.timeline()

        tl.to(TextRef.current,{
            duration:1,
            top:"50%",
            left:"50%",
            opacity:1,
            fontSize:"4rem",
        })

        tl.to(TextRef.current,{
            duration:1,
            top:"20%",
            left:"80%",
            opacity:0,
            fontSize:"5rem",
        })

        ScrollTrigger.create({
            animation:tl,
            trigger:".container-sec",
            start: `${window.innerHeight*0.5} top`,
            end: `${window.innerHeight*2.5} top`, 

            // markers: true,
            scrub: 1,
            pinSpacing: false, 
          })       

        
        ScrollTrigger.update()

        return()=>{
            ScrollTrigger.killAll()
        }
    },[])

    return (
        <div className="container-sec" ref={secRef}>
            <span className="sec-text" ref={TextRef}>허리 피세요</span>
        </div>
    )
}