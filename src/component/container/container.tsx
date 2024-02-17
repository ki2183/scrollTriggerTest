import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import { useEffect, useRef, useState } from "react"
import "./container.css"
import Clock from "../clock/clock"

gsap.registerPlugin(ScrollTrigger)
export default function Container(){

    const containerRef = useRef<HTMLDivElement>(null)
    const fst = useRef<HTMLDivElement>(null)
    const sec = useRef<HTMLDivElement>(null)
    const spanRef1 = useRef<HTMLSpanElement>(null)
    const spanRef2 = useRef<HTMLSpanElement>(null)
    const spanRef3 = useRef<HTMLSpanElement>(null)
    const dotRef = useRef<HTMLDivElement>(null)
    const ScrollHeightRef = useRef<number>(0) //스크롤 높이
    const [text,setText] = useState<string>("")

    const textArr = ["","ㄱ|","거|","건|","건|","건ㄱ|","건가|","건강|","건강 |","건강 ","건강 |","건강 ㅊ|","건강 채|","건강 챙|","건강 챙ㄱ|","건강 챙기|","건강 챙깃|","건강 챙기세|","건강 챙기셍|","건강 챙기세요|","건강 챙기세요.|" ,"건강 챙기세요.","건강 챙기세요.|" ,"건강 챙기세요.","건강 챙기세요.|","건강 챙기세요. |","건강 챙기세요. ㅎ|" ,"건강 챙기세요. 하|","건강 챙기세요. 하ㅎ|","건강 챙기세요. 하하|","건강 챙기세요. 하하|","건강 챙기세요. 하하"   ]


    useEffect(()=>{ //save scrollHeight
      const scrollHeight = containerRef.current?.scrollHeight
      const innerHeight = window.innerHeight
      ScrollHeightRef.current = scrollHeight !== undefined ? scrollHeight-innerHeight : 100
     
  },[])

    useGSAP(()=>{

      gsap.to(spanRef1.current,{
        scrollTrigger:{
          trigger:containerRef.current,
            scrub:1,
            // markers:true,
            start:"top top",
            end: "+=" + ScrollHeightRef.current/6 + "top"
        },
        opacity:0,
        ease:"power1.inOut",
        left:"30%",
        top:"30%",
        fontSize:"6rem"
      })

      gsap.to(spanRef2.current,{
        scrollTrigger:{
          trigger:containerRef.current,
            scrub:1,
            // markers:true,
            start:"top top",
            end: "+=" + ScrollHeightRef.current/6 + "top"
        },
        opacity:0,
        ease:"power1.inOut",
        left:"40%",
        top:"42%",
        fontSize:"6rem"
      })

      gsap.from(spanRef3.current,{
        scrollTrigger:{
          trigger:containerRef.current,
            scrub:1,
            // markers:true,
            start:"+=" + (ScrollHeightRef.current/6 - 400)+"top",
            end: "+=" + (ScrollHeightRef.current/6 - 300) + "top"
        },
        opacity:0,
        ease:"power1.inOut",
        scale:"0.8",
        left:"70%",
        top:"70%",
        padding: "1rem",
      })
   
        //* timeLine입니다. **//
        //#region
        const tl = gsap.timeline({defaults:{duration:1,ease:"power1.inOut"}})
        
          // tl.fromTo(fst.current,{
          //   background:"linear-gradient(135deg, #642a2a, rgb(28, 102, 193))"
          // },{
          //   background:"linear-gradient(280deg, #642a2a, rgb(28, 102, 193))"
          // })
          // tl.to(fst.current,{
          //   background:"linear-gradient(315deg, rgb(12, 10, 24), rgb(106 16 56))",
          // })
          // tl.to(fst.current,{
          //   background:"linear-gradient(315deg, rgb(12, 10, 24), rgb(106 16 56))",
          // })
          // tl.to(fst.current,{
          //   background:"linear-gradient(315deg, rgb(12, 10, 24), rgb(106 16 56))",
          // })
          // tl.to(fst.current,{
          //   background:"linear-gradient(315deg, rgb(12, 10, 24), rgb(106 16 56))",
          // })
          // tl.to(fst.current,{
          //   background:"linear-gradient(315deg, rgb(12, 10, 24), rgb(106 16 56))",
          // })
          // tl.to(fst.current,{
          //   background:"linear-gradient(315deg, rgb(12, 10, 24), rgb(106 16 56))",
          // })
          // tl.to(fst.current,{
          //   background:"linear-gradient(315deg, rgb(12, 10, 24), rgb(106 16 56))",
          // })
          // tl.to(fst.current,{
          //   background:"linear-gradient(315deg, rgb(12, 10, 24), rgb(106 16 56))",
          // })
          // tl.to(fst.current,{
          //   background:"linear-gradient(315deg, rgb(12, 10, 24), rgb(106 16 56))",
          // })
          // tl.to(fst.current,{
          //   background:"linear-gradient(315deg, rgb(12, 10, 24), rgb(106 16 56))",
          // })
          // tl.to(fst.current,{
          //   background:"linear-gradient(315deg, rgb(12, 10, 24), rgb(106 16 56))",
          // })
          gsap.set(fst.current,{
            background:"linear-gradient(135deg, #642a2a, rgb(28, 102, 193))"
          })
          for(let i = 0; i < 20; i++){
            if(i<10){
              tl.to(fst.current,{
                background:`linear-gradient(${135+(0.05*i*180)}deg, #642a2a, rgb(28, 102, 193))`
              })
              continue
            }
              tl.to(fst.current,{
              background:`linear-gradient(${135+(0.05*i*180)}deg, rgb(12, 10, 24), rgb(106 16 56))`
            }) 
                
          }

          tl.to(dotRef.current,{
            top: "70%",
            left:"100%",
          })
          tl.to(dotRef.current,{
            top: "70%",
            left:"100%",
          })
          tl.to(dotRef.current,{
            top: "70%",
            left:"100%",
          })
          
          for(let i = 0; i < 10; i++){
            tl.to(dotRef.current,{
              top: `${70 - 20*0.1*i}%`,
              left:`${100 - 50*0.1*i}%`,
            })
          }
      
          tl.to(dotRef.current,{
            top: "50%",
            left:"50%",
          })

          tl.to(dotRef.current,{
            borderRadius:"100%",
            width: "0.45rem",
            height: "0.42rem",
          })
          
          tl.to(dotRef.current,{
            borderRadius:"0%",
            width: "0.45rem",
            height: "0.42rem",
            backgroundColor:"#d3d3d3",
            onComplete:()=>{
              setText("")
            }
          })

          for(let i = 0; i < 10; i++){
            tl.to(dotRef.current,{
              width:`${150*0.1*i}%`,
              height:`${100*0.1*i}%`,
            })
          }

          
          tl.to(dotRef.current,{
            borderRadius:"0%",
            width:"150%",
            height:"100%",
            backgroundColor:"#d3d3d3",
            onComplete:()=>{
              setText("")
            }
          })
          tl.to(dotRef.current,{
            color: "rgb(82, 82, 82)"
          })

          textArr.forEach((text, index) => {
            tl.to(dotRef.current, {
                onComplete: () => {
                    setText(text)
                }
            })
          })

        //#endregion



        
        ScrollTrigger.create({
            animation:tl,
            trigger: containerRef.current,
            start: 'top top', 
            end: "+=4000 bottom", 
            pin: true,
            // markers: true,
            scrub: true,
            pinSpacing: false, 
          })       

          ScrollTrigger.update()
          

          return ()=>{
            ScrollTrigger.killAll()
          }
    },{scope:containerRef})


    return (
        <div
            ref={containerRef} 
            className="Maincontainer w-screen"
            style={{height:"4000px"}}
        >
            <Clock/>
            <div ref={fst} className='fst w-screen h-screen'>

              <span className="fst-text fst-text1" ref={spanRef1}>
                ScrollTrigger
              </span>
              <span className="fst-text fst-text2"ref={spanRef2}>
                TestorDemo?
              </span>

              <span className="fst-text fst-text3"ref={spanRef3}>
                허리 피세요<div className="fst-text3-dot" ref={dotRef}>{text}</div>
              </span>
        
            </div>
        </div>
        
    )
}



