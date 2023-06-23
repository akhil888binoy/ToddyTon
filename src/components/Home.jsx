import { Box } from '@chakra-ui/react'
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import img5 from "../assets/5.png";
import { Carousel } from 'react-responsive-carousel';
import { Image } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Stack, useMediaQuery } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react';
import { ButtonGroup } from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react';
import { useEffect , useState} from 'react';
import { ScaleFade } from '@chakra-ui/react';
import faqData from '../assets/faq.json';

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import {
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from '@chakra-ui/react'

const steps = [
  { title: ' Step 1: Tree Tapping', description: 'Skilled toddy tappers climb coconut trees in the lush plantations of Kerala. With expertise and precision, they carefully extract the sap, known as "Kallu," from the coconut flower buds.' },
  { title: 'Step 2: Collection and Fermentation', description: 'The fresh sap is collected in specially designed containers. It undergoes a natural fermentation process, allowing the flavors to develop and the mild intoxicating effect to emerge.' },
  { title: 'Step 3: Craftsmanship and Quality', description: 'At Toddyton, we pride ourselves on our craftsmanship. Our dedicated artisans carefully monitor the fermentation process, ensuring the perfect balance of flavors and the highest quality in every bottle.' },
  { title: 'Step 4: Filtering and Bottling', description: 'Once the fermentation process is complete, the toddy is meticulously filtered to remove impurities while preserving its natural essence. It is then bottled with utmost care, ready to be enjoyed.' },
  { title: 'Step 5: Authentic Kerala Experience', description: 'With every sip of Toddyton, you are transported to the vibrant culture of Kerala. Experience the authentic flavors that have delighted locals for generations, and immerse yourself in the essence of this beloved traditional beverage.' },
  { title: 'Step 6: Unforgettable Moments', description: 'Whether you choose our Fresh Toddy or our Fermented Toddy, Toddyton promises to deliver a memorable taste experience. Share moments of joy, celebration, and togetherness with friends and loved ones, making lasting memories with each sip.' },
]


const headingOptions={
    position : "absolute",
    left : "50%",
    top : "50%",
    transform : "translate(-50%, -50%)",
    textTransform : "uppercase",
    p:"4",
    size:"4x1",
}

const stepheadingOptions={
  position : "absolute",
  left : "50%",
  top : "30%",
  transform : "translate(-50%, -50%)",
  textTransform : "uppercase",
  p:"4",
  size:"4x1",
}


const buttonOptions={
    position:"absolute",
    left : "50%",
    top : "80%",
    transform : "translate(-50%, -50%)",
    textTransform : "uppercase",
    p:"4",
    size:"4x1",

}
const bodyOptions={
  position:"absolute",
  left : "50%",
  top : "50%",
  transform : "translate(-50%, -50%)",
  textTransform : "uppercase",
  p:"4",
  size:"4x1",

}

const Home = () => {

  const [faqItems, setFaqItems] = useState([]);
  useEffect(() => {
    setFaqItems(faqData);
  }, []);

  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  })

    const [isMobile] = useMediaQuery("(max-width: 768px)");
    const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Adjust the threshold value to control when the fade should happen
      const threshold = 3;

      // Calculate the scroll position at which the fade should happen
      const fadePosition = windowHeight * threshold;

      // Update the isOpen state based on the scroll position
      setIsOpen(scrollPosition > fadePosition);
    };

    // Add the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    
    <Box>
        <MyCarousel>
        </MyCarousel>
        <Container 
        minH={"100vh"}  
        maxW={"container.xl"}
        p="16">
            <Heading 
            textTransform={"uppercase"}
            py="2"
            w={"fit-content"}
            borderBottom={"2px solid"} 
            m="auto"
            >About Us</Heading>
            <Stack
            h='full'
            p='4'
            alignItems={isMobile ? "center" : "flex-start"}
            flexWrap={isMobile ? "wrap" : "nowrap"}
            direction={["column", "row"]} >
                <Image src={img5} h={["40", "400"]} filter={"hue-rotate(-130deg)"} ></Image>
                <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4","16"]} textAlign={"center"}>
                Welcome to ToddyTon, your ultimate destination for exquisite non-alcoholic toddy! We take pride in sourcing the finest ingredients from the lush coconut trees of South India, where the rich cultural heritage and natural abundance converge to create a truly exceptional beverage.

