function ajax(url) {

}

function *main() {
  try {
    const res = yield ajax('/');
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

function co(generator) {
  const g = generator();

  function handleResult(result) {
    if (result.done) return;
    result.value.then(data => {
      handleResult(g.next(data));
    }, error => {
      g.throw(error);
    });
  }
  handleResult(g.next());
}

co(main);
