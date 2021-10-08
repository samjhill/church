import * as React from "react"
import FlamingoSvg from "../components/flamingo-god";
import { Box, Flex, Text } from "rebass";
import styled, { keyframes } from "styled-components";
import { MailingList } from "../components/mailing-list";

// styles
const pageStyles = {
  color: "#232129",
  padding: "1rem",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const colorShift = keyframes`
  0% { fill: pink; }
  100% { fill: #fc8eac; }
`;

const AnimatedFlamingo = styled(FlamingoSvg)`
  animation: ${colorShift} 3s infinite;
  animation-direction: alternate;
  width: 100%;
  height: 100%;
`;

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Church of the Sacred Rose-Colored Flame</title>
      
      <Box>
        <h1>Church of the Sacred Rose-Colored Flame</h1>
        <Text>Come for the flock, stay for the talk.</Text>
      </Box>
        
      <Box>
        <h3>About</h3>
        <Text>We're a church that anyone can join.</Text>
        <Text>Our goal is to increase empathy, love, and serenity.</Text>
      </Box>

      <Box>
        <h3>What do we do?</h3>
        <Text>We promote acceptance, teach strategies to deal with a hectic and divided world, and foster community.</Text>
      </Box>

      <Box>
        <h3>What do we believe?</h3>
        <ul>
          <li>All people deserve love, respect, and acceptance.</li>
          <li>Animals are important and deserve our protection and care.</li>
          <li>"Trusting your gut" is <a href="https://www.hopkinsmedicine.org/health/wellness-and-prevention/the-brain-gut-connection" target="_blank">a real thing</a>- we teach and learn about ways to be able to attune this sense.</li>
        </ul>
      </Box>

      <Box>
        <h3>How did this come about?</h3>
        <Text>On two occasions, our founder saw a vision: a powerful and calm being, similar in looks to a Flamingo. </Text>
        <ul>
          <li>One great eye in the middle of its forehead.</li>
          <li>Three bare human breasts.</li>
          <li>Six strong wings.</li>
          <li>Nine long legs, all pointing in different directions.</li>
        </ul>
        
        <AnimatedFlamingo />

        <Text>This being did not speak, but its presence was overwhelming. The founder is still in the process of decoding the purpose of the encounters. The beliefs listed above are just the beginning. Our scope is infinite, and our work together will help the world.</Text>
      </Box>

      <MailingList />
    </main>
  )
}

export default IndexPage
