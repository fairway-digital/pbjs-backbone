/// <reference path="../node_modules/@types/jasmine/index.d.ts" />
/// <reference path="shaft.js" />

describe("#defaults", () => {
  let TestMessage, testMessage;
  let AnotherTestMessage, anotherTestMessage;

  beforeEach(() => {
    TestMessage = shaft.model.get("defaults", "TestMessage");
    AnotherTestMessage = shaft.model.get("defaults", "AnotherTestMessage");
    testMessage = new TestMessage();
    anotherTestMessage = new AnotherTestMessage();
  });

  afterEach(() => {
    TestMessage = null;
    testMessage = null;
    AnotherTestMessage = null;
    anotherTestMessage = null;
  });

  describe("Model default defaults", () => {
    let fields = [
      { fieldName: "testFieldString", type: "string", expected: ""},
      { fieldName: "testFieldBool", type: "bool", expected: false },
      { fieldName: "testFieldDouble", type: "double", expected: 0 },
      { fieldName: "testFieldFloat", type: "float", expected: 0 },
      { fieldName: "testFieldInt32", type: "int32", expected: 0 }
    ];

    for (let i = 0 ; i < fields.length ; i++) {
      let field = fields[i];

      it("'" + field.type + "' fields must be initialized by default to '" + field.expected + "'", () => {
        expect(testMessage.get(field.fieldName)).toBe(field.expected);
      });
    }
  });


  describe("Model custom defaults", () => {
    it("should initialize simple types with value", () => {
      expect(anotherTestMessage.get("resultPerPage")).toBe(10);
    });

    it("should initialize enums types with value", () => {
      expect(anotherTestMessage.get("corpus")).toBe("UNIVERSAL");
    });
  });
});

