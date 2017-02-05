/// <reference path="../node_modules/@types/jasmine/index.d.ts" />
/// <reference path="../shaft.d.ts" />

describe("#shaft.model repeated fields", () => {

  describe("must return a Backbone Collection", () => {
    let TestMessage, testMessage;
    let AnotherMessage, anotherMessage;

    beforeEach(() => {
      TestMessage = shaft.model.get("repeated", "TestMessage");
      testMessage = new TestMessage();
      AnotherMessage = shaft.model.get("repeated", "AnotherMessage");
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

