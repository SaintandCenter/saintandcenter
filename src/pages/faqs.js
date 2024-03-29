import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Expandable from "../components/expandable"
import { StaticQuery, graphql } from "gatsby"
import FAQsCategory from "../components/faqsCategory"

const Wrapper = styled.div`
  margin-top: 56px;
`

const FAQs = ({ location }) => {
  return (
    <Layout location={location}>
      <StaticQuery
        query={graphql`
          query FAQCategoryQuery {
            allWordpressWpFaq(sort: { fields: slug }) {
              edges {
                node {
                  title
                  wordpress_id
                  content
                  categories {
                    wordpress_id
                  }
                }
              }
            }
            allWordpressCategory {
              edges {
                node {
                  id
                  slug
                  wordpress_id
                  name
                }
              }
            }
          }
        `}
        render={data => {
          console.log(data)
          return (
            <Wrapper data-testid="faqs">
              {data.allWordpressWpFaq &&
                data.allWordpressCategory.edges.map(category => (
                  <Expandable
                    large
                    key={category.node.wordpress_id}
                    title={category.node.name}
                  >
                    <FAQsCategory
                      data={data.allWordpressWpFaq.edges.filter(
                        x =>
                          x.node.categories[0].wordpress_id ===
                          category.node.wordpress_id
                      )}
                    />
                  </Expandable>
                ))}
            </Wrapper>
          )
        }}
      />
    </Layout>
  )
}

export default FAQs
