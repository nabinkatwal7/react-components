import React from 'react';
import Box from "@/Components/ScrollAnimation/Box";
import { Inter } from 'next/font/google'

import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {useEffect} from "react";

const inter = Inter({ subsets: ['latin'] })

function Index() {
    return (
      <div
        className={`flex flex-col justify-around p-24 ${inter.className}`}
      >
        <Box num={1} />
        <Box num={2} />
        <Box num={3} />
      </div>
    );
}

export default Index;