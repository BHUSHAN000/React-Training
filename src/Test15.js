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
