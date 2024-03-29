import "./fourth.css"

import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"
import { useEffect, useRef, useState } from 'react'
gsap.registerPlugin(ScrollTrigger)

type FourthProps = {
    updateText:(text:string)=>void
}

export default function Fourth({updateText}:FourthProps){

    const FourthRef = useRef<HTMLDivElement>(null)
    const textArr = ["","ㄱ|","거|","건|","건|","건ㄱ|","건가|","건강|","건강 |","건강 ","건강 |","건강 ㅊ|","건강 채|","건강 챙|","건강 챙ㄱ|","건강 챙기|","건강 챙깃|","건강 챙기세|","건강 챙기셍|","건강 챙기세요|","건강 챙기세요.|" ,"건강 챙기세요.","건강 챙기세요.|" ,"건강 챙기세요.","건강 챙기세요.|","건강 챙기세요. |","건강 챙기세요. ㅎ|" ,"건강 챙기세요. 하|","건강 챙기세요. 하ㅎ|","건강 챙기세요. 하하|","건강 챙기세요. 하하|","건강 챙기세요. 하하"]
    const textArr_ = [
        "",
        "|",
        "ㅅ|",
        "수|",
        "수하|",
        "수학|",
        "수학ㅈ|",
        "수학자|",
        "수학자가|",
        "수학자가 |",
        "수학자가 좋|",
        "수학자가 좋아|",
        "수학자가 좋아하|",
        "수학자가 좋아하는|",
        "수학자가 좋아하는 |",
        "수학자가 좋아하는 보|",
        "수학자가 좋아하는 보석|",
        "수학자가 좋아하는 보석은|",
        "수학자가 좋아하는 보석은?|",
        "수학자가 좋아하는 보석은?",
        "수학자가 좋아하는 보석은?",
        "수학자가 좋아하는 보석은?|",
        "수학자가 좋아하는 보석은?|",
        "수학자가 좋아하는 보석은?",
        "수학자가 좋아하는 보석은?",
        "수학자가 좋아하는 보석은?|",
        "수학자가 좋아하는 보석은?|",
        "수학자가 좋아하는 보석은|",
        "수학자가 좋아하는 보석|",
        "수학자가 좋아하는 보|",
        "수학자가 좋아하는 |",
        "수학자가 좋아하는|",
        "수학자가 좋아하|",
        "수학자가 좋아|",
        "수학자가 좋|",
        "수학자가 |",
        "수학자가|",
        "수학가|",
        "수학|",
        "수|",
        "|",
        "4|",
        "4π|",
        "4πr|",
        "4πr|",
        "4πr",
        "4πr",
        "4πr|",
        "4πr|",
        "4πr",
        "4πr",
        "4πr ㄲ|",
        "4πr 깔|",
        "4πr 깔|",
        "4πr 깔ㄲ|",
        "4πr 깔까|",
        "4πr 깔깔|",
        "4πr 깔깔ㄲ|",
        "4πr 깔깔까|",
        "4πr 깔깔깔|",
        "4πr 깔깔깔!|" 



        
      ];

    useGSAP(()=>{

        const tl = gsap.timeline()

        textArr.forEach((item)=>{
            tl.to(FourthRef.current,{
                onUpdate:()=>{
                    console.log(item)
                    updateText(item)
                }
            })
        })
        

        ScrollTrigger.create({
            animation:tl,
            trigger:".container-fourth",
            start: `${window.innerHeight*3} top`,
            end: `${window.innerHeight*4} top`, 
            scrub: true,
            pinSpacing: false, 
          })    
          ScrollTrigger.update()

          return()=>{
            ScrollTrigger.killAll();
          }
    },[])

    return(
        <div className='container-fourth' ref={FourthRef}>

        </div>
    )
}