/// <reference path="../node_modules/@types/jasmine/index.d.ts" />
/// <reference path="../dist/shaft.js" />

describe("#PBB.model repeated fields", () => {

  describe("must return a Backbone Collection", () => {
    let TestMessage, testMessage;
    let AnotherMessage, anotherMessage;

    beforeEach(() => {
      TestMessage = PBB.model.get("repeated", "TestMessage");
      testMessage = new TestMessage();
      AnotherMessage = PBB.model.get("repeated", "AnotherMessage");
      anotherMessage = new AnotherMessage();
    });

    afterEach(() => {
      TestMessage = null;
      testMessage = null;
      AnotherMessage = null;
      anotherMessage = null;
    });

    it("for repeated scalar simple types", () => {
      expect(testMessage.get("snippets").length).toBeDefined();
    });

    it("for repeated message simple types", () => {
      expect(anotherMessage.get("inners").length).toBeDefined();
    });

  });
});

