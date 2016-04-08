/**
 * @description [测试统一入口文件]
 * @author [silence]
 * @date  16/4/8
 */

const context = require.context('../src', true, /-test\.js$/);
context.keys().forEach(context);