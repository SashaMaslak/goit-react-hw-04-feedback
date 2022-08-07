import PropTypes from "prop-types";
import { theme } from "theme";
import { Box } from "../Box";

import {
  Card,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  Label,
  Quantity,
} from "./Profile.styled";

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Box
      as={theme.as.s}
      width={theme.space[11]}
      bg={theme.colors.bgSection}
      my={theme.space[5]}
      mx={theme.position.a}
      p={theme.space[5]}
    >
      <Card
      >
        <Description>
          <Avatar src={avatar} alt="User avatar" />
          <Name>{username}</Name>
          <Tag>{tag}</Tag>
          <Location>{location}</Location>
        </Description>

        <Stats>
          <li>
            <Label>Followers</Label>
            <Quantity>{stats.followers}</Quantity>
          </li>
          <li>
            <Label>Views</Label>
            <Quantity>{stats.views}</Quantity>
          </li>
          <li>
            <Label>Likes</Label>
            <Quantity>{stats.likes}</Quantity>
          </li>
        </Stats>
      </Card>
    </Box>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape(
    PropTypes.number.isRequired,
    PropTypes.number.isRequired,
    PropTypes.number.isRequired
  ),
};
