
const request = url => Promise.resolve();

const cacheRequestFn = () => {
  const cache = {};
  return (url, cb) => {
    cb(cache[url] ? cache[url] : (cache[url] = request(url)));
  };
};

const cacheRequest = cacheRequestFn();
