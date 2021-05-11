import React from 'react';
import NextLink from 'next/link';
import { Box, Button, Flex, HStack, Icon, Spacer, Text } from '@chakra-ui/react';
import { FiMoon } from 'react-icons/fi';

const TheHeader: React.VFC = () => {
  return (
    <Box
      as="header"
      w="100%"
      position="absolute"
      borderBottomWidth={1}
      borderBottomColor="gray.200"
      borderBottomStyle="solid"
    >
      <Flex maxW="container.xl" h={20} alignItems="center" mx="auto">
        <Logo />
        <Spacer />
        <HStack spacing={6}>
          <HStack spacing={4}>
            <MenuItem to="/blog">Blog</MenuItem>
            <MenuItem to="/works">Works</MenuItem>
          </HStack>
          <Button size="sm" variant="ghost" px={0}>
            <Icon as={FiMoon} boxSize={5} />
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
};

const Logo: React.VFC = () => (
  <Box as="h1">
    <NextLink href="/" passHref>
      <Text as="a" fontSize="lg" fontWeight="bold">
        {process.env.NEXT_PUBLIC_SITE_NAME}
      </Text>
    </NextLink>
  </Box>
);

const MenuItem: React.FC<{ to: string }> = ({ to, children }) => {
  return (
    <Box p={2}>
      <NextLink href={to} passHref>
        <Text as="a" color="gray.600" fontSize="sm" fontWeight={600}>
          {children}
        </Text>
      </NextLink>
    </Box>
  );
};

export default TheHeader;
