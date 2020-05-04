import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const style = {
    marginTop: '15px',
    marginBottom: '15px',
    marginLeft: '0',
    marginRight: '0'
};

export default () => {
    const [form, setState] = React.useState([
        {
            name: 'email',
            placeholder: 'enter email',
            label: 'Email Field',
            type: 'text',
            value: ''
        },
        {
            name: 'password',
            placeholder: 'enter password',
            label: 'Password Field',
            type: 'password',
            value: ''
        }
    ]);

    const handleChange = React.useCallback((e) => {
        const selected = form[e.target.dataset.index];
        selected.value = e.target.value;
        setState(form);
    }, [form]);

    return (
        <div className="row center-xs">
            <div className="col-xs-6">
                <form style={style} method="POST" action="api/auth/login">
                    <div className="title">Login</div>
                    {
                        form.map((field, index) => (
                            <TextField
                                inputProps={{
                                    'data-index': index
                                }}
                                onChange={handleChange}
                                key={field.name}
                                fullWidth
                                label={field.label}
                                placeholder={field.placeholder}
                                name={field.name}
                                type={field.type}
                            />
                        ))
                    }
                    <Divider style={style} />

                    <Button fullWidth label="Join now" type="submit">
                        Register
                    </Button>

                </form>
            </div>
        </div>
    );
};
