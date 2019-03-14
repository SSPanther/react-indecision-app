console.log('App is running!');

class VisibilityToggle extends React.Component {

    constructor(props) {
        super(props);
        this.onToggle = this.onToggle.bind(this);
    
        this.state = {
            title: 'Visibility Toggle 2',
            hidden: true,
            textToShow: 'Here are the hidden details!'
        };
    }

    onToggle() {
        this.setState((prevState) => {
            return {
                hidden: !prevState.hidden
            }
        });
    }

    render() {
        return (
                   <div>
                       <h1>{this.state.title}</h1>
                       <button onClick={this.onToggle}>
                           {this.state.hidden ? 'Show Details' : 'Hide details'}
                       </button>
                       {!this.state.hidden && <p>{this.state.textToShow}</p>}
                   </div>
               );
    }
}

ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'));

// const app = {
//     title: 'Visibility Toggle',
//     hidden: true,
//     textToShow: 'Here are the hidden details!'
// }

// const appRoot = document.getElementById('app');

// const onToggle = () => {
//     app.hidden = !app.hidden;

//     render();
// }

// const render = () => {
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             <button onClick={onToggle}>
//                 {app.hidden ? 'Show Details' : 'Hide details'}
//             </button>
//             {!app.hidden && <p>{app.textToShow}</p>}
//         </div>
//     );

//     ReactDOM.render(template, appRoot);    
// };

// render();