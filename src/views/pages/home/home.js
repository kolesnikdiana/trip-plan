import React from 'react';

import CitiesList from '../../components/cities-list';
import AddItem from '../../components/add-item';
import FilterSection from '../../components/filter-section';

const Home = state => (
  <div>

    <AddItem onItemAdd={state.onAddPlace} />

    <FilterSection
      filterTag={state.filterTag}
      onFilterChange={state.onFilterChange}
    />

    <div className="app-root__page-content">
      <CitiesList
        cities={state.cities}
        onTick={state.onTick}
      />
    </div>

  </div>
);

export default Home;
