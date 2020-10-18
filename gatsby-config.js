module.exports = {
  // ...
  plugins: [
    // ...
    {
      resolve: "gatsby-plugin-tinacms",
      options: {
        plugins: ["gatsby-tinacms-git", "gatsby-tinacms-json"],
      },
    },
  ],
};
