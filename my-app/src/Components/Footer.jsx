import { Grid, GridItem, Heading,Text,Center } from '@chakra-ui/react'
import React from 'react'

export default function Footer() {
  return (
    <div>
      <Grid
      mx='5rem'
      templateColumns='repeat(3, 1fr)'
      gap={4}
      >
        <GridItem h='390px'>
            <Heading as='h3' size='md'>INFORMATION</Heading>
            <Heading as='h5'size='sm' color='#7d7d7d' my='4' >About Us</Heading>
            <Heading as='h5'size='sm' color='#7d7d7d' my='4'>Associated Brands</Heading>
            <Heading as='h5'size='sm' color='#7d7d7d'  my='4'>FAQ</Heading>
            <Heading as='h5'size='sm' color='#7d7d7d'  my='4'>Collaborate with Fab Bag</Heading>
            <Heading as='h5'size='sm' color='#7d7d7d' my='4'>Contact Us</Heading>
            <Heading as='h5'size='sm' color='#7d7d7d' my='4'>Return and Refunds</Heading>
            <Heading as='h5'size='sm' color='#7d7d7d' my='4'>Terms and Conditions</Heading>
            <Heading as='h5'size='sm' color='#7d7d7d' my='4'>Privacy Policy</Heading>
        </GridItem>
        <GridItem h='390px'>
            <Heading as='h3' size='md'>CUSTOMER CARE</Heading>
            <Heading as='h5'size='sm' color='#7d7d7d' mt='4' >Call :022-6805-6010</Heading>
            <Heading as='h3' size='sm' mb='4' color='#7d7d7d'>{"(Monday to Friday : 9AM - 7PM"}</Heading>
            <Heading as='h3' size='sm' fontSize='18px' color='#7d7d7d'>Main : crew@fabbag.com</Heading>


        </GridItem>
        <GridItem h='390px'>
            <Heading as='h3' size='md'>NEWSLETTER</Heading>
            <Text as='h5'size='xm' fontSize='14px' color='#7d7d7d' mt='4' >Signup for the latest offers, updates and news</Text>

        </GridItem>
      </Grid>
    </div>
  )
}
