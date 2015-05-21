/// <reference path="../../../node_modules/rx/ts/rx.all.d.ts"/>
var x = require('../../../node_modules/rx/dist/rx.all');
var Foo = (function () {
    function Foo() {
        this.name = "Hello";
        this.generator = Rx.Observable.create(function (observer) {
            observer.onNext("hello");
        });
    }
    return Foo;
})();
//# sourceMappingURL=codegen.js.map