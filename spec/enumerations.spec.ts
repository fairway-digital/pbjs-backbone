/// <reference path="../node_modules/@types/jasmine/index.d.ts" />
/// <reference path="../index.d.ts" />

describe("#shaft.enumeration", () => {
  it("must be defined", () => {
    expect(shaft.enumeration).toBeDefined();
  });

  describe(".get", () => {
    let ShotsEnum, TestMessage, testMessage;

    beforeEach(() => {
      ShotsEnum = shaft.enumeration.get("enumerations", "Shots");
      TestMessage = shaft.model.get("enumerations", "TestMessage");
      testMessage = new TestMessage();
    });

    afterEach(() => {
      ShotsEnum = null;
      TestMessage = null;
    });

    it("must return plain Object key/Values", () => {
      expect(ShotsEnum).toBeDefined();
      expect(ShotsEnum).toEqual({
        PUT : 1,
        CHIP : 2,
        PITCH : 3,
        DRIVE : 4
      });
    });

    it("can be nested inside Message", () => {
      expect(testMessage.get("animal")).toEqual("CAT");
    });

    it("must be attached statically to the Container Model", () => {
      expect(testMessage.Animal).toEqual({
        CAT: 0,
        DOG: 1,
        COW: 2
      });
    });

  });
});

