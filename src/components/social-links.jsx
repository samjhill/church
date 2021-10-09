import * as React from "react";
import { Box } from "rebass";
import TwitterLogo from "./svg/twitter-logo";

const color = "pink";

export const SocialLinks = () => {
    return (
      <Box mt="4">
        <h3>Social Media</h3>

        <a href="https://twitter.com/ChurchFlamingo" target="_blank">
          <Box>
            <TwitterLogo fill={color} />
          </Box>
        </a>
      </Box>
    );
};