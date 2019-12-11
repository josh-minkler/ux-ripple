module.exports = {
  publicPath: (
    process.env.NODE_ENV === 'development' ?
    '/' : './dist/'
  ),
  indexPath: '../index.html'
};
