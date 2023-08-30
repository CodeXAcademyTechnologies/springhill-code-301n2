# Readings: React and Forms

## Reading Questions

[React Docs - Forms](https://reactjs.org/docs/forms.html){:target="_blank"}

  1. What is a 'Controlled Component'?

  any HTML form element such as input text area and select.
  A component that is controlled by react state.
  A controlled component is a component whose behavior and state is controlled by its parent component

  1. Should we wait to store the users responses from the form into state when they submit the form OR should we update the state with their responses as soon as they enter them? Why.

  Store the users responses into state when they submit the form.

  This is up to the users preference in what they need the update to do. Both methods have their own drawbacks as where onSubmit can be delayed in state updating and may need to work more with a react lifecycle hook is can be better to use for more complex forms. Where onChange can be more realtime and not require a callback fn to update state but is not ideal for complex forms.

  1. How do we target what the user is entering if we have an event handler on an input field?

  event.target.inputName.value

[The Conditional (Ternary) Operator Explained](https://codeburst.io/javascript-the-conditional-ternary-operator-explained-cac7218beeff)

  1. Why would we use a ternary operator?

  Used as true or false.
  W.T.F  

  ```js
  condition: true : false
  ```

  1. Rewrite the following statement using a ternary statement:

     ```javascript
     if(x===y){
       console.log(true);
     } else {
       console.log(false);
     }

     x===y ? console.log(true) : x=== z ?  console.log(' x === z'): x === w ? 
     ```

     very easy to use inside of jsx.

     ```js
     let age
     return(
      <label>what is your age</label>
        <input/>
        <div>
        {age >= 18 ? (
          <p>You are old enough to access this site </p>
          
          ) :  (
            <p> You cannot access this site</p> 
            
            )}
        </div>

     )
     ```

## Bookmark and Review

- [React Bootstrap - Forms](https://react-bootstrap.github.io/forms/overview/){:target="_blank"}
- [React Docs - conditional rendering](https://reactjs.org/docs/conditional-rendering.html){:target="_blank"}
