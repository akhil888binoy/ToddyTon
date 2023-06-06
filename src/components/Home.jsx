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

const headingOptions={
    position : "absolute",
    left : "50%",
    top : "50%",
    transform : "translate(-50%, -50%)",
    textTransform : "uppercase",
    p:"4",
    size:"4x1",
}
const Home = () => {
    const [isMobile] = useMediaQuery("(max-width: 768px)");
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
                Welcome to [Brand Name], your ultimate destination for exquisite non-alcoholic toddy! We take pride in sourcing the finest ingredients from the lush coconut trees of South India, where the rich cultural heritage and natural abundance converge to create a truly exceptional beverage.

At [Brand Name], we have a deep appreciation for the age-old tradition of toddy-making, and we have harnessed this knowledge to curate a unique collection of non-alcoholic toddy blends. Our team of skilled experts carefully selects and handpicks the best coconut trees in the region, ensuring that only the highest quality sap is collected.

With a commitment to authenticity and craftsmanship, we transform the pure sap into delightful non-alcoholic toddy that encapsulates the true flavors of South India. Our meticulous process ensures that every sip you take is a harmonious balance of sweetness, freshness, and the distinctive essence of coconuts.

We believe that everyone should have the opportunity to experience the rich cultural heritage and refreshing taste of toddy, without the presence of alcohol. That's why we specialize in crafting non-alcoholic toddy blends that can be enjoyed by all, making it an ideal choice for individuals of all ages and preferences.

At [Brand Name], we value sustainability and responsible sourcing. We work closely with local farmers and communities to support their livelihoods and promote ethical practices. By choosing our non-alcoholic toddy, you are not only indulging in a delightful beverage but also contributing to the preservation of South India's coconut farming traditions.

Whether you're seeking a refreshing sip on a hot summer day, a unique beverage for a special occasion, or a taste of the tropics, [Brand Name] is here to cater to your cravings. We invite you to embark on a journey of flavors, inspired by the captivating coconut trees of South India.

Join us in celebrating the vibrant culture and flavors of the region with our handcrafted non-alcoholic toddy. Experience the essence of South India in every sip.

[Brand Name] – Where Tradition Meets Taste.
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
            >Services</Heading>
            <Stack
            h='full'
            p='4'
            alignItems={isMobile ? "center" : "flex-start"}
            flexWrap={isMobile ? "wrap" : "nowrap"}
            direction={["column", "row"]} >
                <Image src={img5} h={["40", "400"]} filter={"hue-rotate(-130deg)"} ></Image>
                <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4","16"]} textAlign={"center"}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </Text>
            </Stack>
        </Container>
    </Box>
  )
  }

const MyCarousel = ()=>(
    <Carousel 
        autoPlay 
        infiniteLoop
        interval={1000}
        showStatus={false} 
        showThumbs={false}
        showArrows={false}
        >
            <Box w="full" h={'100vh'}  >
                <Image src={img1} h="full" w={'full'} objectFit={'cover'}/>
                    <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
                        Watch the future
                    </Heading>
                

            </Box>
            <Box w="full" h={'100vh'} >
                <Image src={img2} h="full" w={'full'} objectFit={'cover'} />
                    <Heading bgColor={"whiteAlpha.600"} color={"white"}  {...headingOptions}>
                        Future is gaming
                    </Heading>
            </Box>
            <Box w="full" h={'100vh'} >
                <Image src={img3}  h="full" w={'full'} objectFit={'cover'}/>
                    <Heading bgColor={"whiteAlpha.600"} color={"black"}  {...headingOptions}>
                        Gaming on console
                    </Heading>
                
            </Box>
            <Box w="full" h={'100vh'} >
                <Image src={img4} h="full" w={'full'} objectFit={'cover'} />
                    <Heading bgColor={"whiteAlpha.600"} color={"black"}  {...headingOptions}>
                        Night life is cool
                    </Heading>
            </Box>
    </Carousel>
);

export default Home