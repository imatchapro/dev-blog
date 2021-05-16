import React from 'react';
import { Box, Container, HStack, Icon, Link, Spacer, Text } from '@chakra-ui/react';
import { FiGithub, FiTwitter } from 'react-icons/fi';
import type { IconType } from 'react-icons';

const TheFooter: React.FC = () => {
  return (
    <Box as="footer" borderTopWidth={1} borderTopColor="gray.200" borderTopStyle="solid">
      <Container maxW="container.xl" h={20} display="flex" alignItems="center">
        <HStack spacing={8}>
          <MenuServiceIcon to={process.env.NEXT_PUBLIC_GITHUB_URL} icon={FiGithub} />
          <MenuServiceIcon to={process.env.NEXT_PUBLIC_TWITTER_URL} icon={FiTwitter} />
        </HStack>
        <Spacer />
        <Text as="small" fontSize="xs">
          &copy; 2020 TAKAYU.DEV
        </Text>
      </Container>
    </Box>
  );
};

const MenuServiceIcon: React.VFC<{ to: string; icon: IconType }> = ({ to, icon }) => (
  <Link color="gray.800" _hover={{ color: 'gray.600' }} href={to} isExternal>
    <Icon as={icon} boxSize={6} />
  </Link>
);

export default TheFooter;
