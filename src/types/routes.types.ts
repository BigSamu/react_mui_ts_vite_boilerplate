// Represents a mapping of route parameters to their values.
export interface RoutePathParams {
  [key: string]: string | number;
}

// Represents a single navigation link with an optional array of child links.
export interface NavigationLink {
  title: string;
  path: string;
  children?: NavigationLink[];
  icon?: JSX.Element;
}

// Represents a section in the navigation menu, containing multiple links.
export interface NavigationSection {
  title: string;
  links: NavigationLink[];
}

// Represents a map of navigation links.
export interface NavigationMap {
  [path: string]: {
    title: string;
    linkable: boolean;
  };
}
