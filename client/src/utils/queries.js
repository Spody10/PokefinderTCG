import gql from 'graphql-tag';

export const QUERY_CARDS = gql`
  {
    cards {
        _id
        name
        email
    }
  }
`;