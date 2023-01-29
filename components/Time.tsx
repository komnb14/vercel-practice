import React from 'react';
import {GetStaticProps, NextPage} from "next";

type props = {
    time: string;
}

const Time = ({time}:props) => {
    return (
        <div>
            {time}
        </div>
    );
};

export default Time;
