'use client'

import { useEffect } from "react";

interface Props {
    message: string
}

const HelloWorld = ({ message }: Props) => {
    console.log(message);

    // useEffect(() => {
    //   console.log(message);
      
    // }, [])
    

    return (
        <div>HelloWorld {message}</div>
    )
}

export default HelloWorld