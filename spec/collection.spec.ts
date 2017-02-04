/// <reference path="../node_modules/@types/jasmine/index.d.ts" />
/// <reference path="shaft.js" />

describe("#shaft.collection", () => {
  let Clubs, clubs;

  beforeEach(() => {
    Clubs = shaft.collection.get("collections", "Club");
    clubs = new Clubs();
  });

  afterEach(() => {
    Clubs = null;
    clubs = null;
  });

  it("must be defined", () => {
    expect(shaft.collection).toBeDefined();
  });

  describe(".get", () => {

    it("must be defined", () => {
      expect(shaft.collection.get).toBeDefined();
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

