    import * as verify from './verify/verify.js';
    import * as filter from './filter/filter.js';
    'use strict';

    var ajax = new XMLHttpRequest();
    var urlAPI = 'https://ws.apicep.com/cep/[cepCode].json';
    export var error = '';

    export async function connect(cep){
        if( filter.isOk(cep) ){
            var url = filter.join(cep,urlAPI);
            sendConnection(url);
            await sleep(400);
            if( verify.isOk(ajax) ){
                return dataAddress();
            } else{
                error = verify.error(ajax);
                return 'undefined';
            }
        } else{
            error = filter.error(cep);
        }
    }

    function sendConnection(url){
        ajax.open('GET', url);
        ajax.send();
    }

    function dataAddress(){
        var data = JSON.parse(ajax.responseText);
        return {
            'street': data.address.replace(/ -.+/g,''),
            'city': data.city,
            'state': data.state,
            'district': data.district,
            'cep': data.code
        }
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }