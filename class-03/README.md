# Class 03 Lecture Notes

## Class Outline

- Warm-up exercise
- Review code challenges
- Introduction of the code challenge topic
- Code review of lab assignment
- Code Demo
- Lab Preview

## Notes

1. How can a child component update the state of a parent component?

By using a function passed down to it as a prop.

2. How does a parent component send a function into a child component?

child accesses the prop just as it would a normal prop. 

3. Using React-Bootstrap, how do you determine if a modal is open or closed?

using state. from the parent and updating in the child. 

4. Allowing the child component to update the state in the parent component:


  - Step 1. send a function into the child component that updates the state in the parent component

  ```javaScript
  class Parent extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        name: 'bob'
      }
    }
    updateName = (newName) => this.setState({name: newName })

    render(){
      return(
        <Child updateName={this.updateName}/>
      )
    }
  }
  ```

  - Step 2. invoke that function from the props in the child component

  ```js
  class Child extends React.Component{
      constructor(props){
        super(props)
        this.state = {
          newName: '',
        }
      }
      updateChildName = () => this.props.updateName(this.state.newName);
      render(){
        return(
          <>
            <form onSubmit={this.updateChildName}>
              <label>'What is your new name?'</label>
              <input onChange={(e) => this.setState({newName: e.target.value})}>
            </form>
          </>
        )
      }
  }
  // John Jones
  ```

  - Step 3. The invoked function from the child component will update the name in the parent component and tada! Your child component has essentially changed the state of your parent component.


## Mapping(Array.map()) and how to use it

Array.map(): The map() method of `Array`. instances creates a new array populated with the results of calling a provided function on every element in the calling array.

Unlike the forEach() method map returns a value. The value is a newArray based on the function provided. 

```js
const namesArr = [{name:'John J'}, {name:'Eric'}, {name:'Jon y'}, {name:'Lewis'}, {name:'Elias'}]

  <ul>
  {
    namesArr.map((element, index, array)=> (
        <li key={index}>{element.name}</li>
    ))
  }
  <ul>
<ul>
  <li>John J</li>
  <li>Eric</li>
  <li>Jon Y</li>
  <li>Lewis</li>
  <li>Elias</li>
</ul>
```
