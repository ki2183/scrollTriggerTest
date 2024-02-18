import { useEffect, useRef } from "react"
import "./fst.css"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"
gsap.registerPlugin(ScrollTrigger)

type FstProps = {
    mainRef:React.RefObject<HTMLDivElement>
}

export default function Fst({mainRef}:FstProps){
    const FstRef = useRef<HTMLDivElement>(null)
    const TextRef = useRef<HTMLDivElement>(null)

    useGSAP(()=>{
        gsap.to(TextRef.current,{
            duration:1,
            scrollTrigger:{
                trigger:FstRef.current,
                start:"top top",
                end:"bottom top",
                scrub:1,
            },
            top:"20%",
            left:"20%",
            opacity:0,
            fontSize:"5rem"
        })
    },{})

    return (
        <div className="container-fst" ref={FstRef}>
            <div ref={TextRef }>
                <span className="fstText">ScrollTrigger</span>
                <span className="fstText">Thank U gsap</span>
            </div>
        </div>
    )
}