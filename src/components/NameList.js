import React from 'react'
//import Person from './Person'
const names =['Bruce','Clark','Alpha','Bruce']
  function NameList() {
//      const persons = [
//          {
//              id:1,
//              name:'Diana',
//              age:'96',
//              skill:'Avenger'
//          },
//          {
//             id:2,
//             name:'Ganga',
//             age:'94',
//             skill:'Marvel'
//         },
//         {
//             id:3,
//             name:'Rapido',
//             age:'100',
//             skill:'Bike ranger'
//         },
//      ]
     //const personList=persons.map(person => <Person key={person.id} person={person}/>)
    const nameList= names.map((name,index) =>  <h2 key={index}>{index}{name}</h2> )
     return <div>{nameList}</div>
  }
export default NameList