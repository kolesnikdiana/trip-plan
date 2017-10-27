// @flow
import * as React from 'react';

import HintList from '../styled-components/lists/hints';
import type { City as CityType } from '../../../core/types';

type Props = {
  cities: CityType[] | null
};

const SearchHint = ({ cities }: Props): React.Node => (
  <HintList>
    {
      cities.length === 0 ?

        <li>No items to be displayed</li> :

        cities.map((city: CityType): React.Node => (
          <HintList.Item key={city.id} checked={city.isVisited}>{city.name}</HintList.Item>
        ))
    }
  </HintList>
);

export default SearchHint;
