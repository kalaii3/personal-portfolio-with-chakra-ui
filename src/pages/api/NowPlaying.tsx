

import { Box, Icon, Link as ChakraLink } from "@chakra-ui/react";
import { FiMusic } from "react-icons/fi";
import useSWR from 'swr';
import {animate} from "motion";
import fetcher from './fetcher';
import type { NowPlayingSong } from './types';
import { useEffect } from "react";

function AnimatedBars(){

  useEffect(() => {
    animate(
      '#bar1',
      {
        transform: [
          'scaleY(1.0) translateY(0rem)',
          'scaleY(1.5) translateY(-0.082rem)',
          'scaleY(1.0) translateY(0rem)',
        ],
      },
      {
        duration: 1.0,
        repeat: Infinity,
        easing: ['ease-in-out'],
      }
    );
    animate(
      '#bar2',
      {
        transform: [
          'scaleY(1.0) translateY(0rem)',
          'scaleY(3) translateY(-0.083rem)',
          'scaleY(1.0) translateY(0rem)',
        ],
      },
      {
        delay: 0.2,
        duration: 1.5,
        repeat: Infinity,
        easing: ['ease-in-out'],
      }
    );
    animate(
      '#bar3',
      {
        transform: [
          'scaleY(1.0)  translateY(0rem)',
          'scaleY(0.5) translateY(0.37rem)',
          'scaleY(1.0)  translateY(0rem)',
        ],
      },
      {
        delay: 0.3,
        duration: 1.5,
        repeat: Infinity,
        easing: ['ease-in-out'],
      }
    );
  }, []);
  

  return (
    <Box ml={10} display="flex" w="auto" alignItems="flex-end" overflow="hidden" mx={2}>
      <Box id="bar1" mr="3px" h="2" w="1" bg="gray.300" opacity={0.75} transform="scaleY(1.0) translateY(0rem)" animation="scaleY 1s infinite ease-in-out">
        <Box as="span" w="1px" h="1px" display="block"></Box>
      </Box>
      <Box id="bar2" mr="3px" h="1" w="1" bg="gray.300" opacity={0.75} transform="scaleY(1.0) translateY(0rem)" animation="scaleY 1.5s infinite ease-in-out 0.2s">
        <Box as="span" w="1px" h="1px" display="block"></Box>
      </Box>
      <Box id="bar3" h="3" w="1" bg="gray.300" opacity={0.75} transform="scaleY(1.0) translateY(0rem)" animation="scaleY 1.5s infinite ease-in-out 0.3s">
        <Box as="span" w="1px" h="1px" display="block"></Box>
      </Box>
    </Box>
  );
  }
export default function NowPlaying() {
  const { data } = useSWR<NowPlayingSong>('/api/now-playing', fetcher);

  return (
    <Box mb={2} display="flex" w="full" flexDirection="row" alignItems="center" justifyContent="center"> {/* Added justifyContent */}
      {data?.songUrl ? (
        <AnimatedBars />
      ) : (
        <Icon as={FiMusic} ml={2} h={4} w={4} mx={2} color="green.400" />
      )}
      {data?.songUrl ? (
        <ChakraLink
          className="capsize max-w-max truncate font-medium text-gray-200"
          href={data.songUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {data.title.length > 25 ? `${data.title.slice(0, 25)}...` : data.title}
        </ChakraLink>
      ) : (
        <Box className="capsize font-medium text-gray-200">
          Not Playing - Spotify
        </Box>
      )}

    </Box>
  );
}