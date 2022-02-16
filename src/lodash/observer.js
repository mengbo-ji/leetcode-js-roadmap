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

class MyEvent {
  _events = {};

  on(eventName, cb) {
    this._events[eventName] = this._events[eventName] || [];
    this._events[eventName].push(cb);
  }

  once(eventName, cb) {
    const tempFn = (...args) => {
      cb(...args);
      this.off(eventName, tempFn);
    };
    tempFn.link = cb;
    this.on(eventName, tempFn);
  }

  emit(eventName, ...args) {
    if (this._events[eventName]) {
      this._events[eventName].forEach(fn => fn(...args));
    }
  }

  off(eventName, cb) {
    if (this._events[eventName]) {
      const newEvents = cb ? this._events[eventName].filter(fn => fn !== cb && fn.link !== cb) : [];
      this._events[eventName] = newEvents;
    }
  }
}

const event = new MyEvent();
const fn = payload => {
  console.log('事件1执行了', payload);
};
event.once('事件1', fn);
event.emit('事件1', 1);
event.emit('事件1', 2);

class Observer2 {
  _events = {}

  on(eventName, cb) {
    this._events[eventName] = this._events[eventName] || [];
    this._events[eventName].push(cb);
  }
  emit(eventName, payload) {
    if (this._events[eventName]) {
      this._events[eventName].forEach(cb => cb(payload));
    }
  }
  off(eventName, cb) {
    if (this._events[eventName]) {
      const newEvents = cb ? this._events[eventName].filter(v => cb !== v) : [];
      this._events[eventName] = newEvents;
    }
  }
}

