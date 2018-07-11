/* eslint-disable jsx-a11y/anchor-is-valid */
// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';

// components
import SearchHint from '../../containers/search-hint';
import SearchLine from '../../components/search-line';

// styled components
import Panel from '../styled-components/containers/panel';
import Title from '../styled-components/titles';
import Navigation, { NavigationLinkTheme } from '../styled-components/navigation';
import StyledLink, { LogoTheme } from '../styled-components/link';

import type {
  searchOnline as searchOnlineType,
  setFocusState as setFocusStateType,
  SearchLineType
} from '../../../core/types';

type Props = {
  pathname: string,
  searchLine: SearchLineType,
  onSearch: searchOnlineType,
  setFocusState: setFocusStateType
};

const Header = (props: Props): React.Node => (

  <Panel header>
    <Title>
      <StyledLink theme={LogoTheme}>
        <Link to="/">TripPlan</Link>
      </StyledLink>
    </Title>

    <Navigation>
      <li>
        <StyledLink theme={NavigationLinkTheme}>
          <Link to="/">Home</Link>
        </StyledLink>
      </li>
      <li>
        <StyledLink theme={NavigationLinkTheme}>
          <Link to="/overview">Overview</Link>
        </StyledLink>
      </li>
    </Navigation>

    <SearchLine
      onSearch={props.onSearch}
      setFocusState={props.setFocusState}
    />
    {
      props.pathname !== '/' &&
      props.searchLine.focus &&
      <SearchHint />
    }
  </Panel>
);

export default Header;
