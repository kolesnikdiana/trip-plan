/* eslint-disable jsx-a11y/anchor-is-valid */
// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';

import HintList, { hintLinkTheme } from '../styled-components/lists/hints';
import type { City as CityType } from '../../../core/types';

type Props = {
  cities: CityType[] | null
};

const SearchHint = ({ cities }: Props): React.Node => (
  <div>
    <HintList>
      {
        cities.length === 0 ?

          <li>No items to be displayed</li> :
          cities.map((city: CityType): React.Node => (
            <li key={city.id}>
              <HintList.Link
                checked={city.isVisited}
                theme={hintLinkTheme}
              >
                <Link to={`/details/${city.id}`}>{city.name}</Link>
              </HintList.Link>
            </li>
          ))
      }
    </HintList>
  </div>

);

export default SearchHint;
