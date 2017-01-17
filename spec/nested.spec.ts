/// <reference path="../node_modules/@types/jasmine/index.d.ts" />
/// <reference path="../dist/shaft.js" />

describe("#shaft.model", () => {
    describe("Nested models", () => {
      let MessageContainer, messageContainer;

      beforeEach(() => {
        MessageContainer = shaft.model.get("nested", "MessageContainer");
        messageContainer = new MessageContainer();
      });

      afterEach(() => {
        MessageContainer = null;
        messageContainer = null;
      });

      it("should be attached", () => {
        expect(messageContainer.get("inner")).toBeDefined();
        expect(messageContainer.get("inner").get("innerMessage2")).toBeDefined();
        expect(messageContainer.get("inner").get("innerMessage2").get("name")).toBeDefined();
      });

    });
});

