import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Heading, Text, Avatar } from '@chakra-ui/react'
export default function Datacard() {
  return (
    <>
  <div className="p-10">
  <h2 className='text-2xl font-bold'>Welcome Admin</h2>
  </div>
<SimpleGrid spacing={3} className='p-10' templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>

  <Card>
    <CardHeader>
  
      <h2 className='font-semibold text-lg'> Total Events</h2>
      <p className='font-bold text-xl'> 20</p>
    </CardHeader>
    <CardBody>
   
    </CardBody>
  
  </Card>

  <Card>
    <CardHeader>
      
      <h2 className='font-semibold text-lg'> Total Polls</h2>
      <p className='font-bold text-xl'> 20</p>
    </CardHeader>
    <CardBody>
   
    </CardBody>
  
  </Card>

  <Card>
    <CardHeader>
    
      <h2 className='font-semibold text-lg'> Total Votes</h2>
      <p className='font-bold text-xl'> 20</p>
    </CardHeader>
    <CardBody>
   
    </CardBody>

  </Card>
</SimpleGrid>
    </>
  )
}
