export const getCurrentPageTitle = route => {
  let parentName = route.routes[route.index];
  if (parentName.state) {
    return getCurrentPageTitle(parentName.state);
  }
  return parentName.name;
};
