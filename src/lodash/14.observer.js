// 14发布订阅

class Observer {
  caches = {};

  on(eventName, cb) {
    this.caches[eventName] = this.caches[eventName] || [];
    this.caches[eventName].push(cb);
  }

  emit(eventName, payload) {
    if (this.caches[eventName]) {
      this.caches[eventName].forEach(cb => cb(payload));
    }
  }

  off(eventName, cb) {
    if (this.caches[eventName]) {
      const newCaches = cb ? this.caches[eventName].filter(fn => fn !== cb) : [];
      this.caches[eventName] = newCaches;
    }
  }
}
