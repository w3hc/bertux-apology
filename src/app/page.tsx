import { Box, Heading, Text, VStack, HStack, Separator, Badge } from '@chakra-ui/react'
import { ListRoot, ListItem } from '@/components/ui/list'
import { Button } from '@/components/ui/button'
import { FaGithub, FaXTwitter } from 'react-icons/fa6'
import { brandColors } from '@/theme'

const charges = [
  'On GitHub since April 2008 — before most of the jury had heard of Bitcoin, the defendant was already committing code, and has not stopped since.',
  'Stands accused of maintaining 254 public repositories, a figure that strains the legal definition of "maintaining."',
  'Self-identifies, without a shred of remorse, as a "French cryptogeek." This confession has been entered into evidence.',
  'Has built no fewer than three separate ways to claim an NFT (daily-drop, lifetime-nft, cookie-claim) on a network most of the courtroom has never heard of.',
  'Resides in Bidart, Pays Basque — a location suspiciously well-suited for surfing between commits.',
  'Once named a subgraph "subgraph-foo," suggesting either supreme confidence or total indifference to naming things.',
]

const defense = [
  'Built ENS tooling (ens-frontend, ens-fifs) so that mere mortals could look up names nobody can remember.',
  'Wrote the getting-started tutorial for Superfluid, so the rest of us didn’t have to read the whitepaper.',
  'Kept validator nodes awake at night across several chains — AVA, Pchain, Arthera — so somebody else’s tokens stay finalized.',
  'Taught at hackathon workshops (Allo Protocol × Arbitrum), sharing the knowledge instead of hoarding it.',
  'Automated deployments with Terraform and Packer on Scaleway, because doing it by hand is for people who enjoy suffering.',
  'Has, for over eighteen years, kept writing code without once stopping to verify it was a good idea. The jury finds this consistency admirable.',
]

export default function Home() {
  return (
    <VStack gap={10} align="stretch" py={16}>
      <Box textAlign="center">
        <Badge colorPalette="purple" mb={4} px={3} py={1} borderRadius="full">
          Case No. 2008-∞ — The Internet v. Bertux
        </Badge>
        <Heading as="h1" size="2xl" mb={3}>
          The Apology of Bertux
        </Heading>
        <Text fontSize="lg" color="gray.400" fontStyle="italic" maxW="640px" mx="auto">
          In defense of Bertrand Juglas, cryptogeek, of Bidart, Pays Basque — accused, on the
          record of his own GitHub profile, of a great many things.
        </Text>
      </Box>

      <Box>
        <Text color="gray.300" lineHeight="tall">
          Your Honor, members of the jury, the internet: we are not gathered here to bury Bertux,
          but to defend him. The charges are serious. The evidence is considerable, spanning 254
          public repositories. The defendant, it must be said, is entirely undeterred.
        </Text>
      </Box>

      <Separator />

      <Box>
        <Heading as="h2" size="lg" mb={4} color={brandColors.accent}>
          The Charges
        </Heading>
        <ListRoot as="ol" gap={3} ps={5} css={{ listStyleType: 'decimal' }}>
          {charges.map((charge, i) => (
            <ListItem key={i} color="gray.300" lineHeight="tall">
              {charge}
            </ListItem>
          ))}
        </ListRoot>
      </Box>

      <Separator />

      <Box>
        <Heading as="h2" size="lg" mb={4} color={brandColors.accent}>
          Exhibits for the Defense
        </Heading>
        <ListRoot as="ol" gap={3} ps={5} css={{ listStyleType: 'decimal' }}>
          {defense.map((point, i) => (
            <ListItem key={i} color="gray.300" lineHeight="tall">
              {point}
            </ListItem>
          ))}
        </ListRoot>
      </Box>

      <Separator />

      <Box
        borderWidth="1px"
        borderColor="gray.700"
        borderRadius="md"
        p={6}
        textAlign="center"
        bg="rgba(140, 28, 132, 0.08)"
      >
        <Heading as="h2" size="md" mb={2}>
          The Verdict
        </Heading>
        <Text color="gray.300" lineHeight="tall">
          This court finds the defendant guilty — of relentless curiosity, incurable tinkering,
          and shipping more testnets than the rest of us combined. Sentence: to keep going.
        </Text>
      </Box>

      <HStack justify="center" gap={4} pt={4}>
        <Button asChild bg={brandColors.primary} color="white" _hover={{ bg: brandColors.secondary }}>
          <a href="https://github.com/bertux" target="_blank" rel="noopener noreferrer">
            <FaGithub style={{ marginRight: 8 }} />
            GitHub
          </a>
        </Button>
        <Button asChild variant="outline">
          <a href="https://twitter.com/bjuglas" target="_blank" rel="noopener noreferrer">
            <FaXTwitter style={{ marginRight: 8 }} />
            @bjuglas
          </a>
        </Button>
      </HStack>
    </VStack>
  )
}
