"use client";

import {
  Box,
  Button,
  Code,
  Heading,
  HStack,
  Link,
  Text,
  VStack,
} from "@pimolu/react";

const links = {
  components: "https://pimolu.com/components",
  docs: "https://pimolu.com/docs",
  showcase: "https://pimolu.com/showcase",
  github: "https://github.com/pimoludev/ui",
};

export default function Home() {
  return (
    <Box className="starter-page">
      <VStack className="starter-content" gap="none">
        <Heading level={1} className="starter-wordmark">
          Pimolu <Text tone="primary">UI</Text>
        </Heading>
        <Box as="ol" className="starter-instructions">
          <Box as="li" className="starter-instruction">
            Get started by editing <Code>app/page.tsx</Code>.
          </Box>
          <Box as="li" className="starter-instruction">
            Save and see your changes instantly.
          </Box>
        </Box>
        <HStack className="starter-actions" gap={3} wrap>
          <Button
            size="lg"
            variant="neutral"
            radius="full"
            onClick={() => window.location.assign(links.components)}
          >
            Explore Components
          </Button>
          <Button
            size="lg"
            variant="neutral"
            radius="full"
            appearance="outline"
            onClick={() => window.location.assign(links.docs)}
          >
            Documentation
          </Button>
        </HStack>
      </VStack>
      <HStack
        as="footer"
        className="starter-footer"
        gap={3}
        justify="center"
        wrap
        aria-label="Resources"
      >
        <Link
          href={links.docs}
          variant="inherit"
          underline="hover"
          external
          showExternalIcon={false}
        >
          Learn{" "}
          <Text tone="muted" aria-hidden="true">
            ↗
          </Text>
        </Link>
        <Link
          href={links.showcase}
          variant="inherit"
          underline="hover"
          external
          showExternalIcon={false}
        >
          Showcase{" "}
          <Text tone="muted" aria-hidden="true">
            ↗
          </Text>
        </Link>
        <Link
          href={links.github}
          variant="inherit"
          underline="hover"
          external
          showExternalIcon={false}
        >
          GitHub{" "}
          <Text tone="muted" aria-hidden="true">
            ↗
          </Text>
        </Link>
      </HStack>
    </Box>
  );
}
