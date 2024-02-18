import { useEffect, useRef, useState } from "react"
import "./mainContainer.css"
import Fst from "./innerContainer/fst/fst"

import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import Sec from "./innerContainer/sec/sec"
import Trd from "./innerContainer/trd/trd"
import Fourth from "./innerContainer/fourth/fourth"
gsap.registerPlugin(ScrollTrigger)

export default function Maincontainer(){

    const contentsCounts = 5
    const heightSave = useRef<number>(3000)
    const mainRef = useRef<HTMLDivElement>(null)
    const backGroundRef = useRef<HTMLDivElement>(null)
    const [text,setText] = useState<string>("")

    const updateText =(text:string)=>{
        setText(text)
    }

    const computeHeight = () =>{
        heightSave.current = window.innerHeight * (contentsCounts - 1)
    }

    useEffect(()=>{
        window.addEventListener('resize',computeHeight)
        return()=>{
            window.removeEventListener('resize',computeHeight)
        }
    },[])

    useGSAP(()=>{
        // gsap.fromTo(backGroundRef.current,{
        //     background:"linear-gradient(135deg, rgb(193 39 83), rgb(0 0 0));"
        // },{
        //     duration:1,
        //     ease:"power1.inOut",
        //     background:"linear-gradient(315deg, #642a2a, #270d4c)",
        //     scrollTrigger:{
        //         trigger:mainRef.current,
        //         start:"top top",
        //         end:"bottom bottom",
        //         scrub:1,
        //     }
        // })

        const tl = gsap.timeline()

        tl.fromTo(backGroundRef.current,{
            background:"linear-gradient(345deg, #0834c4, #a88ca8)"
        },{
            background:"linear-gradient(375deg, #0834c4, #aaa193)",
        })
        tl.to(backGroundRef.current,{
            background:"linear-gradient(375deg, #0c1b4e, #121111)"
        })
        tl.to(backGroundRef.current,{
            background:"linear-gradient(375deg, #270d4c, #121111)"
        })
        tl.to(backGroundRef.current,{
            // background:"linear-gradient(315deg, #642a2a, #270d4c)"
        })


        ScrollTrigger.create({
            trigger:".backGroundDiv",
            animation:tl,
            start:"top top",
            end:`${window.innerHeight*5} top`,
            
            scrub:1
        })

        return()=>{
            ScrollTrigger.killAll()
        }
    },{})

    return(
        <div 
            style={{height:`${contentsCounts*100}vh`}}
            className="container-main"
            ref={mainRef}
        >
            <div className="backGroundDiv" ref={backGroundRef}/>
            <Fst mainRef={mainRef}/>
            <Sec/>
            <Trd text={text}/>
            <Fourth updateText={updateText}/>
            <Clock mainRef={mainRef}/>
        </div>
    )
}

type ColckProps = {
    mainRef : React.RefObject<HTMLDivElement>
}

function Clock({mainRef}:ColckProps){

    const clockRef = useRef<HTMLDivElement>(null)
    const hourRef = useRef<HTMLDivElement>(null)
    const minuteRef = useRef<HTMLDivElement>(null)

    useGSAP(()=>{
        gsap.fromTo(hourRef.current,{
            rotate:"90deg"
        },{
            duration:1,
            ease:"power1.inOut",
            rotate:"270deg",
            scrollTrigger:{
                trigger:".container-main",
                start:"top top",
                end:"bottom bottom",
                scrub:1,
            }
        })

        gsap.fromTo(minuteRef.current,{
            rotate:"0deg"
        },{
            duration:1,
            ease:"power1.inOut",
            rotate:"3240deg",
            scrollTrigger:{
                trigger:".container-main",
                start:"top top",
                end:"bottom bottom",
                scrub:1,
            }
        })

        gsap.fromTo(clockRef.current,{
            boxShadow:"0px 0px 0px #171717b0"
        },{
            duration:1,
            ease:"power1.inOut",
            boxShadow:"25px 25px 25px #171717b0",
            scrollTrigger:{
                trigger:".container-main",
                start:"top top",
                end:"bottom bottom",
                scrub:1,
            }
        })

        return () => {
            ScrollTrigger.killAll();
          };
    },{})

    return(

        <div className="frame-clock" ref={clockRef}>
        <div className="clock-center clock"/>
        <div className="clock-minute clock" ref={minuteRef}>
            <div/>
        </div>
            <div className="clock-hour clock" ref={hourRef}>
                <div/>
            </div>
        </div>
             
    )
}