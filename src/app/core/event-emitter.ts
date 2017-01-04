export class EventEmitter {
  private handlers = {};

  on(type: string, callback) {
    this.handlers[type] = this.handlers[type] || [];
    this.handlers[type].push(callback);
  }

  off(type: string, callback) {
    if ((this.handlers[type] || []).includes(callback)) {
      const index = this.handlers[type].indexOf(callback);

      this.handlers[type].splice(index, 1);
    }
  }

  emit(type: string, data: any) {
    (this.handlers[type] || []).forEach((callback) => {
      callback(data);
    });
  }
}
