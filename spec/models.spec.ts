/// <reference path="../node_modules/@types/jasmine/index.d.ts" />
/// <reference path="../dist/shaft.js" />

describe("#PBB.model", () => {
  describe(".get", () => {
    it("must be defined", () => {
      expect(PBB.model.get).toBeDefined();
    });

    describe("must return a Backbone Model", () => {
      let TestMessage, testMessage;
      let MessageContainer, messageContainer;

      beforeEach(() => {
        TestMessage = PBB.model.get("models", "TestMessage");
        testMessage = new TestMessage();
        MessageContainer = PBB.model.get("models", "MessageContainer");
        messageContainer = new MessageContainer();
      });

      afterEach(() => {
        TestMessage = null;
        testMessage = null;
        MessageContainer = null;
        messageContainer = null;
      });

      it("Class", () => {
        expect(TestMessage).toBeDefined();
      });

      it("instantiable", () => {
        expect(testMessage).toBeDefined();
      });

      describe("#nested fields", () => {
        it("should be attached", () => {
          expect(messageContainer.get("inner")).toBeDefined();
          expect(messageContainer.get("inner").get("field")).toBe("");
        });
      });

    });
  });
});

