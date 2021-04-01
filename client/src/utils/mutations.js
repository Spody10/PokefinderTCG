import gql from 'graphql-tag';

export const ADD_CARD = gql`
  mutation addCard($name: String!, $image: String!, $grading: String, $holo: Boolean, $reverse: Boolean, $superRare: Boolean, $secretRare: Boolean, $promo: Boolean, $askingPrice: Float!, $sold: Boolean) {
    addCard(name: $name, image: $image, grading: $grading, holo: $holo, reverse: $reverse, superRare: $superRare, secretRare: $secretRare, promo: $promo, askingPrice: $askingPrice, sold: $sold) {
      _id
      name
      grading
      image
    }
  }
`;

