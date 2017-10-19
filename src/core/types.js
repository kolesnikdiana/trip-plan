// @flow
export type City = {
  id: string,
  name: string,
  isVisited: boolean
};

// function types
export type toggleCity = (
  e: SyntheticInputEvent<HTMLInputElement>
) => void;

export type addCity = (
  name: string
) => void;


export type changeFilter = (
  tag: string
) => void;
