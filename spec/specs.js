describe("findReplace", function() {
  it("will find and replace one matching word", function() {
    expect(findReplace("hello world", "world", "universe")).to.equal("hello universe");
  })
});
