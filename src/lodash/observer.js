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

class Event {
  constructor() {
    this._events = Object.create(null);
  }

  on(eventName, cb) {
    this._events = this._events[eventName] || [];
    this._events.push(cb);
  }

  emit(eventName, ...args) {
    if (this._events[eventName]) {
      this._events[eventName].forEach(fn => fn(args));
    }
  }

  off(eventName, cb) {
    if (this._events[eventName]) {
      const newEvents = cb ? this._events[eventName].filter(fn => fn !== cb) : [];
      this._events[eventName] = newEvents;
    }
  }
}
