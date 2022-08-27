import React from 'react'
// import { Grid, GridItem, Box, Center } from 'swiper'
import { Grid, GridItem, Box, Center, Text, Flex } from '@chakra-ui/react'
import Heading from './Heading'

export default function Subscription() {
    return (
        <div>
            <Heading title="SUBSCRIPTION" />
            <div className='sub-table' >

            </div>
            <Grid ml='23rem'>
                <GridItem align='center' borderWidth='1px' borderColor='#dfe4e6' h='84' w='312px'>

                    <Box mt='3' color='balck'><Text as='b' fontSize='21px' >1 MONTH</Text></Box>
                    <Box>SUBSCRIPTION</Box>

                </GridItem>
                <GridItem align='center' borderWidth='1px' borderColor='#dfe4e6' w='312px' h='84'>
                    <Box mt='3' color='balck'><Text as='b' fontSize='21px' >Rs. 599.00</Text></Box>
                    <Box>/ per month</Box>
                </GridItem>
                <GridItem align='center' borderWidth='1px' borderColor='#dfe4e6' w='312px' h='175'>
                    <Box mt='4' color='#e5b95f'><Text as='b'>ONE TIME PAYMENT</Text></Box>
                    <Box>Rs. 599.00</Box>
                </GridItem >
                <GridItem borderWidth='1px' borderColor='#dfe4e6' w='312px' h='76' bg='orange'>
                    <Flex justify='center' align='center'><Box cursor='pointer' py='2' mt='4' borderRadius='7px' borderWidth='1px' borderColor='white' w='85%'><Center color='white'>ADD TO CART</Center></Box></Flex>


                </GridItem>

            </Grid>
        </div>
    )
}
