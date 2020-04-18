module.exports = {
  apps : [{
    name   : "hello-world",
    script : "./index.js",
    watch       : true,
    exec_mode   : "cluster",
    env: {
      "PORT": 3000,
      "NODE_ENV": "development"
    }
  }]
}
