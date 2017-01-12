describe("#PBB.model Any field type", function() {

  describe("should generate plain Backbone Model", function() {
    var ErrorStatus, errorStatus;

    beforeEach(function() {
      ErrorStatus = PBB.model.get("any", "ErrorStatus");
      errorStatus = new ErrorStatus();
    });

    afterEach(function() {
      ErrorStatus = null;
      errorStatus = null;
    });

    it("for repeated scalar simple types", function() {
      expect(errorStatus.get("details")).toBeDefined();
    });

  });
});

