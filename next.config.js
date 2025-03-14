module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        has: [{ type: "host", value: "vimalvs.com" }],
        destination: "https://www.vimalvs.com",
        permanent: true,
      },
      {
        source: "/",
        has: [{ type: "host", value: "https://vimalvs.com" }],
        destination: "https://www.vimalvs.com",
        permanent: true,
      },
    ];
  },
};
