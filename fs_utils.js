const fs = require('fs')
const path = require('path')

function mkdir (dir) {
  if (fs.existsSync(dir) === false) {
    fs.mkdirSync(dir)
  }
}

const j = path.join
const ls = fs.readdirSync
const mv = fs.copyFileSync
const isDir = p => fs.statSync(p).isDirectory()

module.exports = {
  mkdir,
  j,
  isDir,
  ls,
  mv
}