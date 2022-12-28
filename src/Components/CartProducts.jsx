import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    // Icon,
    chakra,
    Tooltip,
} from '@chakra-ui/react';
import { Button } from '@chakra-ui/react'
// import {  NavLink } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
// import ProductDetails from '././Routes/ProductDetails';
//   import axios from 'axios';
function CartProducts({data,fun}) {
    // const Navigate=useNavigate();

    

    return (
        <Flex p={50} w="full" alignItems="center" justifyContent="center">
            <Box>
                { }
            </Box>

            <Box
                bg={useColorModeValue('white', 'gray.800')}
                maxW="sm"
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                position="relative">
                {data && (
                    <Circle
                        size="10px"
                        position="absolute"
                        top={2}
                        right={2}
                        bg="red.200"
                    />
                )}

                <Image
                    src={data.imageURL}
                    alt={`Picture of ${data.title}`}
                    roundedTop="lg"
                />

                <Box p="6">
                    <Box d="flex" alignItems="baseline">
                        {data && (
                            <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                                New
                            </Badge>
                        )}
                    </Box>
                    <Flex mt="1" justifyContent="space-between" alignContent="center">
                        <Box
                            fontSize="2xl"
                            fontWeight="semibold"
                            as="h4"
                            height={"40px"}
                            width={"90%"}
                            overflow={"hidden"}
                            lineHeight="tight"
                            isTruncated>
                            {data.title}
                        </Box>
                        <Tooltip
                            label="Remove from Cart"
                            bg="white"
                            placement={'top'}
                            color={'gray.800'}
                            fontSize={'1.2em'}>
                            <chakra.a   display={'flex'}>
                                <Button onClick={() =>fun(data.id) } colorScheme='red'>Remove</Button>
                            </chakra.a>
                        </Tooltip>
                    </Flex>

                    <Flex justifyContent="space-between" alignContent="center">
                        <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
                            <Box style={{ fontWeight: 500, fontSize: "25px" }} as="span" color={'gray.600'} fontSize="lg">
                                ₹
                            </Box>
                            {" " + data.price}
                        </Box>
                    </Flex>
                    {/* <Box style={{width:"40%",margin:"auto",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                        <Button onClick={()=>setCount(count+1)} colorScheme='green'>+</Button>
                        {count}
                        <Button onClick={()=>count>1?setCount(count-1):count} colorScheme='green'>-</Button>
                        </Box>
                        <Box style={{textAlign:"center"}}>
                        
                            {"Total Price : "+count*data.price}
                        </Box> */}
                </Box>
            </Box>
        </Flex>
    );
}

export default CartProducts;



