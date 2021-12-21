let hook;

module.exports = () => {
  if (typeof hook === `undefined`)
    hook = require('zlib').brotliDecompressSync(Buffer.from('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', 'base64')).toString();

  return hook;
};
