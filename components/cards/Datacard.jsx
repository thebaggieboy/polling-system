import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Heading, Text, Avatar } from '@chakra-ui/react'
export default function Datacard() {
  return (
    <>
<section className="">
<div className="p-10">
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
            <a href="#" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Dashboard</a>
          </div>
        </li>
     
      </ol>
    </nav>
</div>
<SimpleGrid spacing={4} className='p-10' templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>

<div className='shadow-sm shadow-black block border rounded-lg bg-gray-100 p-10 bg-surface-dark  shadow-secondary-1 text-surface"'>
  <h2 className='font-semibold text-lg'> Total Events</h2>
  <p className='font-bold text-xl'> 20</p>
  </div>

  <div className='shadow-sm shadow-black block border rounded-lg p-10 bg-gray-100 bg-surface-dark  shadow-secondary-1 text-surface"'>
  <h2 className='font-semibold text-lg'> Total Polls</h2>
  <p className='font-bold text-xl'> 20</p>
  </div>

  <div className='shadow-sm shadow-black block border rounded-lg p-10 bg-gray-100 bg-surface-dark  shadow-secondary-1 text-surface"'>
  <h2 className='font-semibold text-lg'> Total Votes</h2>
  <p className='font-bold text-xl'> 20</p>
  </div>
</SimpleGrid>
</section>
    </>
  )
}
