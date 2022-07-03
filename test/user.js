const { chai, server, should } = require("./index");
const users = require("../models/users");
describe("User test case", () => {
    /*
     * Test the /POST route
     */
    describe("/Get", () => {
        it("it should do user list", (done) => {
            chai.request(server)
                .get("/api/v1/users")
                .end((err, res) => {
                    res.body.should.have.property("status").eql(true);
                    res.body.should.have.property("message").eql("User List");
                    res.body.should.have.property("data");
                    done();
                });
        });
    });

    describe("/Get", () => {
        it("it should do user one user by Id", (done) => {
            chai.request(server)
                .get("/api/v1/users/id/1")
                .end((err, res) => {
                    res.body.should.have.property("status").eql(true);
                    res.body.should.have.property("message").eql("User");
                    res.body.should.have.property("data");
                    done();
                });
        });
    });

    describe("/Get", () => {
        it("it should do user one user by username", (done) => {
            chai.request(server)
                .get("/api/v1/users/username/hemin")
                .end((err, res) => {
                    res.body.should.have.property("status").eql(true);
                    res.body.should.have.property("message").eql("User");
                    res.body.should.have.property("data");
                    done();
                });
        });
    });

    describe("/Post", () => {
        let reqObject = {
            "username": "hemin",
            "lastname": "patel",
            "useremail": "patelhemin@gmail.com"
        }
        it("it should do user creating with right data", (done) => {
            chai.request(server)
                .post("/api/v1/users")
                .send(reqObject)
                .end((err, res) => {
                    res.body.should.have.property("status").eql(true);
                    res.body.should.have.property("message").eql("User created successfully");
                    done();
                });
        });

        it("it should do user creating with wrong data", (done) => {
            chai.request(server)
                .post("/api/v1/users")
                .send(reqObject)
                .end((err, res) => {
                    res.body.should.have.property("status").eql(false);
                    res.body.should.have.property("message").eql("Email already registered");
                    done();
                });
        });
    });

    describe("/Post", () => {
        let reqObject = {
            "username": "hemin",
            "lastname": "patel",
            "useremail": "patelhemin4477@gmail.com"
        }
        it("it should do user updating with right data", (done) => {
            chai.request(server)
                .post("/api/v1/users/id/1")
                .send(reqObject)
                .end((err, res) => {
                    res.body.should.have.property("status").eql(true);
                    res.body.should.have.property("message").eql("User update successfully");
                    done();
                });
        });
        it("it should do user updating with wrong data", (done) => {
            chai.request(server)
                .post("/api/v1/users/id/2")
                .send(reqObjectWrong)
                .end((err, res) => {
                    res.body.should.have.property("status").eql(false);
                    res.body.should.have.property("message").eql("Email already registered");
                    done();
                });
        });
    });

})