import React from 'react';
import PropTypes from 'prop-types';

function FormField({
    value, onChange, type, name, label,
}) {
    const fieldId = `id_${name}`;
    return (
        <div>
            <label htmlFor={fieldId}>
                {label}
        :
        <input
                    id={fieldId}
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                />
            </label>
        </div>
    );
}
FormField.defaultProps = { type: 'text', value: '', onChange: () => { }, };
FormField.propTypes = {
    value: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func,
};
export default FormField;
