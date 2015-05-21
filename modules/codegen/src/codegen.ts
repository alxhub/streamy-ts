/// <reference path="../../../node_modules/rx/ts/rx.all.d.ts"/>
declare var require: Function;
var x = require('../../../node_modules/rx/dist/rx.all');

class Foo {
  name: string;
  generator: Rx.Observable<string>;
  constructor() {
    this.name = "Hello";
    this.generator = Rx.Observable.create<string>(observer => {
        observer.onNext("hello");
      });
  }
}
