import React, { useState } from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";
import { Flex, Text } from "rebass";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
`;

const OutlineButton = styled.button`
  background: none;
  border: 2px solid pink;
  color: white;
  margin-left: auto;
  padding: 1rem;
  :hover{
    cursor: pointer;
  }
`;

export const MailingList = () => {
  const [email, setEmail] = useState("");
  // Since `addToMailchimp` returns a promise, you
  // can handle the response in two different ways:

  // Note that you need to send an email & optionally, listFields
  // these values can be pulled from React state, form fields,
  // or wherever.  (Personally, I recommend storing in state).

  // 1. via `.then`
  const handleSubmit = (email) => {
    addToMailchimp(email) // listFields are optional if you are only capturing the email address.
      .then((data) => {
        // I recommend setting data to React state
        // but you can do whatever you want (including ignoring this `then()` altogether)
        console.log(data);
      })
      .catch(() => {
        // unnecessary because Mailchimp only ever
        // returns a 200 status code
        // see below for how to handle errors
      });
  };

  return (
    <Container>
      <form onSubmit={() => handleSubmit(email)}>
        <Text>
          <label htmlFor="email">Feel free to join our mailing list.</label>
        </Text>
        <Text mb="4">No pressure, though.</Text>
        <Flex mt="2" w="100%">
          <Flex w={4 / 5} mr="2">
            <input
              id="email"
              name="email"
              placeholder="pink@flamingo.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Flex>
          <Flex w={1 / 5}>
            <OutlineButton type="submit">Submit</OutlineButton>
          </Flex>
        </Flex>
      </form>
    </Container>
  );
};
