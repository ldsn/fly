module.exports = {
  apps: [
    {
      name: 'fly',
      script: './server.js',
      cwd: '/home/makeco/project/fly/server/',
      max_memory_restart: '500M',
      auto_restart: true,
      watch: true,
      ignore_watch: [
        './.vscode',
        './test/*.js',
        'node_modules',
        'momgodb',
        'logs',
        '.editorconfig',
        '.eslintrc.json',
        'package.json',
        'package-lock.json',
        'README.md'
      ],
      env: {
        NODE_ENV: 'development'
      },
      exec_mode: 'fork'
    }
  ]
};
