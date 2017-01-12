describe("#PBB.model repeated fields", function() {

  describe("must return a Backbone Collection", function() {
    var TestMessage, testMessage;
    var AnotherMessage, anotherMessage;

    beforeEach(function() {
      TestMessage = PBB.model.get("repeated", "TestMessage");
      testMessage = new TestMessage();
      AnotherMessage = PBB.model.get("repeated", "AnotherMessage");
      anotherMessage = new AnotherMessage();
    });

    afterEach(function() {
      TestMessage = null;
      testMessage = null;
      AnotherMessage = null;
      anotherMessage = null;
    });

    it("for repeated scalar simple types", function() {
      expect(testMessage.get("snippets").length).toBeDefined();
    });

    it("for repeated message simple types", function() {
      expect(anotherMessage.get("inners").length).toBeDefined();
    });

  });
});

