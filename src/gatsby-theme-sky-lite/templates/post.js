import React from "react";
import { Link, graphql } from "gatsby";
import { Disqus, CommentCount } from 'gatsby-plugin-disqus';
import { makeStyles } from "@material-ui/styles";
import Img from "gatsby-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/Layout";
import moment from "moment";
import { Box, Button, Chip, Typography } from "@material-ui/core";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const useStyles = makeStyles(() => ({
  article: {
    lineHeight: 1.6,
    fontFamily: "Merriweather, Georgia, serif",
    fontSize: "1.1rem",
    "& blockquote": {
      borderLeft: "3px solid #303032",
      marginLeft: -16,
      paddingLeft: 13,
      fontStyle: "italic"
    }
  },
  chip: {
    marginRight: 4
  }
}));

const Tags = ({ tags }) => {
  const classes = useStyles();

  return (
    <Box marginY={1}>
      {tags.map(tag => {
        return (
          <Chip
            color="primary"
            variant="outlined"
            classes={{ root: classes.chip }}
            label={tag}
            key={tag}
            component={Link}
            to={`/tag/${tag}`}
            onClick={() => {}}
          />
        );
      })}
    </Box>
  );
};

export default function PostTemplate({ data, pageContext }) {
  const classes = useStyles();
  const { mdx, site } = data;
  const {
    frontmatter: { featuredImage, title, tags, author },
    body
  } = mdx;
  const { previousPath, nextPath, postDate, postId } = pageContext;
  console.log(pageContext);
  let disqusConfig = {
    url: `${site.siteMetadata.siteUrl}/posts/${postId}`,
    identifier: postId,
    title,
  }
  console.log('disqusConfig', disqusConfig);
  return (
    <Layout>
      <Box flexGrow={1} width="100%" maxWidth={960} marginX="auto">
        <Box padding={2}>
          <Box marginBottom={1}>
            <Typography
              variant="h4"
              style={{
                fontFamily:
                  "Work Sans, -apple-system, BlinkMacSystemFont, Roboto, sans-serif"
              }}
            >
              {title}
            </Typography>
            <Typography variant="body2">
              {moment(postDate).locale('pt-br').format("LL")} por {author} / <CommentCount config={disqusConfig} placeholder={'...'} />
            </Typography>
            <Tags tags={tags} />
          </Box>
          <Img
            fluid={featuredImage.childImageSharp.fluid}
            style={{ borderRadius: 2 }}
          />
          <article className={classes.article}>
            <MDXRenderer>{body}</MDXRenderer>
          </article>
          <Disqus config={disqusConfig} />
          <Box display="flex">
            <Box flexGrow={1}>
              {previousPath && (
                <Button
                  component={Link}
                  to={previousPath}
                  variant="outlined"
                  color="secondary"
                >
                  <FaChevronLeft size={8} />
                  <Box marginLeft={0.5}>Anterior</Box>
                </Button>
              )}
            </Box>
            {nextPath && (
              <Button
                component={Link}
                to={nextPath}
                variant="outlined"
                color="secondary"
              >
                <Box marginRight={0.5}>Próximo</Box>
                <FaChevronRight size={8} />
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($postId: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    } 
    mdx(frontmatter: { id: { eq: $postId } }) {
      body
      frontmatter {
        id
        title
        tags
        author
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1280) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
