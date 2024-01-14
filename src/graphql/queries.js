import { gql } from '@apollo/client';

export const GET_DISCORD_USER = gql`
  query Discord($userId: String!) {
    discord {
      lookup(userId: $userId) {
        user {
          id
          type
          username
          displayName
          accountAge
          createdAt
          creationTimestamp
          badges {
            title
            description
            url
          }
          profileAppearance {
            accentColor
            avatar {
              url
            }
            avatarDecoration
            banner {
              url
            }
          }
        }
      }
    }
  }
`;
