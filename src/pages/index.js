import * as React from "react"
import FlamingoSvg from "../components/flamingo-god";
import { Box, Flex } from "rebass";
import styled, { keyframes } from "styled-components";
import { MailingList } from "../components/mailing-list";

// styles
const pageStyles = {
  color: "#232129",
  padding: "1rem",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

// const colorShift = keyframes`
//   0% { fill: pink; }
//   100% { fill: #fc8eac; }
// `;

const AnimatedFlamingo = styled(FlamingoSvg)`
`; // animation: ${colorShift} 3s infinite;

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Church of the Sacred Rose-Colored Flame</title>
      
      <Box>
        <h1>Church of the Sacred Rose-Colored Flame</h1>
        <p>Come for the flock, stay for the talk.</p>
      </Box>
      <Flex>
      <MailingList />
      <AnimatedFlamingo />
      </Flex>
    </main>
  )
}

export default IndexPage
