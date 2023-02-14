import { gql } from "@apollo/client";

const getAllUsers = gql`
  query {
    users {
      firstName
    }
  }
`;

const login = gql`
  query userLogin($email: String!, $password: String!) {
    userLogin(email: $email, password: $password) {
      id
      firstName
      lastName
      email
      phone
      avatar
    }
  }
`;

export { getAllUsers, login };
