
const request = url => Promise.resolve();

const cacheRequestFn = () => {
  const cache = {};
  return (url, cb) => {
    cb(cache[url] ? cache[url] : (cache[url] = request(url)));
  };
};

const cacheRequest = cacheRequestFn();


const request1 = url => Promise.resolve(url);

const cacheRequest1 = () => {
  const cache = Object.create(null);
  return (url, cb) => {
    cb(cache[url] ? cache[url] : (cache[url] = request1(url)));
  };
};

const request_2 = cacheRequest1();

request_2('/path', () => {
  console.log('test');
});

