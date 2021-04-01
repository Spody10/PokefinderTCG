import gql from 'graphql-tag';

export const ADD_CARD = gql`
  mutation addCard($name: String!, $image: String, $grading: String, $holo: Boolean, $reverse: Boolean, $superRare: Boolean, $secretRare: Boolean, $promo: Boolean, $askingPrice: String!, $sold: Boolean) {
    addCard(name: $name, image: $image, grading: $grading, holo: $holo, reverse: $reverse, superRare: $superRare, secretRare: $secretRare, promo: $promo, askingPrice: $askingPrice, sold: $sold) {
      _id
      name
      grading
      image
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($loginEmail: String!, $loginPassword: String!) {
    login(email: $loginEmail, password: $loginPassword) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($signupUsername: String!, $signupEmail: String!, $signupPassword: String!) {
    addUser(username: $signupUsername, email: $signupEmail, password: $signupPassword) {
      token
      user {
        _id
        username
      }
    }
  }
`;

