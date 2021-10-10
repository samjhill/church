import * as React from "react";
import FlamingoSvg from "../components/flamingo-god";
import { Box, Text } from "rebass";
import styled, { keyframes } from "styled-components";
import { MailingList } from "../components/mailing-list";
import { SocialLinks } from "../components/social-links";
import "@fontsource/open-sans";
import "../styles/global.css";

// styles
const PageStyles = styled.div`
  background-color: #222121;
  color: #efeded;
  padding: 1rem;
`;

const ContentWrapper = styled.div`
  margin: 0 auto 4rem auto;
  max-width: 800px;
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const colorShift = keyframes`
  0% { fill: pink; }
  100% { fill: #fc8eac; }
`;

const AnimatedFlamingo = styled(FlamingoSvg)`
  animation: ${colorShift} 3s infinite;
  animation-direction: alternate;
  width: 100%;
  height: 100%;
  -webkit-filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
  filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
`;

const IndexPage = () => {
  return (
    <PageStyles>
      <ContentWrapper>
        <title>Church of the Sacred Rose-Colored Flame</title>

        <Section>
          <h1>Church of the Sacred Rose-Colored Flame</h1>
          <Text as="h2" fontStyle="italic">
            Come for the flock, stay for the talk.
          </Text>
        </Section>

        <Section>
          <h3>About</h3>
          <Text>We're a church that anyone can join.</Text>
          <Text>Our goal is to increase empathy, love, and serenity.</Text>
        </Section>

        <Section>
          <h3>What do we do?</h3>
          <Text>
            We promote acceptance, teach strategies to deal with a hectic and
            divided world, and foster community.
          </Text>
        </Section>

        <Section>
          <h3>What do we believe?</h3>
          <ul>
            <li>All people deserve love, respect, and acceptance.</li>
            <li>Animals are important and deserve our protection and care.</li>
            <li>
              "Trusting your gut" is{" "}
              <a
                href="https://www.hopkinsmedicine.org/health/wellness-and-prevention/the-brain-gut-connection"
                target="_blank"
              >
                a real thing{" "}
              </a>
              - we teach and learn about ways to be able to attune this sense.
            </li>
            <li>
              Energy and stress management can have a positive impact on
              longevity and health.
            </li>
          </ul>
        </Section>

        <Section>
          <h3>How did this come about?</h3>
          <Text>
            On two occasions, The Oracle saw a vision: a powerful and calm
            being, similar in looks to a Flamingo. However, there were a few key
            differences:
          </Text>
          <ul>
            <li>One great eye in the middle of her forehead.</li>
            <li>Three bare human breasts.</li>
            <li>Six strong wings.</li>
            <li>Nine long legs, all pointing in different directions.</li>
          </ul>

          <AnimatedFlamingo />
        </Section>

        <Section>
          <h3>So, you all worship a Lovecraftian-Flamingo god-monster?</h3>
          <Text mb="2">Well, no.</Text>
          <Text mb="2">
            In her appearance to The Oracle, the being was silent, but conveyed
            a complex message. One of the first things that message contained is
            that all religions are like the faces of a many-sided die. Where
            we're born, societal norms, and other factors we can't control have
            such a huge weight in our religious lives that it does seem like a
            roll of the dice as to which religion we choose.
          </Text>
          <Text mb="2">
            Even agnosticism, atheism, and scientism are faces of this same die.
          </Text>
          <Text mb="2">
            The point is: use your spiritual energy how you want, as long as you
            respect the beliefs listed above.
          </Text>
        </Section>

        <Section>
          <h3>But why a flamingo, though?</h3>
          <Text mb="2">
            The visual appearance is a message; these types of beings can appear
            in any number of forms. The Oracle is still decoding this message.
          </Text>
          <Text mb="2">
            Note the nine feet: all pointing in different directions. The being
            is calm and still, but is able to shift direction at any time.
          </Text>
          <Text mb="2">
            The six wings enable this massive being to fly. Each
            pair individually is strong, but together, they can lift us all up.
          </Text>
          <Text mb="2">
            Next, the three breasts symbolize a wealth of energy that is
            perfectly designed for us.
          </Text>
          <Text mb="2">
            Finally, the third eye on her forehead: our intentions are clear.
            Even if our actions fall short, she knows that we are like grains of
            sand, tossed along the beach by a blustering wind.
          </Text>
        </Section>

        <SocialLinks />

        <MailingList />
      </ContentWrapper>
    </PageStyles>
  );
};

export default IndexPage;
