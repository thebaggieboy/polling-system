import React, { useState, useEffect } from "react";
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'

  import ChartOne from '@/components/Charts/ChartOne'
  import ChartTwo from '@/components/Charts/ChartTwo'
  import ChartThree from '@/components/Charts/ChartThree'
  import ChartFour from '@/components/Charts/ChartFour'
   
const data = [
  {id:1, community_name: "2024 TechNg Award", members:[], logo:'', description:'Award for top tech companies'},
  {id:2, community_name: "Blockchain & AI", members:[], logo:'', description:'Conference for innovation using blockchain and ai'},

]
export default function AnalyticsList() {
  const router = useRouter()
  const [joinText, setJoinText] = useState("Join")
  const [communityClicked, setCommunityClicked] = useState(false) 

  const joinCommunity = ()=>{
    console.log("Join Community")
    setJoinText("Joined")
  }

  return (
    <>
<div class='p-10'>
    


    <nav class="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li class="inline-flex items-center">
          <a href="#" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
            <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
            </svg>
            Home
          </a>
        </li>
        <li>
          <div class="flex items-center">
            <svg class="rtl:rotate-180 block w-3 h-3 mx-1 text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <a href="#" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Analytics</a>
          </div>
        </li>
        <li aria-current="page">
          <div class="flex items-center">
            <svg class="rtl:rotate-180  w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">All</span>
          </div>
        </li>
      </ol>
    </nav>
    
      <br/>
    
    <Link href="/events/create" style={{float:'right'}} className="bg-green-800 text-xs rounded p-3 text-white">Upgrade Plan</Link>
 
    </div> 


    <div className="p-10 grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-12">
          <ChartFour />
        </div>
        <ChartOne />
        <ChartTwo />
        <ChartThree />
      </div>
 
    </>
  )
}
