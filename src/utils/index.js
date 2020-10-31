export function getVaildParams(params) {
  let newParams = {};
  Object.entries(params).forEach(([key, value]) => {
    if (![null, undefined].includes(value)) {
      newParams[key] = value;
    }
  });
  return newParams;
}