At ToddyTon, we have a deep appreciation for the age-old tradition of toddy-making, and we have harnessed this knowledge to curate a unique collection of non-alcoholic toddy blends. Our team of skilled experts carefully selects and handpicks the best coconut trees in the region, ensuring that only the highest quality sap is collected.

With a commitment to authenticity and craftsmanship, we transform the pure sap into delightful non-alcoholic toddy that encapsulates the true flavors of South India. Our meticulous process ensures that every sip you take is a harmonious balance of sweetness, freshness, and the distinctive essence of coconuts.

We believe that everyone should have the opportunity to experience the rich cultural heritage and refreshing taste of toddy, without the presence of alcohol. That's why we specialize in crafting non-alcoholic toddy blends that can be enjoyed by all, making it an ideal choice for individuals of all ages and preferences.

At ToddyTon, we value sustainability and responsible sourcing. We work closely with local farmers and communities to support their livelihoods and promote ethical practices. By choosing our non-alcoholic toddy, you are not only indulging in a delightful beverage but also contributing to the preservation of South India's coconut farming traditions.

Whether you're seeking a refreshing sip on a hot summer day, a unique beverage for a special occasion, or a taste of the tropics, ToddyTon is here to cater to your cravings. We invite you to embark on a journey of flavors, inspired by the captivating coconut trees of South India.

Join us in celebrating the vibrant culture and flavors of the region with our handcrafted non-alcoholic toddy. Experience the essence of South India in every sip.

ToddyTon – Where Tradition Meets Taste.
                </Text>
            </Stack>
        </Container>
        <Container 
        minH={"100vh"}  
        maxW={"container.xl"}
        p="16">
            <Heading 
            textTransform={"uppercase"}
            py="2"
            w={"fit-content"}
            borderBottom={"2px solid"} 
            m="auto"
            >Brewed in TODDYTON</Heading>
            <Stack
            h='full'
            p='4'
            justifyContent={"center"}
            alignItems={isMobile ? "center" : "center"}
            flexWrap={isMobile ? "wrap" : "nowrap"}
            direction={["column", "row"]} >
                <HStack alignItems={isMobile ? "center" : "center"} flexWrap={isMobile ? "wrap" : "nowrap"}>
                    <Card maxW='sm'>
                    <CardBody>
                        <Image
                        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                        <Heading size='md'>Fresh Toddy </Heading>
                        <Text>
                        Immerse yourself in the pure delight of our "Kallu" or Fresh Toddy, crafted from the unfermented sap of coconut trees. With its sweet taste and gentle intoxicating essence, it offers a unique and refreshing beverage that is deeply rooted in Kerala's rich cultural heritage. Discover the essence of tradition in every sip.
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                            $450
                        </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue'>
                            Buy now
                        </Button>
                        <Button variant='ghost' colorScheme='blue'>
                            Add to cart
                        </Button>
                        </ButtonGroup>
                    </CardFooter>
                    </Card>
