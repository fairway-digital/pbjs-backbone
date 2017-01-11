describe("#PBB.model", function() {
  describe(".get", function() {
    it("must be defined", function() {
      expect(PBB.model.get).toBeDefined();
    });

    describe("must return a Backbone Model", function() {
      var TestMessage, testMessage;
      var MessageContainer, messageContainer;

      beforeEach(function() {
        TestMessage = PBB.model.get("models", "TestMessage");
        testMessage = new TestMessage();
        MessageContainer = PBB.model.get("models", "MessageContainer");
        messageContainer = new MessageContainer();
      });

      afterEach(function() {
        TestMessage = null;
        testMessage = null;
        MessageContainer = null;
        messageContainer = null;
      });

      it("Class", function() {
        expect(TestMessage).toBeDefined();
      });

      it("instantiable", function() {
        expect(testMessage).toBeDefined();
      });

      describe("#nested fields", function() {
        it("should be attached", function() {
          expect(messageContainer.get("inner")).toBeDefined();
          expect(messageContainer.get("inner").get("field")).toBe("");
        });
      });

    });
  });
});

