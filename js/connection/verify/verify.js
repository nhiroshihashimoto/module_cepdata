    'use strict';

    export function isOk(ajax){
        if( request(ajax) ){
            if( found(ajax) ){
                return true;
            }
        }
        return false;
    }

    export function error(ajax){
        if( !request(ajax) ){
            return 'Connection error'
        }
        //console.log(JSON.parse(ajax.responseText).status);
        if( badRequest(ajax) ){
            return JSON.parse(ajax.responseText).message;
        }
        return 'CEP not found';
    }

    function request(ajax){
        return ajax.readyState === 4 &&  ajax.status === 200;
    }

    function badRequest(ajax){
        return JSON.parse(ajax.responseText).status === 400;
    }

    function found(ajax){
        return JSON.parse(ajax.responseText).ok === true;
    }
    