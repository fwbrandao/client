import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from '../../actions';

class Signup extends Component {

    onSubmit = (formProps) => {
        this.props.signup(formProps, () => {
            this.props.history.push('/features');
        });
    };

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <fieldset>
                    <label>
                        Email
                    </label>
                    <Field name="email" type="text" component="input" autoComplete="none"/>
                </fieldset>
                <fieldset>
                    <label>
                        Password
                    </label>
                    <Field name="password" type="password" component="input" autoComplete="none"/>
                </fieldset>
                <div>
                    <p>{this.props.errorMessage}</p>
                </div>
                <button>Signup</button>
            </form>
         );
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.errorMessage };
}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({ form: 'signup' })
)(Signup);
