protobuf.load("proto/defaults.proto.json", function(err, root) {

  describe("PBB", function() {
    it("must be defined", function() {
      expect(PBB).toBeDefined();
    });
  });

  describe("hello", function() {
    it("must be hello", function() {
      expect("hello").toBe("hello");
    });
  });

});
