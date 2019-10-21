//import React from 'react'

export default function Postdata(type,userData){
    let Baseurl='http://192.168.1.137:8089/rpo/rest/user/authenticate/';
    //http://192.168.1.137:8087/rpo/rest/user/authenticate/
    return new Promise((resolve,reject)=> {
        fetch(Baseurl+type,{
            method:'POST',
            headers:{
                'Access-Control-Allow-Origin':'*'
                },
            body:JSON.stringify(userData)
        })
        .then((response) => response.json())
        .then((responseJson) => {
            resolve(responseJson);
        })
        .catch((error) => {
          reject(error);
        });
    })
}

