describe("#PBB.enumeration", function() {
  it("must be defined", function() {
    expect(PBB.enumeration).toBeDefined();
  });

  describe(".get", function() {
    var ShotsEnum, TestMessage, testMessage;

    beforeEach(function() {
      ShotsEnum = PBB.enumeration.get("enumerations", "Shots");
      TestMessage = PBB.model.get("enumerations", "TestMessage");
      testMessage = new TestMessage();
    });

    afterEach(function() {
      ShotsEnum = null;
      TestMessage = null;
    });

    it("must return plain Object key/Values", function() {
      expect(ShotsEnum).toBeDefined();
      expect(ShotsEnum).toEqual({
        PUT : 1,
        CHIP : 2,
        PITCH : 3,
        DRIVE : 4
      });
    });

    it("can be nested inside Message", function() {
      expect(testMessage.get("animal")).toEqual("CAT");
    });

    it("must be attached statically to the Container Model", function() {
      expect(testMessage.Animal).toEqual({
        CAT: 0,
        DOG: 1,
        COW: 2
      });
    });

  });
});

