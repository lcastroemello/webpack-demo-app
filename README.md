The steps to configure webpack are the following:
1) install webpack and webpack-cli using npm i --save-dev
2) add the necessary index.js file in the folder src (it is the file webpack looks for when running your file)
3) add ./dist/main.js to your scripts in html (this is the file, generated by webpack, that is actually read)
Until here, it was just bundling, but, you can use imports and exports from ES6, this way each file knows who depends on whom (commit )
4)   