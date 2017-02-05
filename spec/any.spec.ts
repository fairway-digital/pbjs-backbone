/// <reference path="../node_modules/@types/jasmine/index.d.ts" />
/// <reference path="../index.d.ts" />

describe("#shaft.model Any field type", () => {

  describe("should generate plain Backbone Model", () => {
    let ErrorStatus, errorStatus;

    beforeEach(() => {
      ErrorStatus = shaft.model.get("any", "ErrorStatus");
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

