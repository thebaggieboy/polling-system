'use client'

import React, { ReactNode } from 'react'
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
} from '@chakra-ui/react'
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiFilter,
  FiUser
} from 'react-icons/fi'


import { IconType } from 'react-icons'

 
import Link from 'next/link'

 

interface LinkItemProps {
  name: string
  icon: IconType,
  href: string,
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Dashboard', icon: FiUser, href:'/dashboard' },
  { name: 'Events', icon: FiTrendingUp, href:'/events' },
 
  { name: 'Analytics', icon: FiCompass, href:'/analytics' },

  { name: 'Logout', icon: FiStar, href:'l/ogout' },

]
 
export default function SimpleSidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
 <>
 
    <Box  minH="100vh" bg={useColorModeValue('white', 'white')}>
      <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="10" className='bg-gray-100'>
        {/* Data display */}
        <div style={{fontFamily:'Poppins, Sans-serif', lineHeight:'100%', letterSpacing:2}} className=''>
      
            <section className='p-5 bg-gray-100'>
            <button style={{float:'right'}} className="bg-green-800 p-3 text-xs rounded ml-2 text-white">
                        Invite
                    </button>
                    <button style={{float:'right'}} className="bg-green-800 p-3 text-xs rounded text-white">
                       Create Poll
                    </button>
                <div className="p-5 mb-4 " >

<img src="/images/increase.png" style={{height:120}} alt="" />
<div className='flex'>
<span> </span> <span className='font-bold text-xl pt-3 pl-3'>Event Name</span>
</div>
 
 <p className=" text-sm font-semibold mt-2 ml-3">
  13k Members
 </p>

 

 <p className=" text-xs mt-2 ml-3">
   A community connecting lovers of goth clothing
 </p>

 

</div>

            </section>
          <section className='p-10'>
          <h2 className="ml-5 font-bold mb-2 text-2xl">My Polls (1)</h2>
            <div  className="p-10 ml-5 bg-white rounded-lg border border-gray-200 shadow-md">
       <div className="flex justify-between items-center mb-5 text-gray-500">
           <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
               <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
               Poll
           </span>
           <span className="text-sm">14 days ago</span>
       </div>
       <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">Title</a></h2>
    
       <div className="flex justify-between items-center">
   
           <a href="#" className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
               View
               <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
           </a>
       </div>
   </div> 
           
          </section>
        </div>
 
      </Box>
    </Box>
 </>
  )
}

interface SidebarProps extends BoxProps {
  onClose: () => void
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
  <>
    <Box
      bg={useColorModeValue('white', 'black')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      overflowY="auto"
      
      {...rest}>
      <Flex h="90" alignItems="center" mx="8" className=' ' justifyContent="space-between" >
    <div className="m-10 ">
    <img  src="/icons/logo.png" />
    </div>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      
      {LinkItems.map((link) => (
     <div className={link.href =='/events' ? 'bg-green-300 ' : ''}>
      <Link href={link.href}>
          <NavItem key={link.name} style={{color:'black'}} className='text-xs ' icon={link.icon}>
     
          {link.name}
        
        </NavItem>
      </Link>
      </div>
      ))}
    </Box>
  </>
  )
}

interface NavItemProps extends FlexProps {
  icon: IconType
 
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
 <>
    <Box
      as="a"
      href="#"
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
      // {  _hover={{
      //     bg: 'cyan.400',
      //     color: 'white',
      //   }}}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
          //  { _groupHover={{
          //     color: 'white',
          //   }}}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
 </>
  )
}

interface MobileProps extends FlexProps {
  onOpen: () => void
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
 <>
    <Flex
    style={{padding:20}}
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiFilter />
          
        }
      />

    
    </Flex>
 </>
  )
}