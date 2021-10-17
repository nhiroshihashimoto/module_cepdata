    import * as Connection from './connection/connection.js';
    'use strict';    
    var address = '';

    function getStreet(){
        return (address) ? address.street : undefined;
    }

    function getCity(){
        return (address) ? address.city : undefined;
    }

    function getState(){
        return (address) ? address.state : undefined;
    }

    function getDistrict(){
        return (address) ? address.district : undefined;
    }

    function getCEP(){
        return (address) ? address.cep : undefined;
    }

    function getError(){
        return (Connection.error) ? Connection.error : undefined;
    }

    // ---------------- Examples ----------------
    
    var cep = [
        '76814-026',
        '68744-215',
        '59150-010',
        '56912-155',
        '123456'
    ];

    var $button = document.querySelector('[data-js="button"]');

    $button.addEventListener('click',(e)=>{
        e.preventDefault();
        request();
    });
    
    async function request(){
        for(const res of cep ){
            await sleep(1000);
            address = await Connection.connect(res);
            if (address !== 'undefined') {
                showLog();
            } else {
                console.log('Error:', getError(), res);
            }
        }
    }

    function showLog(){
        console.log('--------------------');
        console.log('CEP '+ getCEP() + ' found');
        //console.log('Object', address);
        console.log('Street:', getStreet());
        console.log('City:', getCity());
        console.log('State:', getState());
        console.log('District:', getDistrict());
    }
        
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }