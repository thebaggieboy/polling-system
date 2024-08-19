import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Heading, Text, Avatar } from '@chakra-ui/react'
export default function Datacard() {
  return (
    <>
<SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>

  <Card>
    <CardHeader>
      <img src="/icons/Pie shape 2.png" />
      <p size='sm'> Total No. Of Events</p>
      <p size='md' className='font-bold'> 20</p>
    </CardHeader>
    <CardBody>
   
    </CardBody>
  
  </Card>

  <Card>
    <CardHeader>
      <img src="/icons/Pie shape 2.png" />
      <p size='sm'> Total No. Of Polls</p>
      <p size='md' className='font-bold'> 20</p>
    </CardHeader>
    <CardBody>
   
    </CardBody>
  
  </Card>

  <Card>
    <CardHeader>
      <img src="/icons/Pie shape 4.png" />
      <p size='sm'> Total Votes</p>
      <p size='md' className='font-bold'>25</p>
    </CardHeader>
    <CardBody>
   
    </CardBody>

  </Card>
</SimpleGrid>
    </>
  )
}
