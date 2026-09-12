import Image from 'next/image'
import { Box, Container, Flex, Heading, Link, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import { FiArrowUpRight, FiCode, FiGithub, FiHeart, FiMapPin } from 'react-icons/fi'

export default function Home() {
  return (
    <Box className="apology-page" minH="calc(100vh - 72px)" pb={{ base: 16, md: 24 }}>
      <Box className="apology-grid" position="absolute" inset="0" zIndex={0} pointerEvents="none" />
      <Container maxW="1180px" position="relative" zIndex={1} px={{ base: 5, md: 10 }}>
        <Flex
          align={{ base: 'flex-start', lg: 'center' }}
          direction={{ base: 'column', lg: 'row' }}
          gap={{ base: 12, lg: 20 }}
          minH={{ base: 'auto', lg: 'calc(100vh - 150px)' }}
          py={{ base: 14, md: 20, lg: 16 }}
        >
          <Stack flex="1.2" gap={7} maxW="760px">
            <Flex align="center" gap={3} className="eyebrow">
              <Box className="eyebrow-dot" />
              <Text>an overdue public note</Text>
            </Flex>
            <Heading as="h1" className="apology-title">
              Sorry,
              <Box as="span" display="block" color="var(--apology-coral)">
                Bertux.
              </Box>
            </Heading>
            <Text className="apology-lede">
              I owe you an apology, and apparently I owe the internet a whole website to deliver it.
            </Text>
            <Text className="apology-copy">
              For the noise, the missed message, and the very specific kind of chaos that only a
              cryptogeek can recognize. You deserved clarity. Instead, you got a browser tab and a
              promise to do better.
            </Text>
            <Flex gap={4} wrap="wrap" align="center">
              <Link href="#the-apology" className="apology-button">
                Read the apology <FiArrowUpRight aria-hidden="true" />
              </Link>
              <Link
                href="https://github.com/bertux"
                target="_blank"
                rel="noreferrer"
                className="quiet-link"
              >
                <FiGithub aria-hidden="true" /> Check the evidence
              </Link>
            </Flex>
            <Flex className="signature" align="center" gap={3} mt={{ base: 3, md: 8 }}>
              <Box className="signature-line" />
              <Text>with actual remorse,</Text>
              <Text fontWeight="700">someone who should know better</Text>
            </Flex>
          </Stack>

          <Box className="portrait-frame" flex="0 1 380px">
            <Box className="portrait-note">the person in question</Box>
            <Box className="portrait-image-wrap">
              <Image
                src="https://avatars.githubusercontent.com/u/5703?v=4"
                alt="Bertrand Juglas, known as Bertux"
                width={380}
                height={380}
                className="portrait-image"
                priority
              />
            </Box>
            <Flex justify="space-between" align="end" gap={4} mt={5}>
              <Box>
                <Text className="portrait-name">Bertrand Juglas</Text>
                <Flex align="center" gap={2} className="portrait-meta">
                  <FiMapPin aria-hidden="true" /> Bidart, Pays Basque
                </Flex>
              </Box>
              <Text className="portrait-handle">@bertux</Text>
            </Flex>
          </Box>
        </Flex>

        <Box id="the-apology" className="apology-letter" scrollMarginTop="100px">
          <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" gap={10}>
            <Box maxW="520px">
              <Text className="section-kicker">01 / the apology</Text>
              <Heading as="h2" className="section-title">
                No excuses. Just context.
              </Heading>
            </Box>
            <Stack gap={5} maxW="530px" className="letter-copy">
              <Text>
                Bertux, you build quietly, ship consistently, and somehow keep finding the sharp
                edge of the internet. I brought the opposite energy.
              </Text>
              <Text>
                So here is the short version: I am sorry. The longer version can wait until I have
                earned the right to make it interesting. For now, this is me showing up, naming it,
                and leaving the door open for a real conversation.
              </Text>
              <Flex align="center" gap={3} className="promise-line">
                <FiHeart aria-hidden="true" /> Less noise. More listening.
              </Flex>
            </Stack>
          </Flex>
        </Box>

        <Box className="profile-strip">
          <Flex justify="space-between" align={{ base: 'flex-start', md: 'center' }} gap={8} mb={8}>
            <Box>
              <Text className="section-kicker">02 / public record</Text>
              <Heading as="h2" className="strip-title">The receipts.</Heading>
            </Box>
            <Link
              href="https://github.com/bertux"
              target="_blank"
              rel="noreferrer"
              className="external-link"
            >
              github.com/bertux <FiArrowUpRight aria-hidden="true" />
            </Link>
          </Flex>
          <SimpleGrid columns={{ base: 1, sm: 3 }} gap="1px" className="stats-grid">
            <Box className="stat-cell"><FiCode aria-hidden="true" /><Text className="stat-number">254</Text><Text className="stat-label">public repositories</Text></Box>
            <Box className="stat-cell"><FiHeart aria-hidden="true" /><Text className="stat-number">106</Text><Text className="stat-label">people paying attention</Text></Box>
            <Box className="stat-cell"><FiMapPin aria-hidden="true" /><Text className="stat-number">FR</Text><Text className="stat-label">French cryptogeek</Text></Box>
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  )
}
