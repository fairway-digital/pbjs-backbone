/// <reference path="../node_modules/@types/jasmine/index.d.ts" />
/// <reference path="../dist/shaft.js" />

describe("#PBB.collection", () => {
  let Clubs, clubs;

  beforeEach(() => {
    Clubs = PBB.collection.get("collections", "Club");
    clubs = new Clubs();
  });

  afterEach(() => {
    Clubs = null;
    clubs = null;
  });

  it("must be defined", () => {
    expect(PBB.collection).toBeDefined();
  });

  describe(".get", () => {

    it("must be defined", () => {
      expect(PBB.collection.get).toBeDefined();
    });

    it("Should return a typed Collection", () => {
      expect(Clubs).toBeDefined();
      expect(clubs).toBeDefined();

      clubs.add({
        name: "F5"
      });

      expect(clubs.length).toBe(1);
    });
  });
});

