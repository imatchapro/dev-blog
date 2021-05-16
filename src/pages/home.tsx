import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import NextLink from 'next/link';
import {
  Box,
  Center,
  Container,
  Divider,
  Flex,
  Grid,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  Spacer,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FiArrowRight } from 'react-icons/fi';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import GitHubCalendar from 'react-github-calendar';
import LayoutHome from '../components/templates/LayoutHome';
import CardBlogPost from '../components/molecules/Card/CardBlogPost';
import { getPostsData } from '../lib/api';
import type { PostData } from '../types';

type Props = {
  posts: PostData[];
};

const home: NextPage<Props> = ({ posts }) => {
  return (
    <LayoutHome>
      <Box as="section">
        <Container maxW="container.xl" py={16}>
          <Flex justify="space-between" align="flex-end">
            <Heading as="h2" fontSize="5xl" fontWeight={200} letterSpacing={8}>
              Blog
            </Heading>
            <NextLink href="/blog" passHref>
              <Link display="flex" alignItems="center">
                <Text fontSize="lg" fontWeight={300}>
                  View All
                </Text>
                <Icon as={FiArrowRight} ml={2} />
              </Link>
            </NextLink>
          </Flex>
          <Spacer mt={16} />
          <Grid gap={8} templateColumns="repeat(4, 1fr)">
            {posts.map((post, i) => (
              <CardBlogPost {...post} key={i} />
            ))}
          </Grid>
        </Container>
      </Box>

      <Box as="section" backgroundColor="">
        <Container maxW="container.xl" py={16}>
          <Heading as="h2" fontSize="5xl" fontWeight={200} letterSpacing={8}>
            About
          </Heading>
          <Spacer mt={16} />
          <Grid gap={8} templateColumns="1fr 320px" templateRows="auto auto">
            <Box
              gridRow="1/2"
              borderWidth={1}
              borderStyle="solid"
              borderColor="gray.200"
              backgroundColor="white"
              borderRadius="md"
              overflow="hidden"
              p={12}
            >
              <HStack spacing={8}>
                <Box as="figure">
                  <Image
                    src="/profile.webp"
                    alt="Yuta Takahashi"
                    w={32}
                    h={32}
                    borderRadius="full"
                  />
                </Box>
                <Center height="50px">
                  <Divider orientation="vertical" />
                </Center>
                <VStack spacing={2} align="normal">
                  <Heading as="h3" fontSize="2xl" fontWeight={600} letterSpacing="wider">
                    YUTA TAKAHASHI
                  </Heading>
                  <Text fontSize="sm">フロントエンドエンジニア</Text>
                </VStack>
              </HStack>
            </Box>
            <Box
              gridRow="1/3"
              borderWidth={1}
              borderStyle="solid"
              borderColor="gray.200"
              backgroundColor="white"
              borderRadius="md"
              overflow="hidden"
              h="400px"
            >
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName={process.env.NEXT_PUBLIC_TWITTER_ID}
                options={{ height: 400 }}
              />
            </Box>
            <Box
              gridRow="2/3"
              borderWidth={1}
              borderStyle="solid"
              borderColor="gray.200"
              backgroundColor="white"
              borderRadius="md"
              overflow="hidden"
              p={8}
              css={`
                .react-github-calendar {
                  overflow-x: scroll;

                  &::-webkit-scrollbar {
                    display: none;
                  }

                  &__chart {
                    margin-bottom: 0;

                    svg {
                      min-width: 600px;
                      width: 100%;
                      margin-bottom: 10px;
                    }
                  }
                }
              `}
            >
              <GitHubCalendar username="takayuu" />
            </Box>
          </Grid>
        </Container>
      </Box>
    </LayoutHome>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const postData = await getPostsData();

  return {
    props: {
      posts: postData.slice(0, 4),
    },
  };
};

export default home;
