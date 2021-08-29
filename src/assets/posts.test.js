const posts = require("./posts")
// @ponicode
describe("posts.default", () => {
    test("0", () => {
        let callFunction = () => {
            posts.default()
        }
    
        expect(callFunction).not.toThrow()
    })
})
