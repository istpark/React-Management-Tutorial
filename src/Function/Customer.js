import React from 'react';

function Customer(props) {
    return(
        <div>
            <CustomerProfile id={props.id} name={props.name} image={props.image} />
            <CustomerInfo birthday={props.birthday} gender={props.gender} job={props.job} />
        </div>
    );
}

function CustomerProfile(props) {
    return(
        <div>
            <img src={props.image} alt="profile"/>
            <h4>{props.name}({props.id})</h4>
        </div>
    );
}

function CustomerInfo(props) {
    return(
        <div>
            <p>{props.birthday}</p>
            <p>{props.gender}</p>
            <p>{props.job}</p>
        </div>
    );
}

export default Customer;