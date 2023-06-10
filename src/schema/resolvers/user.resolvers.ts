module.exports = {
    Query: {
      user: (parent, args) => {
        console.log("Getting User", args);
      }
    },
    Mutation: {
      createUser: (parent, args) => {
        console.log("Creating User", args);
      }
    },
  }