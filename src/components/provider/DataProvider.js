// import { gql } from "@apollo/client";

import _ from "lodash";
import deepdash from "deepdash";

// import apolloClient from "./ApolloClient";

// add deepdash to lodash
deepdash(_);

const getList = async (resource, params) => {
  // const qr = gql`
  //   query {
  //      getCustomers() {
  //          name
  //      }
  //   }`;

  // const response = await apolloClient.query({
  //   query: qr,
  //   variables: {}
  // });

  //   const qr = gql`
  //     query {
  //        getCustomers() {
  //            name
  //        }
  //     }
  // `
  // const result = await apolloClient.query({
  //     query: qr ,
  //     variables: {}
  // })

  switch (resource) {
    case "": {
      break;
    }
  }
  return { A: "function getList" };
};

const getOne = () => {
  return "getOne";
};

const getMany = () => {
  return "getMany";
};

const getManyReference = () => {
  return "getManyReference";
};

const update = async (resource, params) => {
  return "function update";
};

const updateMany = async (resource, params) => {
  return "function updateMany";
};

const create = async (resource, params) => {
  return "function create";
};

const deleteOne = async (resource, params) => {
  return "function deleteOne";
};

const deleteMany = async (resource, params) => {
  return "function deleteMany";
};

export {
  getList,
  getOne,
  getMany,
  getManyReference,
  update,
  updateMany,
  create,
  deleteOne,
  deleteMany
};
