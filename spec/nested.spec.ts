/// <reference path="../node_modules/@types/jasmine/index.d.ts" />
/// <reference path="../dist/shaft.js" />

describe("#shaft.model", () => {
    describe("Nested models", () => {
      let MessageContainer, messageContainer;
      let MessageContainer2, messageContainer2;

      beforeEach(() => {
        MessageContainer = shaft.model.get("nested", "MessageContainer");
        messageContainer = new MessageContainer();
        MessageContainer2 = shaft.model.get("nested", "MessageContainer2");
        messageContainer2 = new MessageContainer2();
      });

      afterEach(() => {
        MessageContainer = null;
        messageContainer = null;
        MessageContainer2 = null;
        messageContainer2 = null;
      });

      it("should be attached", () => {
        expect(messageContainer.get("inner")).toBeDefined();
        expect(messageContainer.get("inner").get("innerMessage2")).toBeDefined();
        expect(messageContainer.get("inner").get("innerMessage2").get("name")).toBeDefined();
      });

      it("should be attached as imported proto message", () => {
        expect(messageContainer2.get("importedMessage").get("name")).toBe("");
      });

    });
});

