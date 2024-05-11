import {
  Avatar,
  Badge,
  Box,
  Card,
  Flex,
  HStack,
  Heading,
  Image,
  Stack,
  Tag,
  Text,
} from '@chakra-ui/react'
import Head from 'next/head'
import { useRef } from 'react'

type Props = {}

export default function Page({}: Props) {
  const cardRef = useRef(null)
  return (
    <Box>
      <Head>
        <title>Frontend Mentor | Blog preview card</title>
      </Head>
      <Flex
        minH={'100vh'}
        bg={'primary.yellow'}
        align={'center'}
        justify={'center'}
      >
        <Box position={'relative'}>
          <Card
            ref={cardRef}
            w={'sm'}
            p={6}
            borderRadius={'2xl'}
            border={'1px solid'}
            zIndex={1}
          >
            <Image
              src={'./images/illustration-article.svg'}
              alt="illustration"
              borderRadius={'2xl'}
            />
            <Box mt={5}>
              <Tag w={'fit-content'} bg={'primary.yellow'} fontWeight={800}>
                Learning
              </Tag>
              <Text mt={4} fontSize={'sm'}>
                Published 21 Dec 2023
              </Text>
              <Heading
                mt={5}
                as={'h2'}
                fontSize={'xl'}
                fontWeight={800}
                cursor={'pointer'}
                transition={'color 0.1s easy-in-out'}
                _hover={{ color: 'primary.yellow' }}
              >
                HTML & CSS foundations
              </Heading>
              <Text mt={5} color={'neutral.gray'}>
                These languages are the backbone of every website, defining
                structure, content, and presentation.
              </Text>
              <HStack mt={6}>
                <Avatar src={'./images/image-avatar.webp'} size={'sm'} />
                <Text fontSize={'sm'} fontWeight={800}>
                  Greg Hooper
                </Text>
              </HStack>
            </Box>
          </Card>
          <Box
            top={2}
            left={2}
            borderRadius={'2xl'}
            zIndex={0}
            position={'absolute'}
            height={'full'}
            width={'full'}
            bg={'neutral.black'}
          />
        </Box>
      </Flex>
    </Box>
  )
}
/* 
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- displays site properly based on user's device -->

  <link rel="icon" type="image/png" sizes="32x32" href="./assets/images/favicon-32x32.png">
  
  <title>Frontend Mentor | Blog preview card</title>

  <!-- Feel free to remove these styles or customise in your own stylesheet 👍 -->
  <style>
    .attribution { font-size: 11px; text-align: center; }
    .attribution a { color: hsl(228, 45%, 44%); }
  </style>
</head>
<body>

  Learning

  Published 21 Dec 2023

  HTML & CSS foundations

  These languages are the backbone of every website, defining structure, content, and presentation.

  Greg Hooper
  
  <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Your Name Here</a>.
  </div>
</body>
</html>
*/
