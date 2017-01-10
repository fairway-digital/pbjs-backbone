describe("#PBB.getCollection", function() {
  var Clubs, clubs;

  beforeEach(function() {
    Clubs = PBB.collection.get("core", "Club");
    clubs = new Clubs();
  });

  afterEach(function() {
    Clubs = null;
    clubs = null;
  });

  it("must be defined", function() {
    expect(PBB.collection.get).toBeDefined();
  });

  it("must be a collection of the right type", function() {
    expect(Clubs).toBeDefined();
    expect(clubs).toBeDefined();

    clubs.add({
      name: "F5"
    });

    expect(clubs.length).toBe(1);
  });
});

