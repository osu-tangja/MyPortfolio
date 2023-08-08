import React from "react";
import timeline from "../data/timeline";
import TimelineItem from "./timeLineItem";
import Title from "./title";
function Timeline(){
    return(
        <div className="flex felx-col md:flex-row justify-center my-20 ">
            <div className='w-full md:w-7/12'>
                <Title>Timeline</Title>
                {timeline.map(item => (
                    <TimelineItem
                        year={item.year}
                        title={item.title}
                        duration={item.duration}
                        details={item.details}
                    />
            ))}
            </div>
        </div>
    )
}

export default Timeline