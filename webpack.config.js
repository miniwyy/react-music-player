/* exports是复数 */
module.exports = {
    /* 1、entry的值可以是字符串或者是数组 */
    /* 2、如果没有 ./ webpack会在node_module目录下进行查找 */
    entry: './app/index.js',
    output: {
        /* 输出文件路径 -- 文件夹 */
        path: './dist',
        /* 输出文件路径 -- 默认名称 */
        filename: 'bundle.js'
    }
}