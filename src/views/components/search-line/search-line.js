// @flow
import * as React from 'react';
import Search from '../styled-components/inputs/input-search';

import type { searchOnline as searchOnlineType } from '../../../core/types';

type Props = {
  onSearch: searchOnlineType
};

const SearchLine = (props: Props): React.Node => (
  <Search.Line
    placeholder="Start typing to find the staff"
    onChange={(e: SyntheticInputEvent<HTMLInputElement>) =>
      props.onSearch(e.target.value)
    }
  />
);

export default SearchLine;
