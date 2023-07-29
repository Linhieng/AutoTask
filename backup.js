const { mkdir, j, isDir, ls, mv } = require('./fs_utils.js')

const src_dir = __dirname
const dest_dir = 'E:/OneNoteBackup'
const back_reg = /\.one$|\.onetoc2/

function backup_today (dest_dir) {
  const d = new Date()
  const today = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
  dest_dir = j(dest_dir, today)
  mkdir(dest_dir)

  let queue = []
  for (const file of ls(src_dir)) {
    if (isDir(j(src_dir, file))) {
      queue.push(file)
    }
  }

  while (queue.length != 0) {
    let cur = queue.shift()
    mkdir(j(dest_dir, cur))
    let files = ls(j(src_dir, cur))
    for (const file of files) {
      if (back_reg.test(file)) {
        mv(j(src_dir, cur, file), j(dest_dir, cur, file))
      }
    }
  }
}

function backup (dest_dir) {
  backup_today(dest_dir)
}

setTimeout(() => {
  backup()
}, 1000 * 60 * 60 * 24)

backup(dest_dir)