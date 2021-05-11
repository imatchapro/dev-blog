import React from 'react';
import { Box, Flex, HStack, Icon, Link, Spacer, Text } from '@chakra-ui/react';
import { FiGithub, FiTwitter } from 'react-icons/fi';
import { IconType } from 'react-icons';

const TheFooter: React.FC = () => {
  return (
    <Box as="footer" borderTopWidth={1} borderTopColor="gray.200" borderTopStyle="solid">
      <Flex maxW="container.xl" alignItems="center" mx="auto" h={20}>
        <HStack spacing={8}>
          <MenuServiceIcon to={process.env.NEXT_PUBLIC_GITHUB_URL} icon={FiGithub} />
          <MenuServiceIcon to={process.env.NEXT_PUBLIC_TWITTER} icon={FiTwitter} />
        </HStack>
        <Spacer />
        <Text as="small" fontSize="xs">
          &copy; 2020 TAKAYU.DEV
        </Text>
      </Flex>
    </Box>
  );
};

const MenuServiceIcon: React.VFC<{ to: string; icon: IconType }> = ({ to, icon }) => (
  <Link color="gray.600" _hover={{ color: 'gray.800' }} href={to} isExternal>
    <Icon as={icon} boxSize={6} />
  </Link>
);

export default TheFooter;
