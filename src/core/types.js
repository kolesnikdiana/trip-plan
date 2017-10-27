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
  string
) => void;

export type addCity = (
  name: string
) => void;

export type changeFilter = (
  string
) => void;

export type searchOnline = (
  value: string
) => void;
