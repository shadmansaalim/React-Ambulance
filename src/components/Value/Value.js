import React from 'react';
import './Value.css'

const Value = (props) => {
    const { name, description, icon } = props.value;
    return (
        <div className="col">
            <div className="p-5 h-100 value" style={{ backgroundColor: 'rgb(236, 239, 241)' }}>
                <i className={icon} style={{ color: '#42ba96', fontSize: '36px' }}></i>
                <h4 className="mt-2 fw-bold value-title">{name}</h4>
                <hr />
                <p className="mt-3 text-muted">{description}</p>
            </div>
        </div>
    );
};

export default Value;