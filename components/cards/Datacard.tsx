import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Heading, Text, Avatar } from '@chakra-ui/react'
export default function Datacard() {
  return (
    <>
<section className="p-10">
   
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
