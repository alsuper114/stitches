import Head from 'next/head';
import { Box, Heading, Flex, Container, Button, Divider, Subheading } from '@modulz/radix';
import { styled } from '../css';

const buttonStyles = {
  appearance: 'none',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'black',
  backgroundColor: 'black',
  color: 'white',
  padding: '12px',
  borderRadius: '4px',
  ':hover': {
    backgroundColor: 'white',
    color: 'black',
  },
};

const buttonVariants = {
  variant: {
    blue: {
      borderColor: 'royalblue',
      backgroundColor: 'royalblue',
      ':hover': {
        color: 'royalblue',
      },
    },
    red: {
      borderColor: 'tomato',
      backgroundColor: 'tomato',
      ':hover': {
        color: 'tomato',
      },
    },
  },
};

const InteropButton = styled('button', buttonStyles as any, buttonVariants);

export default function Home() {
  return (
    <div>
      <Container size={3} sx={{ py: 4, mb: 6 }}>
        <Flex sx={{ alignItems: 'center' }}>
          <Box sx={{ width: 5 }}>
            <svg viewBox="0 0 115 115" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
              <path
                d="M72.976 92.492c2.475 1.768 5.586 2.05 8.485.849 1.132-.424 2.122-1.132 2.97-1.98a8.635 8.635 0 002.546-6.364c0-4.95-4.03-8.98-8.98-8.98-3.677 0-6.93 2.12-8.344 5.515-.849 1.98-.92 4.03-.354 5.869-11.88 4.808-25.526 2.05-34.648-7.071-8.485-8.485-11.597-20.93-7.99-32.456.495-1.627-.425-3.253-1.98-3.819-1.627-.495-3.253.425-3.819 1.98-4.172 13.647-.565 28.426 9.546 38.538 11.172 11.172 28.143 14.283 42.568 7.92zM88.957 64.774a18.599 18.599 0 01-.566 2.12c-.495 1.627.424 3.254 2.05 3.749 1.061.353 2.263 0 2.97-.707.354-.354.637-.778.708-1.273.282-.849.495-1.627.707-2.546 2.97-13.01-.849-26.304-10.253-35.709-10.678-10.677-26.375-14.071-40.447-8.768-2.616-2.192-6.01-2.758-9.192-1.414-3.394 1.414-5.586 4.596-5.516 8.344 0 4.95 4.03 8.98 8.98 8.98 2.405 0 4.738-.92 6.364-2.546.849-.848 1.556-1.838 1.98-2.97.708-1.697.849-3.393.566-5.09 11.526-3.89 24.325-.99 33.022 7.707 7.92 7.92 11.102 19.162 8.627 30.123z"
                fill="currentColor"
              />
            </svg>
          </Box>
          <Heading as="span" size={1} style={{ lineHeight: 1, letterSpacing: '-0.05em' }}>
            interop
          </Heading>
        </Flex>
      </Container>

      <Container size={2} sx={{ textAlign: 'center' }}>
        <Heading size={5} sx={{ mb: 4 }}>
          The modern styling library
        </Heading>
      </Container>

      <Container size={1} sx={{ textAlign: 'center' }}>
        <Heading as="h2" size={2} sx={{ color: 'gray700', lineHeight: '4', fontWeight: 400 }}>
          Create tokens, styles, variants and themes for your components. Be more consistent than ever before.
        </Heading>
      </Container>

      <Container sx={{ my: 6 }}>
        <Flex>
          <Button size={1} variant="blue" sx={{ mr: 2 }}>
            Documentation
          </Button>
          <Button size={1} sx={{ ml: 2 }}>
            Github
          </Button>
        </Flex>
      </Container>

      <Box sx={{ bg: 'gray900', py: 6, my: 9 }}>
        <Container size={3}>
          <Flex sx={{ mb: 4 }}>
            <Box sx={{ flex: '1 0 50%', mr: 3 }}>
              <pre className="dark language-jsx">
                {`const Button = styled('button', ${JSON.stringify(buttonStyles, null, 2)})`}
              </pre>
            </Box>
            <Flex
              sx={{
                flex: '1 0 50%',
                alignItems: 'center',
                justifyContent: 'center',
                bg: 'white',
                p: 6,
                ml: 3,
                borderRadius: 2,
              }}
            >
              <InteropButton>Button component</InteropButton>
            </Flex>
          </Flex>
          <Flex>
            <Box sx={{ flex: '1 0 50%', mr: 3 }}>
              <pre className="dark language-jsx">
                {`const Button = styled('button', …, ${JSON.stringify(buttonVariants, null, 2)})`}
              </pre>
            </Box>
            <Flex
              sx={{
                flex: '1 0 50%',
                alignItems: 'center',
                justifyContent: 'center',
                bg: 'white',
                p: 6,
                ml: 3,
                borderRadius: 2,
              }}
            >
              <InteropButton css={{ marginRight: '5px' }} variant="blue">
                Button component
              </InteropButton>
              <InteropButton css={{ marginLeft: '5px' }} variant="red">
                Button component
              </InteropButton>
            </Flex>
          </Flex>
        </Container>
      </Box>

      <Container size={1} sx={{ textAlign: 'center' }}>
        <Subheading as="h2" size={1} mb={4} sx={{ color: 'gray700' }}>
          Features
        </Subheading>
        <Heading as="h3" size={4} mb={4}>
          A fully-featured styling library.
        </Heading>
      </Container>
    </div>
  );
}
