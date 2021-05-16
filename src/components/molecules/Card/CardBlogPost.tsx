import React from 'react';
import NextLink from 'next/link';
import {
  AspectRatio,
  Box,
  Flex,
  Image,
  LinkBox,
  LinkOverlay,
  Text,
  VStack,
} from '@chakra-ui/react';
import type { PostData } from '../../../types';

const CardBlogPost: React.VFC<PostData> = ({ slug, meta }) => {
  return (
    <LinkBox
      as="article"
      borderWidth={1}
      borderStyle="solid"
      borderColor="gray.200"
      borderRadius="md"
      backgroundColor="white"
      overflow="hidden"
      transitionDuration="0.3s"
      _hover={{
        boxShadow: 'lg',
      }}
    >
      <AspectRatio as="figure" ratio={5 / 3}>
        <Image src="/profile.jpg" alt={meta.title} />
      </AspectRatio>
      <VStack spacing={3} p={4} align="normal">
        <Flex justify="space-between" align="center">
          <Box
            px={2}
            py={1}
            fontSize="xs"
            fontWeight={600}
            lineHeight={1}
            color="white"
            backgroundColor="gray.800"
            borderRadius="sm"
          >
            React
          </Box>
          <Text as="time" dateTime={meta.published} fontSize="xs">
            {meta.published}
          </Text>
        </Flex>
        <Text as="h3" fontSize="sm">
          <NextLink href={'/blog/[slug]'} as={'/blog/' + slug} passHref>
            <LinkOverlay>{meta.title}</LinkOverlay>
          </NextLink>
        </Text>
      </VStack>
    </LinkBox>
  );
};

export default CardBlogPost;
