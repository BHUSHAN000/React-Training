/**
 * * HOC => Higher Order Component
 * * Definition => whenever we wanted to reuse the code then we can write in HOC. It always take a component as a parameter in it and returns a enhanced component from it
 * 
 * * while using HOC we need to pass the component to HOC at the time of exporting component e.g HOC(Counter) i.e we are passing Counter component to HOC 
 */

import React from "react";

const HOC = (OldComponent) => {
    class NewComponent extends React.Component {
        state={
            count: 0
        }

        clickHandler =() => {
            this.setState({count : this.state.count +1})
        }

        render() {
            return(
                <OldComponent count= {this.state.count} 
                    clickHandler={this.clickHandler}
                />
            )
            
        }
    }
    return NewComponent;
}

export default HOC;