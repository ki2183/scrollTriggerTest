import { useEffect, useRef } from "react"
import "./nav.css"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { CubeIn } from "../cube/cube"

export default function Nav(){
    const cubeRef = useRef<HTMLDivElement>(null)
    const cubeMiniRef = useRef<HTMLDivElement>(null)

    const fstColor = "#96153d";
    const secColor = "#e62361";
    const trdColor ="#da205a";

    const fstColorsm = "#20da8d";
    const secColorsm = "#5ae623";
    const trdColorsm ="#839615";

    // useEffect(()=>{
    //     gsap.to(cubeMiniRef.current,{
    //         rotate:"180deg"
    //     })
    // },[])

    return(
        <div className="navi">
            
            {/* <CubeIn 
                    size={50}
                    cubeRef={cubeRef}
                    fstColor={fstColor}
                    secColor={secColor}
                    trdColor={trdColor}
                  />
            <CubeIn 
                    size={20}
                    cubeRef={cubeMiniRef}
                    fstColor={fstColorsm}
                    secColor={secColorsm}
                    trdColor={trdColorsm}
                  /> */}
            <div className="navi-in">
                <div>
                    
                  </div>
                <div className="flex items-center gap-8">
                    <div className="span-container flex item-center gap-3 text-gray-200 text-sm">
                        <OptionButton text="Services"/>
                        <OptionButton text="Method"/>
                        <OptionButton text="Project"/>
                    </div>  
                    <div>
                        <button className="contact text-sm bg-black">
                            Contact us
                        </button>
                    </div> 
                </div>
            </div>
        </div>
    )
}

type OptionButtonProps = {
    text:string
}

function OptionButton({text}:OptionButtonProps){

    const boxRef = useRef<HTMLDivElement>(null)
    const borderRef = useRef<HTMLDivElement>(null)

    useEffect(()=>{
        gsap.set(borderRef.current, {  
            x:"-100%",
        });
    },[])

    useEffect(() => {
        const element = boxRef.current;
    
        const handleMouseEnter = () => {
          gsap.to(borderRef.current, {  
            duration: 0.2, 
            x:"0",
            ease:"bounce.inOut"
        });
        };
    
        const handleMouseLeave = () => {
            const tl = gsap.timeline()
           
            tl.to(borderRef.current,{
                x:"100%",
                duration: 0.2, 
                ease:"bounce.inOut"
            }).to(borderRef.current,{
                x:"-100%",
                duration:0
            })

            tl.play()
        };
    
        element?.addEventListener('mouseenter', handleMouseEnter);
        element?.addEventListener('mouseleave', handleMouseLeave);
    
        return () => {
          element?.removeEventListener('mouseenter', handleMouseEnter);
          element?.removeEventListener('mouseleave', handleMouseLeave);
        };
      }, [boxRef]);


    return (
        <div className="optionbutton" ref={boxRef} >
            <span>
                {text}
            </span>
            <div className="optionbutton_border" ref={borderRef}/>
        </div>
        
    )
}