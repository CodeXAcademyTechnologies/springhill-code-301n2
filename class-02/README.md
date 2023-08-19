# Class-02 Lecture

## React Lifecycle

### Mounting

A component is being created and inserted into the virtual dom.

componentDidMount

### Updating

Anytime a component is update or state changes then it is rerendered. These are some lifecycle events that occur during updating. 

static getDerivedStateFromProps, ShouldComponentUpdate, render, getSnapshotBeforeUpdate, componentDidUpdate,

### Unmounting

when a component is being removed from the DOM / Virtual DOM

componentWillUnmount

## JSON VS XML

1. What makes JSON a popular choice for data interchange in modern web applications?

It has a native compatibility with JavaScript, its very lightweight, very easy to read. 

2. How does XML handle data types, and how does this differ from JSON?

XML treats all data as strings and relies on a schema to determine structure and data types whereas JSON supports various data types like number string array obj

3. Why might a developer choose XML over JSON when working with complex hierarchical data structures?

XML is better with hierarchal data because of its markup structure and its ability to work with meta data along with the fact that XML supports intricate relationships using nested tags.

4. In what way does the lack of comment support in JSON impact its use, especially in configuration files?

It makes it harder to communicate how the JSON is configured and to disable certain portions of the file

5. What are the advantages and disadvantages of using a schema with XML?

It allows for validation with the use of rules and constraints and to define our data types but it add to the complexity of the configuration file.

6. How does the human-readability of JSON and XML compare, and why might this matter in development or debugging processes?

JSON has more readability even though XML can be more verbose JSON is preferred due to its readability and its concise syntax that resembles JS object literals.

## Props VS State

1. What types of things can you pass in the props?

Strings, Arrays, Objects, Numbers. You can pass in any JavaScript Datatype

2. What is the big difference between props and state?

props are done in the child component state is done in the parent component.

Props are immutable - They cannot be changed by the child component that they are passed into.

State is mutable - They can be changed by the child component that they are passed into.

3. When do we re-render our application?

When our state is changed.

4. What are some examples of things that we could store in state?

username, form data, number of votes.

State can be changed based on user input where props are passed down as a set data and cannot be changed by the child component.

## Ternary

WTF

W: What

T: True

F: False