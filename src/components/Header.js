import React from 'react';
import styled from '@emotion/styled';
import { StaticQuery, graphql } from 'gatsby';
import Link from './link';
import Loadable from 'react-loadable';

import config from '../../config.js';
import LoadingProvider from './mdxComponents/loading';
import { DarkModeSwitch } from './DarkModeSwitch';

const isSearchEnabled = config.header.search && config.header.search.enabled ? true : false;

let searchIndices = [];

if (isSearchEnabled && config.header.search.indexName) {
  searchIndices.push({
    name: `${config.header.search.indexName}`,
    title: `Results`,
    hitComp: `PageHit`,
  });
}

import Sidebar from './sidebar';

const LoadableComponent = Loadable({
  loader: () => import('./search/index'),
  loading: LoadingProvider,
});

function myFunction() {
  var x = document.getElementById('navbar');

  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

const StyledBgDiv = styled('div')`
  height: 60px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #f8f8f8;
  position: relative;
  display: none;
  background: ${props => (props.isDarkThemeActive ? '#001932' : undefined)};

  @media (max-width: 767px) {
    display: block;
  }
`;

const NavBarDefault = styled('nav')`
  background-color: ${props => (props.isDarkThemeActive ? '#445590' : '#8899e2')};
  border-radius: 0;
  border-top: 0;
  margin-bottom: 0;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: -1px 0px 4px 1px rgba(175, 158, 232, 0.4);
  -webkit-box-shadow: -1px 0px 4px 1px rgba(175, 158, 232, 0.4);
  -moz-box-shadow: -1px 0px 4px 1px rgba(175, 158, 232, 0.8);
  -o-box-shadow: -1px 0px 4px 1px rgba(175, 158, 232, 0.4);
  z-index: 1;
  padding: 15px;
  position: relative;
  height: 80px;
`;

const Header = ({ location, isDarkThemeActive, toggleActiveTheme }) => (
  <StaticQuery
    query={graphql`
      query headerTitleQuery {
        site {
          siteMetadata {
            headerTitle
            githubUrl
            helpUrl
            tweetText
            logo {
              link
              image
            }
            headerLinks {
              link
              text
            }
          }
        }
      }
    `}
    render={data => {
      const logoImg = require('./images/node-branches-icon.png');

      const twitter = require('./images/twitter.svg');

      const discordBrandsBlock = require('./images/discord-brands-block.svg');

      const twitterBrandsBlock = require('./images/twitter-brands-block.svg');

      const {
        site: {
          siteMetadata: { headerTitle, githubUrl, helpUrl, tweetText, logo, headerLinks },
        },
      } = data;

      const finalLogoLink = logo.link !== '' ? logo.link : 'https://hasura.io/';

      return (
        <div className={'navBarWrapper'}>
          <NavBarDefault isDarkThemeActive={isDarkThemeActive}>
            <div className={'navBarHeader'}>
              <Link to={finalLogoLink} className={'navBarBrand'}>
                <img
                  className={'img-responsive displayInline'}
                  src={logo.image !== '' ? logo.image : logoImg}
                  alt={'logo'}
                />
              </Link>
              <div
                className={'headerTitle displayInline'}
                dangerouslySetInnerHTML={{ __html: headerTitle }}
              />
            </div>
            {config.header.social ? (
              <ul
                className="socialWrapper visibleMobileView"
                dangerouslySetInnerHTML={{ __html: config.header.social }}
              ></ul>
            ) : null}
            {isSearchEnabled ? (
              <div className={'searchWrapper hiddenMobile navBarUL'}>
                <LoadableComponent collapse={true} indices={searchIndices} />
              </div>
            ) : null}
            <div id="navbar" className={'topnav'}>
              <div className={'visibleMobile'}>
                <Sidebar location={location} />
                <hr />
              </div>

              <DarkModeSwitch
                isDarkThemeActive={isDarkThemeActive}
                toggleActiveTheme={toggleActiveTheme}
              />
            </div>
          </NavBarDefault>
          <StyledBgDiv isDarkThemeActive={isDarkThemeActive}>
            <div className={'navBarDefault removePadd'}>
              <span
                onClick={myFunction}
                className={'navBarToggle'}
                onKeyDown={myFunction}
                role="button"
                tabIndex={0}
              >
                <span className={'iconBar'}></span>
                <span className={'iconBar'}></span>
                <span className={'iconBar'}></span>
              </span>
            </div>
            {isSearchEnabled ? (
              <div className={'searchWrapper'}>
                <LoadableComponent collapse={true} indices={searchIndices} />
              </div>
            ) : null}
          </StyledBgDiv>
        </div>
      );
    }}
  />
);

export default Header;
