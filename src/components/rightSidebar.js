import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

// import Link from './link';
import config from '../../config';
import { Sidebar, ListItem } from './styles/Sidebar';

const SidebarLayout = ({ location }) => (
  <StaticQuery
    query={graphql`
      query {
        allMdx {
          edges {
            node {
              fields {
                slug
              }
              tableOfContents
            }
          }
        }
      }
    `}
    render={({ allMdx }) => {
      let navItems = [];

      let finalNavItems;

      if (allMdx.edges !== undefined && allMdx.edges.length > 0) {
        const navItems = allMdx.edges.map((item, index) => {
          let innerItems;

          if (item !== undefined) {
            if (
              item.node.fields.slug === location.pathname ||
              config.gatsby.pathPrefix + item.node.fields.slug === location.pathname
            ) {
              if (item.node.tableOfContents.items) {
                innerItems = [];

                const pushItem = (item, index, level) => {
                  const itemId = item.title
                    ? item.title.replace(/\s+/g, '').toLowerCase()
                    : '#';

                  innerItems.push(
                    <ListItem key={`${level}-${index}`} to={`#${itemId}`} level={level}>
                      {item.title}
                    </ListItem>
                  );
                };

                let depth = 0;

                item.node.tableOfContents.items.forEach((innerItem, index) => {
                  pushItem(innerItem, index, depth);
                  if (innerItem.items) {
                    depth++;
                    innerItem.items.forEach((child, i) => pushItem(child, i, depth));
                    depth--;
                  }
                });
              }
            }
          }
          if (innerItems) {
            finalNavItems = innerItems;
          }
        });
      }

      if (finalNavItems && finalNavItems.length) {
        return (
          <Sidebar>
            <ul className={'rightSideBarUL'}>
              <li className={'rightSideTitle'}>CONTENTS</li>
              {finalNavItems}
            </ul>
          </Sidebar>
        );
      } else {
        return (
          <Sidebar>
            <ul></ul>
          </Sidebar>
        );
      }
    }}
  />
);

export default SidebarLayout;
