protobuf.load("spec/proto/defaults.proto.json", function(err, root) {
  PBB.load(root);

  describe("#PBB", function() {
    describe(".getModel", function() {
      it("must be defined", function() {
        expect(PBB.getModel).toBeDefined();
      });

      describe("must return a Backbone Model", function() {
        var TestMessage, testMessage;

        beforeEach(function() {
          TestMessage = PBB.getModel("defaults", "TestMessage");
          testMessage = new TestMessage();
        });

        it("Class", function() {
          expect(TestMessage).toBeDefined();
        });

        it("instantiable", function() {
          expect(testMessage).toBeDefined();
        });

      describe(".defaults", function() {
          var fields = [
            { fieldName: "testFieldString", type: "string", expected: ""},
            { fieldName: "testFieldBool", type: "bool", expected: false },
            { fieldName: "testFieldDouble", type: "double", expected: 0 },
            { fieldName: "testFieldFloat", type: "float", expected: 0 },
            { fieldName: "testFieldInt32", type: "int32", expected: 0 }
          ];

          for (var i = 0 ; i < fields.length ; i++) {
            var field = fields[i];

            it("'" + field.type + "' fields must be initialized by default to '" + field.expected + "'", function() {
              expect(testMessage.get(field.fieldName)).toBe(field.expected);
            });
          }
        });
      });
    });
  });

});
