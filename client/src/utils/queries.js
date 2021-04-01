import gql from 'graphql-tag';

export const QUERY_CARDS = gql`
  {
    cards {
      _id
      name
      setName
      email
      image
      grading
      holo
      reverse
      superRare
      secretRare
      promo
      askingPrice
      sold
    }
  }
`;
export const QUERY_SINGLE_CARD = gql`
  query card($ID: ID!) {
  card(_id: $ID) {
    name
    setName
    email
    image
    grading
    holo
    reverse
    superRare
    secretRare
    promo
    askingPrice
  }
}
`;