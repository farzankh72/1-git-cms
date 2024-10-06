import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const IndexPage = ({ data }) =>
  (
    <Layout>
      <ul>
        {data?.fileInformation?.edges.map(({ node }) =>
          <li key={node?.id}>
            {node?.frontmatter.title} | {node?.frontmatter?.price}
            <div>
              <p>content: <div dangerouslySetInnerHTML={{ __html: node.html }} /></p>
            </div>
            <img src={node.frontmatter.image} alt={node.id} width={"300px"} height={"300px"} />
            <div style={{ width: "400px", height: "2px", background: "gray" }} />
          </li>
        )}
      </ul>
    </Layout>
  )

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */

export default IndexPage

export const query = graphql`
  query {
    fileInformation: allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            price
          }
          html
        }
      }
    }
  }
`
