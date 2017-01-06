protobuf.load("spec/proto/enumerations.proto.json", function(err, root) {
  PBB.load(root);

  describe("#PBB", function() {
    it("must be defined", function() {
      expect(PBB.getEnum).toBeDefined();
    });

    describe(".getEnum", function() {
      var ShotsEnum, TestMessage;

      beforeEach(function() {
        ShotsEnum = PBB.getEnum("enumerations", "Shots");
        TestMessage = PBB.getModel("enumerations", "TestMessage");
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
        var testMessage = new TestMessage();

        expect(testMessage.get("animal")).toEqual(1);
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

});
