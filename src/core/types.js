// @flow
export type City = {
  id: string,
  name: string,
  isVisited: boolean
};

export type FilterState = {
  showVisited: boolean,
  showUnvisited: boolean
};

// function types
export type toggleCity = (
  e: SyntheticInputEvent<HTMLInputElement>
) => void;

export type addCity = (
  name: string
) => void;

export type changeFilter = ({
  filter: string,
  value: boolean
}) => void;

export type searchOnline = ({
  value: string
}) => void;
