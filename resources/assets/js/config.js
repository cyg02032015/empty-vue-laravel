/*
* 我们可以将所有配置信息存放到这个文件，本应用中将使用这个文件来存储基于环境的
* API URL：在生产环境中，将引用生产环境 URL；在开发环境中，将引用开发环境 URL。
* 随着开发进程的推进，后面还会使用该文件存放更多信息
* */

var api_url = '';

switch( process.env.NODE_ENV ){
    case 'development':
        api_url = 'http://young.roast/api/v1';
        break;
    case 'production':
        api_url = 'http://roast.demo.laravelacademy.org/api/v1';
        break;
}

export const ROAST_CONFIG = {
    API_URL: api_url,
}