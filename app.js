const Person = props =>{
    return React.createElement('div', {}, [
        React.createElement('h1', {}, props.name),
        React.createElement('p', {}, props.occupation),
    ])
}
const App  = () => {
    // creating component inside react
    return React.createElement('div', {}, [
          React.createElement('h1', {class: "title"}, "React is rendered"),
          React.createElement(Person, { name: 'Rahul', occupation: 'teacher'}, null),
          React.createElement(Person, { name: 'Rohan', occupation: 'shopkeeper'}, null),
    ])
}

//ReactDOM.render is not supported in react-18
// ReactDOM.render(React.createElement(App), document.getElementById('root'));\

//createElement method is use to build component using jsx inside an html file
// { } inside this i am just passing string as an props 'h1' 'p' 'div' are just string representation of html elements 

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
