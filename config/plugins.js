module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwt: {
        expiresIn: '7d',
      },
    },
  },
  'menus': {
    enabled: true,
      config: {
        maxDepth: 3,
      },
    },
});