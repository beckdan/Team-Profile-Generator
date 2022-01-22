const Engineer = require("../lib/Engineer");

test("Can set GitHub", () => {
    const testValue = "GitHub";
    const e = new Engineer("foo", 1, "test@test.com", testValue);
    expect(e.github).toBe(testValue);
})

test("getRole => \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("foo", 1, "test@test.com", "GitHub");
    expect(e.getRole()).toBe(testValue);
})

test("Get GitHub username with getGitHub", () => {
    const testValue = "GitHub";
    const e = new Engineer("foo", 1, "test@test.com", testValue);
    expect(e.getGithub()).toBe(testValue);
})
