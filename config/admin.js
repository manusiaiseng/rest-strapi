module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5573f99c9abb942dec0edbf7ed34bde8'),
  },
});
