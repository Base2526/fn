import { gql } from "@apollo/client";

import _ from "lodash";
import deepdash from "deepdash";

import {apolloClient} from "./ApolloClient";

// add deepdash to lodash
deepdash(_);

const getList = async (resource, params) => {
  console.log("getList :", resource)
  
  switch (resource) {
    case "posts": {

      let page = 1
      let perPage = 20
      let field = null
      let order = null

      let query = gql`
                query Posts{
                    Posts(
                    page: ${page}
                    perPage: ${perPage}
                    sortField: "${field}"
                    sortOrder: "${order}"
                    filter: ${JSON.stringify(null).replace(/"(\w+)":/g, '$1:').replace(/"(\d+)"/g, '$1')}
                  ){
                    status
                    total
                    executionTime
                    data{
                        id: _id
                        title
                        nameSubname
                        idCard
                        number
                        dateTranfer
                        body
                        banks{
                          user_bank
                          banks
                        }
                        follows
                        files{
                          base64
                          fileName
                          lastModified
                          size
                          type
                        }
                        isPublish
                        owner_id
                        createdAt
                        updatedAt
                    }
                  }
                }`;

      console.log("query :", query)

      let json1 = await apolloClient().query({ query } , { errorPolicy: 'all' });

      let data = json1.data.Posts.data
                let total = json1.data.Posts.total

      console.log("json1.data.Posts :", json1.data.Posts)
      return {
          data:  data,
          total
      }
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
