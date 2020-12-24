// Higher Order Component (HOC) - A component (HOC) that renders another component
// Reuse code
// Render Hijacking
// Prop manipulation
// Abstract state



import React from 'react';
import ReactDOM from 'react-dom'


const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);


const widthAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info please don't share</p>}
            <WrappedComponent {...props}/>
        </div>
    )   
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props} />
                ) : (
                    <p>You are not Authorized to view  this file</p>
                    )}
        </div>
    )
}


const AdminInfo = widthAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)


//ReactDOM.render(< AdminInfo isAdmin={true} info='These are the details' />, document.getElementById('app'))
ReactDOM.render(< AuthInfo isAuthenticated={false} info='For your eyes only' />, document.getElementById('app'))

