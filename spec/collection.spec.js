describe("#PBB.collection", function() {
  var Clubs, clubs;

  beforeEach(function() {
    Clubs = PBB.collection.get("collections", "Club");
    clubs = new Clubs();
  });

  afterEach(function() {
    Clubs = null;
    clubs = null;
  });

  it("must be defined", function() {
    expect(PBB.collection).toBeDefined();
  });

  describe(".get", function() {

    it("must be defined", function() {
      expect(PBB.collection.get).toBeDefined();
    });

    it("Should return a typed Collection", function() {
      expect(Clubs).toBeDefined();
      expect(clubs).toBeDefined();

      clubs.add({
        name: "F5"
      });

      expect(clubs.length).toBe(1);
    });
  });
});

