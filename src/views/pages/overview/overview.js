// @flow
import * as React from 'react';

// styled components
import { InnerPage } from '../../components/styled-components/containers/sections';
import { Subtitle } from '../../components/styled-components/titles';
import Diagram from '../../components/styled-components/diagram';
import * as Theme from '../../components/styled-components/diagram/themes';

import type { City as CityType } from '../../../core/types';

type Props = {
  cities: CityType[]
};

const Overview = ({ cities }: Props): React.Node => {
  const allCount = cities.length;
  const visitedCount = cities.filter((city: CityType): void =>
    city.isVisited).length;
  const remainingCount = allCount - visitedCount;

  return (
    <InnerPage>
      <Subtitle>
        All places: {allCount}
      </Subtitle>

      {/* the biggest part is represented by a diagram's background */}
      <Diagram themeFor={remainingCount > visitedCount ?
        Theme.unVisitedPortionTheme : Theme.visitedPortionTheme}
      >
        {/* less part is represented by pie piece */}
        <Diagram.Portion
          themeFor={remainingCount > visitedCount ?
            Theme.visitedPortionTheme : Theme.unVisitedPortionTheme}
          size={360 * (Math.min(visitedCount, remainingCount) / allCount)}
        />
        {
          remainingCount === 0 &&
          <Diagram.Message>
            Congratulations! You&#39;ve visited all places from the list!!
          </Diagram.Message>
        }
      </Diagram>

      <Diagram.Label>

        <Diagram.Line themeFor={Theme.visitedPortionTheme}>
          Visited places:
          <span> {visitedCount}</span>
        </Diagram.Line>

        <Diagram.Line themeFor={Theme.unVisitedPortionTheme}>
          Remaining places:
          <span> {remainingCount}</span>
        </Diagram.Line>

      </Diagram.Label>

    </InnerPage>
  );
};

export default Overview;
