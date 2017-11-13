module.exports = {
  apps : [{
    name   : "fly",
    script : "./server/server.js",
    cwd: "E:\\project\\fly",
    max_memory_restart: "500M",
    auto_restart: true,
    watch  : false,
    env: {
      "NODE_ENV": "production"
    },
    instances: 2,
    exec_mode: "cluster",
    log_date_format: "YYYY-MM-DD HH:mm Z",
    error_file: "./log/error/error.log",
    out_file: "./log/info/info.log"
  }]
}
