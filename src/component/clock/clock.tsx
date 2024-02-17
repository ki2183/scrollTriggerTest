import { useGSAP } from "@gsap/react"
import "./clock.css"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"
import { useEffect, useRef } from "react"
export default function Clock(){

    
    const hourRef = useRef<HTMLDivElement>(null)
    const minuteRef = useRef<HTMLDivElement>(null)
    const ScrollHeightRef = useRef<number>(0)
    const shadowRef = useRef<HTMLDivElement>(null)

    useEffect(()=>{
        const scrollHeight = document.querySelector('.Maincontainer')?.scrollHeight
        const innerHeight = window.innerHeight
        ScrollHeightRef.current = scrollHeight !== undefined ? scrollHeight-innerHeight : 100
    },[])
    

    useGSAP(()=>{

        gsap.fromTo(shadowRef.current,{
            duration:1,
            ease:"power1.inOut",
            boxShadow: "rgba(0, 0, 0, 0.74) 0px 0px 0px"
        },{
            scrollTrigger:{
                trigger:".Maincontainer",
                scrub:1,
                // markers:true,
                start:"top top",
                end: "+=" + ScrollHeightRef.current + "top"
            },
            duration:1,
            ease:"power1.inOut",
            boxShadow: "rgba(0, 0, 0, 0.74) 11px 11px 11px" 
        })

        gsap.fromTo(hourRef.current,{
            rotate:-120,
        },{
            scrollTrigger:{
                trigger:".Maincontainer",
                scrub:1,
                // markers:true,
                start:"top top",
                end: "+=" + ScrollHeightRef.current + "top"
            },
            rotate:180,
            ease:"power1.inOut"
        })

        gsap.fromTo(minuteRef.current,{
            rotate:0
        },{
            
                scrollTrigger:{
                    trigger:".Maincontainer",
                    scrub:1,
                    // markers:true,
                    start:"top top",
                    end: "+=" + ScrollHeightRef.current + "top"
                },
                rotate:4321,
                ease:"power1.inOut"
            })

    },{})

    return(
        <div className="container-clock" ref={shadowRef}>
            <div className="hour-clock" ref={hourRef}>
                <div className="hour-hand"/>
            </div>
            <div className="hour-clock" ref={minuteRef}>
                <div className="minute-hand"/>
            </div>
            <div className="hour-clock" >
                <div className="center-hand"/>
            </div>
            
        </div>
    )
}