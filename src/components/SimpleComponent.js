// // Code SimpleComponent Here
// SimpleComponent
// The specs for our SimpleComponent are as follows:
//
// In the components/SimpleComponent.js file, create a SimpleComponent component.
//
// The component should be declared as a class (instance of Component) so that it can carry state.
//
// The component should have a state property called mood that has a default value of happy.
//
// The component should simply render its current mood state to the page in a div.
//
// The component should implement a handleClick function that can serve as a callback to the <div>'s click event. When clicked, the component's mood should toggle between happy and sad states.
//
// While part of our design, the fact that this component's mood fluctuates when clicked makes it a less predictable part of our UI. As our program runs and users interact with it, we won't be able to predict what state our component is in. Obviously, many components need state in order to create interactive UIs. However, as we will see in the second component in this lab, it's good to avoid state entirely where possible.
//

import React, {Component} from 'react'

class SimpleComponent extends Component {

  constructor(props) {
    super(props)
      this.state = {
        mood: 'happy'
      }
  }

  handleClick = () => {
    this.state.mood === 'happy'
    ? this.setState({
      mood: 'sad'
    })
    : this.setState({
      mood: 'happy'
    })
  }

  render(){
    return(
      <div onClick={ (event) => this.handleClick()}>
        {this.state.mood}
      </div>
    )
  }

}

export default SimpleComponent;
