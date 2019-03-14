// Create a templateTwo var JSX expression
// div
//   h1 -> Your Name
//   p -> Age: Your Age
//   p -> Location: Your Location
// Render templateTwo instead of template

const user = {
    name: 'Steve',
    age: 38,
    location: 'Notts'
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);