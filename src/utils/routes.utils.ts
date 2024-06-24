import { NavigationMap, NavigationSection, RoutePathParams } from '@/types';

/**
 * Creates a map of navigation links from an array of navigation sections.
 *
 * @param navigation - An array of navigation sections.
 * @returns A map where the key is the path and the value is an object containing the title and linkable status.
 */
export const createNavigationLinkMap = (navigation: NavigationSection[]): NavigationMap => {
  return navigation.reduce<NavigationMap>((acc, section) => {
    section.links.forEach((link) => {
      if (link.children) {
        // If the link has children, mark the parent link as not linkable and add the children as linkable
        acc[link.path] = { title: link.title, linkable: false };
        link.children.forEach((nestedLink) => {
          acc[nestedLink.path] = {
            title: nestedLink.title,
            linkable: true,
          };
        });
      } else {
        // If the link has no children, add it as linkable
        acc[link.path] = { title: link.title, linkable: true };
      }
    });
    return acc;
  }, {});
};

/**
 * Validates if the given pathname exists in the navigation map.
 *
 * @param pathname - The path to validate.
 * @param navigationMap - The map of navigation links.
 * @returns True if the path is valid, otherwise false.
 */
export const isValidNavigationPath = (pathname: string, navigationMap: NavigationMap): boolean => {
  const pathSegments = pathname.split('/').filter((segment) => segment);
  return pathSegments.every((_, index) => {
    const currentPath = `/${pathSegments.slice(0, index + 1).join('/')}`;
    return !!navigationMap[currentPath]; // Return false if currentPath is not defined in navigationMap
  });
};

/**
 * Builds a route path by replacing route parameters with the given values.
 *
 * @param route - The route template string with parameters (e.g., '/users/:userId').
 * @param params - An object containing the parameter values to replace in the route.
 * @returns The route path with the parameters replaced by their corresponding values.
 */
export const buildRoutePath = (route: string, params: RoutePathParams): string => {
  let path = route;
  Object.keys(params).forEach((key) => {
    path = path.replace(`:${key}`, params[key].toString());
  });
  return path;
};
