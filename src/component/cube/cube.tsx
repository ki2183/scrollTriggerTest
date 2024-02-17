import { useEffect, useRef, useState } from "react";
import "./cube.css"
import gsap from "gsap";

type CubeInProp = {
    cubeRef: React.RefObject<HTMLDivElement>
    size: number,
    fstColor : string,
    secColor : string,
    trdColor : string,
}

export function CubeIn({
    size,
    cubeRef,
    fstColor,
    secColor,
    trdColor
}:CubeInProp){

    // const size = 264;
    const containerRef = useRef<HTMLDivElement>(null)

    const containerStyle = {
        width:size +'px',
        height:size +'px',
    }

    //** style **/
    //#region

    const fstDiv1Style = {
        borderRight:`${size/2}px solid` + fstColor,
        borderTop:`${size/4}px solid transparent`,

    }
    const fstDiv2Style = {
        borderRight:`${size/2}px solid` + fstColor,
        borderBottom:`${size/4}px solid transparent`,
    }  
    const secDiv1Style = {
        borderLeft:`${size/2}px solid` + secColor,
        borderTop:`${size/4}px solid transparent`,
    }
    const secDiv2Style = {
        borderLeft:`${size/2}px solid` + secColor,
        borderBottom:`${size/4}px solid transparent`,
    }
    const trdDiv1Style = {
        borderRight:`${size/2}px solid` + trdColor,
        borderTop:`${size/4}px solid transparent`,
        borderBottom:`${size/4}px solid transparent`,

    }
    const trdDiv2Style = {
        borderLeft:`${size/2}px solid` + trdColor,
        borderTop:`${size/4}px solid transparent`,
        borderBottom:`${size/4}px solid transparent`,

    }

    //#endregion

    return(
        <div className="cube-container" ref={cubeRef} style={containerStyle}>
            <div className="cube-fst" style={containerStyle}>
                <div>
                    <div style={fstDiv1Style}/>
                    <div style={fstDiv2Style}/>
                </div>
            </div>
            <div className="cube-sec" style={containerStyle}>
                <div>
                    <div style={secDiv1Style}/>
                    <div style={secDiv2Style}/>
                </div>
            </div>
            <div className="cube-trd" style={containerStyle}>
                <div>
                <div style={trdDiv1Style}/>
                    <div style={trdDiv2Style}/>
                </div>
            </div>
        </div>
    )
}