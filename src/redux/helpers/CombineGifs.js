import * as _ from "lodash";

export function checkContains(data, id) {
  _.forEach(data, (obj) => {
    if (id == obj.id) {
      console.log("true");
      return true;
    }
    console.log("looop");
  });
  return false;
}
export function combineGifs(data, searchType) {
  const parsed = {
    [searchType]: _.map(data, (object) => {
      return parseObject(object);
    }),
  };
  return parsed;
}
export function parseTrending(data) {
  const parsedData = {
    trending: _.map(data, (object) => {
      return parseObject(object);
    }),
  };
  return parsedData;
}

function parseObject(obj) {
  return {
    id: obj.id,
    title: obj.title,
    url: obj.url,
    images: obj.images,
  };
}
