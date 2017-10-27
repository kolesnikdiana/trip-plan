// @flow
import * as React from 'react';
import Search from '../styled-components/inputs/input-search';

import type {
  searchOnline as searchOnlineType,
  setFocusState as setFocusStateType
} from '../../../core/types';

type Props = {
  onSearch: searchOnlineType,
  setFocusState: setFocusStateType
};

const SearchLine = (props: Props): React.Node => (
  <Search.Line
    placeholder="Start typing to find the staff"
    onBlur={(): void => props.setFocusState(false)}
    onFocus={(): void => props.setFocusState(true)}
    onChange={(e: SyntheticInputEvent<HTMLInputElement>): void =>
      props.onSearch(e.target.value)
    }
  />
);

export default SearchLine;
