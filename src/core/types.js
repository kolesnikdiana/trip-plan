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

export type SearchLineType = {
  value: string,
  focus: boolean
};

// function types
export type toggleCity = (
  id: string
) => void;

export type addCity = (
  name: string
) => void;

export type changeFilter = (
  id: string
) => void;

export type searchOnline = (
  value: string
) => void;

export type setFocusState = (
  boolean
) => void;
