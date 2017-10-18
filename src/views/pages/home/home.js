// @flow
import * as React from 'react';
import * as types from '../../components/types';
import CitiesList from '../../components/cities-list';
import AddItem from '../../components/add-item';
import FilterSection from '../../components/filter-section';

type Props = {
  cities: types.City[],
  filterTag: string,
  onTick: types.toggleCity,
  onAddPlace: types.addCity,
  onFilterChange: types.changeFilter
};

const Home = (props: Props): React.Node => (
  <div>

    <AddItem onItemAdd={props.onAddPlace} />

    <FilterSection
      filterTag={props.filterTag}
      onFilterChange={props.onFilterChange}
    />

    <div className="app-root__page-content">
      <CitiesList
        cities={props.cities}
        onTick={props.onTick}
      />
    </div>

  </div>
);

export default Home;
