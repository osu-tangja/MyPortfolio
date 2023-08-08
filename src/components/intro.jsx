import React from "react";

function Intro(){
    return(
        <div className = "flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className = "text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Jack Tang</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Computer Science Major</p>
            <p className="text-sm max-w-xl mb-6 font-bold">
                I am a Oregon State University graduate major in Computer Science Data Analysis. This is my portfolio for all the coding projects I have done thoughout college and free time.
                <br />
                Github --{' '}
                <a 
                    href ="https://github.com/osu-tangja"
                    target="_blank"
                    className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
                    rel="noreferrer noopener"
                > GitHub</a>
                <br />
                LinkedIn --{' '}
                <a 
                    href =""
                    target="_blank"
                    className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
                    rel="noreferrer noopener"
                > LinkedIn</a>

                </p>
            
        </div>
    )
}

export default Intro