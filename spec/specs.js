describe("findReplace", function() {
  it("will find and replace one matching word", function() {
    expect(findReplace("hello world", "world", "universe")).to.equal("hello universe");
  })

  it("will find and replace all matching words", function() {
    expect(findReplace("hello hello", "hello", "goodbye")).to.equal("goodbye goodbye");
  })
});
