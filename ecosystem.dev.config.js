module.exports = {
  apps : [{
    name   : "fly",
    script : "./server/server.js",
    cwd: "E:\\project\\fly",
    max_memory_restart: "500M",
    auto_restart: true,
    watch  : ["./server"],
    ignore_watch: ["./server/.vscode", "./server/test/*.js"],
    env: {
      "NODE_ENV": "development"
    },
    exec_mode: "fork"
  }]
}
