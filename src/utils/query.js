import { gql } from '@apollo/client';
import client from './apollo';


export const getAllCategories = () =>
  client.query({
    query: gql`
      query GetCategories {
        categories {
          name
        }
      }
    `,
  });

export const getCategoryQuery = title =>
  client
    .query({
      query: gql`
        query GetCategory {
          category(input: { title: "${title}" }) {
            name
            products {
              id
              name
              inStock
              gallery
              brand
              prices {
                currency {
                  label
                  symbol
                }
                amount
              }
              attributes {
                id
                name
                type
                items {
                  displayValue
                  value
                  id
                }
              }
            }
          }
        }
      `,
    });

export const getProductQuery = id =>
  client.query({
    query: gql`
        query GetProduct {
          product(id: "${id}") {
              id
              name
              description
              inStock
              gallery
              brand
              prices {
                currency {
                  label
                  symbol
                }
                amount
              }
              attributes {
                id
                name
                type
                items {
                  displayValue
                  value
                  id
                }
              }
            }
        }
      `,
  });

export const getCurrencyQuery = () =>
  client.query({
    query: gql`
      query GetCurrencies {
        currencies {
          label
          symbol
        }
      }
    `,
  });
