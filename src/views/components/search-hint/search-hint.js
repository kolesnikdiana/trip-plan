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
          <li key={city.id}>{city.name}</li>
        ))
    }
  </HintList>
);

export default SearchHint;
