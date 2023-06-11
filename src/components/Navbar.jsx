import React from 'react'
import { Radio , Icon } from '@chakra-ui/react' 
import { Drawer, Flex} from '@chakra-ui/react'
import { DrawerOverlay  , DrawerContent, DrawerHeader, DrawerBody , Button , Stack, RadioGroup , useDisclosure} from '@chakra-ui/react'
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { BsList } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { VStack , HStack } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [displayText, setDisplayText] = useState('TODDYTON');

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the displayText state with the new text
      setDisplayText(displayText === 'TODDYTON' ? 'കള്ള്TON' : 'TODDYTON');
    }, 2000); // Change text every 2 seconds

    return () => {
      // Clear the interval when the component is unmounted
      clearInterval(interval);
    };})
  return (
    <>
    <Button pos={"fixed"}
    top={"4"}
    left={"4"}
    colorScheme='green'
    padding={"0"}
    width={"70px"}
    height={"10"}
    zIndex={"overlay"}
    onClick={onOpen}>
    <Icon as={BsList} boxSize={2} mr={2} />
      Menu
    </Button>
    <Drawer placement={'top'} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader >
          <Heading fontfamily="arial"  >{displayText}</Heading>
          </DrawerHeader>
        <DrawerBody>
        <HStack alignItems={'flex-start'}>
                    <Button onClick={onClose}  variant={"ghost"} colorScheme={'green'}>
                        <Link to={'/About Us'}>About Us</Link>
                    </Button>
                    <Button onClick={onClose}  variant={"ghost"} colorScheme={'green'}>
                        <Link to={'/videos'}>Items available</Link>
                    </Button>
                    <Button onClick={onClose}  variant={"ghost"} colorScheme={'green'}>
                        <Link to={'/videos?category=free'}>Free Videos</Link>
                    </Button>
                    <Button onClick={onClose}  variant={"ghost"} colorScheme={'green'}>
                        <Link to={'/upload'}>Upload Video</Link>
                    </Button>
                </HStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  </>
  )
}

export default Navbar