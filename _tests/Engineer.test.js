const Engineer = require("../lib/Engineer");

test("Can set GitHub", () => {
    const testValue = "GitHub";
    const e = new Engineer("foo", 1, "sample@sample.com", testValue);
    expect(e.gitHub).toBe(testValue);
})

test("getRole => \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("foo", 1, "sample@sample.com", "GitHub");
    expect(e.getRole()).toBe(testValue);
})

test("Get GitHub username with getGitHub", () => {
    const testValue = "GitHub";
    const e = new Engineer("foo", 1, "sample@sample.com", testValue);
    expect(e.getGitHub()).toBe(testValue);
})
