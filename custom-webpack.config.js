const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    output: {
    publicPath: "http://localhost:4200/",
    uniqueName: "shell"
    },
    optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
    },
    plugins: [
    new ModuleFederationPlugin({
        remotes: {
            //'mfe1': "mfe1@http://localhost:4201/remoteEntry.js", 
            },
            shared: {
                '@angular/core': { singleton: true, strictVersion: true, requiredVersion: '^13.2.4', eager: true },
                '@angular/common': { singleton: true, strictVersion: true, requiredVersion: '^13.2.4', eager: true },
                '@angular/common/http': { singleton: true, strictVersion: true, requiredVersion: '^13.2.4', eager: true },
                '@angular/router': { singleton: true, strictVersion: true, requiredVersion: '^13.2.4', eager: true },
            
            }
        })
    ],
};