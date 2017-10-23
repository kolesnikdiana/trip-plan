// @flow
import * as React from 'react';

import * as types from '../../../core/types';
import CitiesList from '../../components/cities-list';
import AddItem from '../../components/add-item';
import FilterSection from '../../components/filter-section';

// styled components
import Section from '../../components/styled-components/containers/sections';
import Panel from '../../components/styled-components/containers/panel';

type Props = {
  cities: types.City[],
  filterState: types.FilterState,
  onTick: types.toggleCity,
  onAddPlace: types.addCity,
  onFilterChange: types.changeFilter
};

const Home = (props: Props): React.Node => (
  <div>
    <Panel>
      <AddItem onItemAdd={props.onAddPlace} />

      <FilterSection
        filterState={props.filterState}
        onFilterChange={props.onFilterChange}
      />
    </Panel>

    <Section>
      <CitiesList
        cities={props.cities}
        onTick={props.onTick}
      />
    </Section>

  </div>
);

export default Home;
