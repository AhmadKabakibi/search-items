require('check-dependencies')().then(function (output) {
  if (!output.depsWereOk) {
    console.error('\u001b[31mMissing Dependencies encountered\u001b[39m:\n')
    console.error(output.error.join('\n') + '\n')

    process.exit(1) // exit with error
  }
})
