describe("#PBB.getCollection", function() {
  var Clubs, clubs;

  beforeEach(function() {
    Clubs = PBB.getCollection("core", "Club");
    clubs = new Clubs();
  });

  afterEach(function() {
    Clubs = null;
    clubs = null;
  });

  it("must be defined", function() {
    expect(PBB.getCollection).toBeDefined();
  });

  it("must be a collection of the right type", function() {
    expect(Clubs).toBeDefined();
    expect(clubs).toBeDefined();

    clubs.add({
      name: "F5"
    });

    expect(clubs.length).toBe(1);
    expect(clubs.first().fullName).toEqual("core.Type .core.Club");
  });
});

