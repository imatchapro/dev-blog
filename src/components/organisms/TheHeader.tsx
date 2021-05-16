import React from 'react';
import NextLink from 'next/link';
import { Box, Button, Container, HStack, Icon, Link, Spacer, Text } from '@chakra-ui/react';
import { FiMoon } from 'react-icons/fi';

const TheHeader: React.VFC = () => {
  return (
    <Box
      as="header"
      w="100%"
      position="fixed"
      borderBottomWidth={1}
      borderBottomColor="gray.200"
      borderBottomStyle="solid"
      backgroundColor="white"
      zIndex="sticky"
    >
      <Container maxW="container.xl" h={20} display="flex" alignItems="center">
        <Logo />
        <Spacer />
        <HStack spacing={8}>
          <HStack spacing={4}>
            <MenuItem to="/blog">Blog</MenuItem>
            <MenuItem to="/works">Works</MenuItem>
          </HStack>
          <Button variant="ghost" size="md" px={0}>
            <Icon as={FiMoon} boxSize={5} />
          </Button>
        </HStack>
      </Container>
    </Box>
  );
};

const Logo: React.VFC = () => (
  <Box as="h1">
    <NextLink href="/" passHref>
      <Text as="a" fontSize="lg" fontWeight="bold">
        YUTA TAKAHASHI
      </Text>
    </NextLink>
  </Box>
);

const MenuItem: React.FC<{ to: string }> = ({ to, children }) => {
  return (
    <NextLink href={to} passHref>
      <Link fontSize="sm" p={2}>
        {children}
      </Link>
    </NextLink>
  );
};

export default TheHeader;
