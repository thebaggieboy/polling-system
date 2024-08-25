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
      <Box ml={{ base: 0, md: 60 }} p="10" className='bg-gray-100'>
        {/* Data display */}
        <section className="bg-white">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-black">Payments tool for software companies</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl  text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-black rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get started
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Speak to Sales
            </a> 
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            hbubub
        </div>                
    </div>
</section>

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