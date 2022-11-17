module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [require.resolve("babel-plugin-module-resolver"), {
        root: ["."],
        extensions: [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
        ],
        alias: {
          "@components": "./src/components",
          "@redux": "./src/redux",
          "@contexts": "./src/contexts",
          "@hooks": "./src/hooks",
          "@layouts": "./src/layouts",
          "@mocks": "./src/mocks",
          "@routes": "./src/routes",
          "@utils": "./src/utils",
          "@screens": "./src/screens",
          "@constants": "./src/constants",
        }
      }],
    ],
  };
};
