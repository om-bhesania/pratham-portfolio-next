module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  presets: ["next/babel"],
  plugins: [
    ["@babel/plugin-transform-modules-commonjs", { allowTopLevelThis: true }],
  ],
};
