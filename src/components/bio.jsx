import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import Info from "./cards"

const Bio = () => {
    return (
            <div className='large_block'>
                <div className='bio_content'>
                    <img src="/me.png" style={{width: "50%", maxWidth: "300px", borderRadius: "30%", aspectRatio: "1/1", border: "10px solid var(--fg)" }} />
                    <div style={{ alignContent: "left", alignContent: "left", textAlign: "left", display: "flex", justifyContent: "flex-start", marginTop: "50px"}}>
                        Hello. I'm Artem - backend developer and freelancer. I'm 18 years old, studying in 11th grade at school and 5 years at programming academy.
                        <FontAwesomeIcon icon={faRocket} className='text_emoji' style={{ marginTop: "-50px", marginLeft: "30px" }} />
                    </div>
                    <br />
                </div>
                <div className='spacer'></div>
                <Info />
            </div>
    )
}

export default Bio
