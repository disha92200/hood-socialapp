import { gql } from "@apollo/client";

export const createUser = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $phone: String!
    $avatar: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      phone: $phone
      avatar: $avatar
      password: $password
    ) {
      id
      firstName
      lastName
      phone
      email
      avatar
    }
  }
`;
