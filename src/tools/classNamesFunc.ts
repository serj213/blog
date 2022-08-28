export const classNamesFunc = (className: any, modific: any) => {
  const nameClasses = Object.keys(className).map((key) => {
    return className[key] === true ? modific[`${key}`] : null;
  });

  return nameClasses.filter((item) => item !== null).join(' ');
};