<Card maxW='sm' >
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3' >
      <Heading size='md'> Fermented Toddy </Heading>
      <Text>
      For those seeking a bolder adventure, our "Kallu Pani" or Fermented Toddy awaits. Through a meticulous fermentation process, it transforms into a spirited elixir, showcasing a higher alcohol content. Perfect for culinary experimentation or creating tantalizing cocktails, Kallu Pani adds a touch of Kerala's essence to any libation.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>



                </HStack>

            </Stack>
        </Container>
        <Container 
        minH={"100vh"}  
        maxW={"container.xl"}
        
        
        p="16">
            <Heading 
            textTransform={"uppercase"}
            py="2"
            w={"fit-content"}
            borderBottom={"2px solid"} 
            m="auto"
            >How we brew it ?</Heading>
            <Stack
            h='full'
            p='4'
            alignItems={isMobile ? "center" : "center"}
            flexWrap={isMobile ? "wrap" : "nowrap"}
            direction={["column", "row"]} >
  <HStack alignItems={isMobile ? "center" : "center"}
            flexWrap={isMobile ? "wrap" : "nowrap"} >
    <Stepper index={activeStep} orientation='vertical' height='200px' gap='7' marginBottom={isMobile ? "1200%" : "380%"}>
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>
          <ScaleFade initialScale={0.9} in={isOpen}>
          <Box w="full" h={'100vh'} >
          
            <Image src={img3}  h="full" w={'full'} objectFit={'fill'} borderRadius={"2xl"}/>
            <StepTitle  {...stepheadingOptions} textColor="yellow" >{step.title} </StepTitle>
            <StepDescription  {...bodyOptions} textColor="yellow" backgroundColor="white.alpha600">{step.description}</StepDescription>
          </Box>
          </ScaleFade>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
              </HStack>
    
                
            </Stack>
        </Container>
        <Container 
        minH={"100vh"}  
        maxW={"container.xl"}
        p="16">
            <Heading 
            textTransform={"uppercase"}
            py="2"
            w={"fit-content"}
            borderBottom={"2px solid"} 
            m="auto"
            >FAQ</Heading>
            <Stack
            h='full'
            p='4'
            justifyContent={"center"}
            alignItems={isMobile ? "center" : "center"}
            flexWrap={isMobile ? "wrap" : "nowrap"}
            direction={["column", "row"]} >
                <HStack alignItems={isMobile ? "center" : "center"} flexWrap={isMobile ? "wrap" : "nowrap"}>
    <Card maxW='xl' borderRadius={"3xl"} >
  <CardBody borderRadius={"3xl"}>
    <Stack mt='6' spacing='3'>
    <Accordion allowToggle>
      {faqItems.map((item, index) => (
        <AccordionItem key={index}>
          <h2>
            <AccordionButton _expanded={{bg:"#3182CE", color:"white"}}>
              <Box as="span" flex='1' textAlign='left'>
                {item.question}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {item.answer}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>

     
    </Stack>
  </CardBody>
</Card>
                </HStack>

            </Stack>
        </Container>
    </Box>
  )
  }

const MyCarousel = ()=>(

    <Carousel 
        autoPlay 
        infiniteLoop
        interval={10000}
        showStatus={false} 
        showThumbs={false}
        showArrows={false}
        >
            <Box w="full" h={'100vh'}  >
                <Image src={img1} h="full" w={'full'} objectFit={'cover'}/>
                <Heading  textColor={"white"} fontSize={"200px"} {...headingOptions}> ToddyTon </Heading>
                    <Button backgroundColor={"blackAlpha.600"} textColor={"white"}  {...buttonOptions} > Dive In </Button>
                

            </Box>
            <Box w="full" h={'100vh'} >
                <Image src={img2} h="full" w={'full'} objectFit={'cover'} />
                <Heading  textColor={"black"} fontSize={"200px"} {...headingOptions}> ToddyTon </Heading>
                    <Button bgColor={"whiteAlpha.600"} color={"black"}  {...buttonOptions}>
                        Dive In 
                    </Button>
            </Box>
            <Box w="full" h={'100vh'} >
                <Image src={img3}  h="full" w={'full'} objectFit={'cover'}/>
                <Heading  textColor={"yellow"} fontSize={"200px"} {...headingOptions}  > ToddyTon </Heading>
                    <Button backgroundColor={"blackAlpha.600"} textColor={"white"}  {...buttonOptions} > Dive In </Button>
                    
            </Box>
    </Carousel>
);




export default Home