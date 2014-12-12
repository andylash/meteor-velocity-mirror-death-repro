
// if i just call MochaWeb.testOnly I get this error
// loading source file: /Users/mike/velocity/example/mocha-web-tests/client/clientTest.js
// Exception loading helper: /Users/mike/velocity/example/packages/jasmine-unit/lib/loader-helper.js
// [ReferenceError: MochaWeb is not defined]

if (!(typeof MochaWeb === 'undefined')){
  MochaWeb.testOnly(function(){
    throw new Error("Unexpected error");

    describe("Select Grace Hopper", function(){
    });
  });
}

