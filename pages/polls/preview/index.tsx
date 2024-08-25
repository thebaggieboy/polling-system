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
  { name: 'Polls', icon: FiCompass, href:'/polls' },
  { name: 'Analytics', icon: FiCompass, href:'/analytics' },

  { name: 'Logout', icon: FiStar, href:'logout' },

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
      <Box ml={{ base: 0, md: 60 }} p="10" className='bg-gray-200'>
        {/* Data display */}
    

<ul className="grid w-full gap-6 md:grid-cols-2 p-10">
<h2 className="mb-5 text-lg font-bold text-gray-900">How much do you expect to use each month?</h2> <br />


    <li>
        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" className="hidden peer" required />
        <label htmlFor="hosting-small" className="inline-flex items-center justify-between w-full p-5 text-white bg-green-400 border border-gray-200 rounded-lg cursor-pointer hover:text-gray-300 border-black peer-checked:text-gray-400 peer-checked:border-white  hover:text-gray-600  text-white bg-green-700 hover:bg-green-900">                           
            <div className="block">
                <div className="w-full text-xs font-semibold">0-50 MB</div>
                <div className="w-full">Good for small websites</div>
            </div>
            <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </label>
    </li>
    <li>
        <input type="radio" id="hosting-big" name="hosting" value="hosting-big" className="hidden peer"/>
        <label htmlFor="hosting-big" className="inline-flex items-center justify-between w-full p-5 text-white bg-green-400 border border-gray-200 rounded-lg cursor-pointer hover:text-gray-300 border-black peer-checked:text-gray-400 peer-checked:border-white  hover:text-gray-600  text-white bg-green-700 hover:bg-green-900">                           
            <div className="block">
                <div className="w-full text-xs font-semibold">0-50 MB</div>
                <div className="w-full">Good for big websites</div>
            </div>
            <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </label>
    </li>

    <li>
        <input type="radio" id="hosting-big-2" name="hosting" value="hosting-big" className="hidden peer"/>
        <label htmlFor="hosting-big-2" className="inline-flex items-center justify-between w-full p-5 text-white bg-green-400 border border-gray-200 rounded-lg cursor-pointer hover:text-gray-300 border-black peer-checked:text-gray-400 peer-checked:border-white  hover:text-gray-600  text-white bg-green-700 hover:bg-green-900">                           
            <div className="block">
                <div className="w-full text-xs font-semibold">0-50 MB</div>
                <div className="w-full">Good for big websites</div>
            </div>
            <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </label>
    </li> <li>
        <input type="radio" id="hosting-big-3" name="hosting" value="hosting-big" className="hidden peer"/>
        <label htmlFor="hosting-big-3" className="inline-flex items-center justify-between w-full p-5 text-white bg-green-400 border border-gray-200 rounded-lg cursor-pointer hover:text-gray-300 border-black peer-checked:text-gray-400 peer-checked:border-white  hover:text-gray-600  text-white bg-green-700 hover:bg-green-900">                           
            <div className="block">
                <div className="w-full text-xs font-semibold">0-50 MB</div>
                <div className="w-full">Good for big websites</div>
            </div>
            <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </label>
    </li>
</ul>


  <br/>

      
 
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
      bg={useColorModeValue('black', 'black')}
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
     <div className={link.href =='/events' ? 'bg-green-600 ' : ''}>
      <Link href={link.href}>
          <NavItem  key={link.name} style={{color:'white'}} className='text-xs ' icon={link.icon}>
     
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