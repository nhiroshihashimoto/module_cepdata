    'use strict';
    
    export function isOk( number ){
        var cep = number.toString();
        if( haveNumber(cep) ){
            return true;
        }
        return false;
    }

    export function join( number, url ){
        var cep = number.toString();
        return url.replace( '[cepCode]', filterCEP(cep));
    }

    export function error( number ){
        var cep = number.toString();
        if(cep === ''){
            return 'CEP em branco'
        }
        if(!haveNumber(cep)){
            return 'CEP inválido'
        }
    }
    
    function haveNumber(cep){
        if( cep.match(/\d/g) ){
            return true;
        }
        return false;
    }

    function filterCEP(cep){
        return cep.replace(/\D/g, '');
    }