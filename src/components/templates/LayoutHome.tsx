import React from 'react';
import { Box } from '@chakra-ui/react';
import TheHeader from '../organisms/TheHeader';
import TheFooter from '../organisms/TheFooter';

const LayoutHome: React.FC = ({ children }) => {
  return (
    <Box display="flex" flexDirection="column" h="100vh">
      <TheHeader />
      <Box as="main" flexGrow={1} mt={20}>
        {children}
      </Box>
      <TheFooter />
    </Box>
  );
};

export default LayoutHome;
