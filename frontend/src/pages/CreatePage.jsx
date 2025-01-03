import { Box, Button, Container, Heading, Input, useColorModeValue, useToast, VStack } from '@chakra-ui/react';
import React from 'react'
import { useState } from 'react';
import { useProductStore } from '../store/product';

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name:"",
    price:"",
    image:"",
  });

  const toast = useToast();

  const {createProduct} = useProductStore();
  const handleAddProduct = async() => {
    const {success, message} = await createProduct(newProduct);

    if(!success){
      toast({
        title: "error",
        description:message,
        status:"error",
        isClosable:true
      })
    }
    else {
      toast({
        title: "success",
        description:message,
        status:"success",
        isClosable:true
      });
    }

    console.log("success: ", success);
    console.log("message: ", message);
    setNewProduct({name:"", price:"", image:""});
  }

  return (
    <>
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Create new product
        </Heading>

        <Box w={"full"} bg={useColorModeValue("white", "gray.800")}
        p={6} rounded={"lg"} shadow={"md"}>

          <VStack spacing={4}>
            <Input 
            placeholder='Product Name'
            name='name'
            onChange={(e) => setNewProduct({...newProduct, name:e.target.value})} 
            value={newProduct.name}
            />

            <Input 
            placeholder='Price'
            name='price'
            type='number'
            onChange={(e) => setNewProduct({...newProduct, price:e.target.value})} 
            value={newProduct.price}
            
            />

            <Input 
            placeholder='Image URL'
            name='image'
            onChange={(e) => setNewProduct({...newProduct, image:e.target.value})} 
            value={newProduct.image}
            
            />

            <Button colorScheme='blue' onClick={handleAddProduct} w='full'>
              Add Product
            </Button>

          </VStack>

        </Box>

      </VStack>
      Create Page

    </Container>

    </>
  )
}

export default CreatePage;