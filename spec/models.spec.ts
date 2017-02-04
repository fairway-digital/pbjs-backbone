/// <reference path="../node_modules/@types/jasmine/index.d.ts" />
/// <reference path="shaft.js" />

describe("#shaft.model", () => {
  describe(".get", () => {
    it("must be defined", () => {
      expect(shaft.model.get).toBeDefined();
    });

    describe("must return a Backbone Model", () => {
      let TestMessage, testMessage;
      let MessageContainer, messageContainer;

      beforeEach(() => {
        TestMessage = shaft.model.get("models", "TestMessage");
        testMessage = new TestMessage();
        MessageContainer = shaft.model.get("models", "MessageContainer");
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

