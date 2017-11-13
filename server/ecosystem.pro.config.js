module.exports = {
  apps: [
    {
      name: 'fly',
      script: './server.js',
      cwd: '/home/makeco/project/fly/server/',
      max_memory_restart: '500M',
      auto_restart: true,
      watch: false,
      env: {
        NODE_ENV: 'production'
      },
      instances: 2,
      exec_mode: 'cluster',
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      error_file: './logs/error/error.log',
      out_file: './logs/info/info.log'
    }
  ]
};
