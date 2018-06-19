const fs = require('fs')
const util = require('util')
const writeFileAsync = util.promisify(fs.writeFile)

const Bundler = require('parcel-bundler')
const es3ify = require('es3ify')
const JSPackager = parseInt(process.versions.node, 10) < 8
      ? require('parcel-bundler/lib/packagers/JSPackager')
      : require('parcel-bundler/src/packagers/JSPackager')

class ES3ifyingJSPackager extends JSPackager {
  async setup () {
    const result = await super.setup()

    // Throw away `this.dest` (a writestream) from superclass and
    // replace it with a mock stream that buffers input and transforms
    // it to ES3 just before writing it to disk.

    this.dest = {
      _buffer: [],
      path: this.dest.path,
      async write (data) {
        this._buffer += data
      },
      async end () {
        const transformed = es3ify.transform(this._buffer)
        return writeFileAsync(this.path, transformed)
      }
    }

    return result
  }
}

const bundler = new Bundler('./src/index.html', {
  outDir: './dist',
  outFile: 'index.html'
})
bundler.addPackager('js', ES3ifyingJSPackager)

bundler.serve()