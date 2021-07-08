const obj = {
  a() {
    console.log('a');
    return this;
  },
  b() {
    console.log('b');
    return this;
  },
};

obj.a().b();
