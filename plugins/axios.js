export default ({ $axios, params, app }) => {
    $axios.onRequest(config => {

        config.headers['Content-Type'] = 'application/json'; 
        
        config.headers['Access-Control-Allow-Origin'] = "*";
        config.headers['Accept'] = "application/json";
    })
}