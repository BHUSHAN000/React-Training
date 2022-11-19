/**
 * * Program for rending of list on UI
 * * while rending a list on UI need to used map method so that for each element in an array we can create a separate list element i.e <li>{element}</li>
 * * but while rending a list on UI always remember that we have to make each li element unique by assing key attribute to respective li element and always assign a unique value in that key attribute
 * * the passed key attribute to li act as a prop to li element but we can access or can't get that value as a prop in li element i.e key attribute or prop act as readonly in that component
 * * still if we wanted to use the value passed to the key attribute then we need to create a separate prop which can hold that unique value and can be accessed as a prop while rending on UI
 */

import React, { Component } from 'react'


export default class Test15 extends Component {

    state={
        data:[
            {
              "userId": 1,
              "id": 1,
              "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
              "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            },
            {
              "userId": 1,
              "id": 2,
              "title": "qui est esse",
              "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
            },
           
          ]
    }
  render() {

    const res= this.state.data.map((ele,index) => {
        return <li key={ele.id}>{ele.id}-{ele.title}</li>;
    })
    return (
        <>
            <ul>
                {res}
            </ul>
            
        </>
    )
  }
}
