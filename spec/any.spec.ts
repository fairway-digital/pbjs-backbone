/// <reference path="../node_modules/@types/jasmine/index.d.ts" />
/// <reference path="../dist/pbb.js" />

describe("#PBB.model Any field type", () => {

  describe("should generate plain Backbone Model", () => {
    let ErrorStatus, errorStatus;

    beforeEach(() => {
      ErrorStatus = PBB.model.get("any", "ErrorStatus");
      errorStatus = new ErrorStatus();
    });

    afterEach(() => {
      ErrorStatus = null;
      errorStatus = null;
    });

    it("for repeated scalar simple types", () => {
      expect(errorStatus.get("details")).toBeDefined();
    });

  });
});

