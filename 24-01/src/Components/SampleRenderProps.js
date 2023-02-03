import React from "react";
import RederPropsComponent from "./RenderPropsComponents";
import {useCookies} from 'react-cookie'
const SampleRenderProps=()=> {
    const [cookies, setCookie, removeCookie] = useCookies(["name"]);
    console.log(cookies)
    
        return (
            <RederPropsComponent
            render={()=>{
                return (
                    <div>
                        <h2 onClick={(e)=>setCookie("age", 22)}>This is from render props</h2>
                    </div>
                );
            }}
            />
        )
    }

export default SampleRenderProps