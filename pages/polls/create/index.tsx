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

import NavBar from './Navbar'

import Link from 'next/link'

import EventList from "../../components/EventList"


interface LinkItemProps {
  name: string
  icon: IconType,
  href: string,
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Dashboard', icon: FiUser, href:'/dashboard' },
  { name: 'Events', icon: FiTrendingUp, href:'/events' },
 
  { name: 'Analytics', icon: FiCompass, href:'/analytics' },

  { name: 'Logout', icon: FiStar, href:'logout' },

]


export default function SimpleSidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const addChoice = ()=>{}

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
        <a href="#" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Events</a>
      </div>
    </li>
    <li aria-current="page">
      <div class="flex items-center">
        <svg class="rtl:rotate-180  w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
        <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Create</span>
      </div>
    </li>
  </ol>
</nav>

  <br/>

        <h1 className='font-bold text-2xl '>New Poll</h1> <br/>
        <form action="">
        <div class="mb-5">
        <label for="large-input" class="block mb-2 text-sm font-medium text-black">Event Name</label>
        <input type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg disabled bg-gray-50 text-base"/> <br/>
      <label for="large-input" class="block mb-2 text-sm font-medium text-black">Poll Title</label>
      <input type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base"/> <br/>
      <label for="large-input" class="block mb-2 text-sm font-medium text-black">Choice</label>
      <textarea id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base"></textarea> <br/>
   
      <a href="" style={{float:'right'}} className="bg-green-800 rounded p-3 text-xs text-white"> +Add Choice</a>

  </div>
        </form>
 
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
     <div className={link.href =='/polls' ? 'bg-green-300 ' : ''}>
      <Link href={link.href}>
          <NavItem  key={link.name} style={{color:'black'}} className='text-xs ' icon={link.icon}>
     
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