module.exports = {
  lintOnSave: false,
  publicPath: (
    process.env.NODE_ENV === 'development' ?
    '/' : './dist/'
  ),
  indexPath: '../index.html'
};
