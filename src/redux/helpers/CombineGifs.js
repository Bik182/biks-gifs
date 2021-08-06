import * as _ from "lodash";

export function checkContains(data, id) {
  _.forEach(data, (obj) => {
    if (id === obj.id) {
      return true;
    }
  });
  return false;
}
export function parseGifs(data, searchType) {
  const parsed = {
    [searchType]: _.map(data, (object) => {
      return parseObject(object);
    }),
  };
  return parsed;
}
export function parseTrending(data) {
  return _.map(data, (object) => {
    return parseObject(object);
  });
}

function parseObject(obj) {
  return {
    id: obj.id,
    title: obj.title,
    url: obj.url,
    images: obj.images,
  };
}
