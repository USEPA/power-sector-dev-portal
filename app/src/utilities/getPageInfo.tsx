// utilities/getPageInfo.ts
import { Location } from "react-router-dom";

export const getPageInfo = (location: Location) => {
  if (location.pathname.startsWith("/datavis")) {
    return {
      route: "/datavis",
      title: "Data Visualization Style Guide",
      isDatavisRoute: true,
    };
  }
  if (location.pathname.startsWith("/rstyle")) {
    return { route: "/rstyle", title: "Custom ggplot Theme", isRStyleRoute: true };
  }
  if (location.pathname.startsWith("/api")) {
    return { route: "/api", title: "API Documentation", isApiRoute: true };
  }

  return { route: "/", title: "Open Source Resource Hub", isHomeRoute: true };
};

// Helper function to determine if the current path matches a given link
export const isCurrentPath = (location: Location, path: string) =>
  location.pathname.startsWith(path);

export const isExactlyPath = (location: Location, path: string) =>
  location.pathname === path;

export const getPageLevelforBreadcrumbs = (location: Location) => {
  if (
    isExactlyPath(location, "/datavis") ||
    isExactlyPath(location, "/datavis/charts") ||
    isExactlyPath(location, "/datavis/principles") ||
    isExactlyPath(location, "/datavis/design-elements") ||
    isExactlyPath(location, "/datavis/further-reading") ||
    isExactlyPath(location, "/rstyle")
  ) {
    return { isRouteWithBanner: true };
  }
  return { isRouteWithBanner: false };
};
