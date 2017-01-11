describe("#PBB.model", function() {
  describe(".get", function() {
    it("must be defined", function() {
      expect(PBB.model.get).toBeDefined();
    });

    describe("must return a Backbone Model", function() {
      var TestMessage, testMessage;

      beforeEach(function() {
        TestMessage = PBB.model.get("models", "TestMessage");
        testMessage = new TestMessage();
      });

      afterEach(function() {
        TestMessage = null;
        testMessage = null;
      });

      it("Class", function() {
        expect(TestMessage).toBeDefined();
      });

      it("instantiable", function() {
        expect(testMessage).toBeDefined();
      });

    });
  });
});

