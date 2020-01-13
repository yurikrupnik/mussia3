import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import makeStyles from '@material-ui/core/styles/makeStyles';
import withStyles from '@material-ui/core/styles/withStyles';
import MyButton from '@mussia/button';
// import { withTheme, ThemeContext } from 'styled-components';
// import { ThemeContext } from 'styled-components';
import MainButton from './MainButton';
// import Brands from "../Brands";


// const ButtonStyled = styled.button`
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border-radius: 3px;
//
//   /* Color the border and text with theme.main */
//   color: ${props => props.theme.main};
//   border: 2px solid ${props => props.theme.main};
// `;
// const theme = {
//     main: "mediumseagreen"
// };
const useStyles = makeStyles({
    // root: {
    //     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    //     // borderRadius: 3,
    //     border: 0,
    //     color: 'white',
    //     height: 48,
    //     padding: '0 30px',
    //     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    // $disabled is a reference to the local disabled
    // rule within the same style sheet.
    // By using &, we increase the specificity.
    // '&$disabled': {
    //     background: 'rgba(0, 0, 0, 0.12)',
    //     color: 'white',
    //     boxShadow: 'none',
    // },
    // },
    // disabled: {},
});
const styledBy = (property, mapping) => (props) => mapping[props[property]];

// const StyledButton1 = withStyles({
//     root: {
//         background: styledBy('color', {
//             default: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//             blue: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
//         }),
//         borderRadius: 3,
//         border: 0,
//         color: 'white',
//         height: 48,
//         padding: '0 30px',
//         boxShadow: styledBy('color', {
//             default: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//             blue: '0 3px 5px 2px rgba(33, 203, 243, .3)',
//         }),
//     },
// })(({ classes, color, ...other }) => {
//     // console.log('classes', classes)
//     // console.log('color', color)
//     // console.log('other', other)
//     return <Button className={classes.root} {...other} />;
// });

const StyledButton = withStyles({
    root: {
        background: styledBy('color', {
            default: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            blue: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        }),
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 3x',
        // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);

// const But = styled.div`
//     color: ${props => {
//     console.log('props', props)
//         return 'red'
// }}
// `

const data = [
    {
        image: 'https://cdn.streamelements.com/uploads/5dc0606f-d6b6-450d-9e03-682132b2637b.png',
        label: 'SPITFIRE ANIMATED SUPER THEME',
        writer: 'apex legends'
    },
    {
        image: 'https://cdn.streamelements.com/uploads/5dc0606f-d6b6-450d-9e03-682132b2637b.png',
        label: 'SPITFIRE ANIMATED SUPER THEME',
        writer: 'apex legends'
    },
    {
        image: 'https://cdn.streamelements.com/uploads/5dc0606f-d6b6-450d-9e03-682132b2637b.png',
        label: 'SPITFIRE ANIMATED SUPER THEME',
        writer: 'apex legends'
    },
    {
        image: 'https://cdn.streamelements.com/uploads/5dc0606f-d6b6-450d-9e03-682132b2637b.png',
        label: 'SPITFIRE ANIMATED SUPER THEME',
        writer: 'apex legends'
    },
    {
        image: 'https://cdn.streamelements.com/uploads/5dc0606f-d6b6-450d-9e03-682132b2637b.png',
        label: 'SPITFIRE ANIMATED SUPER THEME',
        writer: 'apex legends'
    },
    {
        image: 'https://cdn.streamelements.com/uploads/5dc0606f-d6b6-450d-9e03-682132b2637b.png',
        label: 'SPITFIRE ANIMATED SUPER THEME',
        writer: 'apex legends'
    },
    {
        image: 'https://cdn.streamelements.com/uploads/5dc0606f-d6b6-450d-9e03-682132b2637b.png',
        label: 'SPITFIRE ANIMATED SUPER THEME',
        writer: 'apex legends'
    },
    {
        image: 'https://cdn.streamelements.com/uploads/5dc0606f-d6b6-450d-9e03-682132b2637b.png',
        label: 'SPITFIRE ANIMATED SUPER THEME',
        writer: 'apex legends'
    },
    {
        image: 'https://cdn.streamelements.com/uploads/5dc0606f-d6b6-450d-9e03-682132b2637b.png',
        label: 'SPITFIRE ANIMATED SUPER THEME',
        writer: 'apex legends'
    },
    {
        image: 'https://cdn.streamelements.com/uploads/5dc0606f-d6b6-450d-9e03-682132b2637b.png',
        label: 'SPITFIRE ANIMATED SUPER THEME',
        writer: 'apex legends'
    },
    {
        image: 'https://cdn.streamelements.com/uploads/5dc0606f-d6b6-450d-9e03-682132b2637b.png',
        label: 'SPITFIRE ANIMATED SUPER THEME',
        writer: 'apex legends'
    },
    {
        image: 'https://cdn.streamelements.com/uploads/5dc0606f-d6b6-450d-9e03-682132b2637b.png',
        label: 'SPITFIRE ANIMATED SUPER THEME',
        writer: 'apex legends'
    },
    {
        image: 'https://cdn.streamelements.com/uploads/5dc0606f-d6b6-450d-9e03-682132b2637b.png',
        label: 'SPITFIRE ANIMATED SUPER THEME',
        writer: 'apex legends'
    },
    {
        image: 'https://cdn.streamelements.com/uploads/5dc0606f-d6b6-450d-9e03-682132b2637b.png',
        label: 'SPITFIRE ANIMATED SUPER THEME',
        writer: 'apex legends'
    },
    {
        image: 'https://cdn.streamelements.com/uploads/5dc0606f-d6b6-450d-9e03-682132b2637b.png',
        label: 'SPITFIRE ANIMATED SUPER THEME',
        writer: 'apex legends'
    }
];

const Root = (props) => {
    console.log(props); // eslint-disable-line
    const classes = useStyles();
    // const ss = useContext(ThemeContext);
    // console.log('ss', ss); // eslint-disable-line

    const [color, setColor] = React.useState('default');

    const handleChange = (event) => {
        setColor(event.target.checked ? 'blue' : 'default');
    };

    return (
        <div>
            <Button theme={{ main: 'royalblue' }} onClick={() => {}}>Ad hoc theme</Button>
            <div>
                <Button onClick={() => {}}>Themed</Button>
                <Button theme={{ main: 'darkorange' }}>Overidden</Button>
            </div>
            <Grid container spacing={10}>
                <Hidden xsUp>
                    <Grid item xs>
                        <Paper className={classes.paper}>xsUp</Paper>
                    </Grid>
                </Hidden>
                <Hidden smUp>
                    <Grid item xs>
                        <Paper className={classes.paper}>smUp</Paper>
                    </Grid>
                </Hidden>
                <Hidden mdUp>
                    <Grid item xs>
                        <Paper className={classes.paper}>mdUp</Paper>
                    </Grid>
                </Hidden>
                <Hidden lgUp>
                    <Grid item xs>
                        <Paper className={classes.paper}>lgUp</Paper>
                    </Grid>
                </Hidden>
                <Hidden xlUp>
                    <Grid item xs>
                        <Paper className={classes.paper}>xlUp</Paper>
                    </Grid>
                </Hidden>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12} md={2}>
                    <Grid container spacing={0} direction="column" alignItems="center">
                        <Grid item>
                            <ButtonGroup size="small" aria-label="small outlined button group">
                                <Button onClick={() => {}} color="inherit">One</Button>
                                <Button onClick={() => {}}>Two</Button>
                                <Button onClick={() => {}}>Three</Button>
                            </ButtonGroup>
                        </Grid>
                        <Grid item>
                            <ButtonGroup color="primary" aria-label="outlined primary button group">
                                <Button onClick={() => {}}>One</Button>
                                <Button onClick={() => {}}>Two</Button>
                                <Button onClick={() => {}}>Three</Button>
                            </ButtonGroup>
                        </Grid>
                        <Grid item>
                            <ButtonGroup
                                color="secondary"
                                size="large"
                                aria-label="large outlined secondary button group"
                            >
                                <Button onClick={() => {}}>One</Button>
                                <Button onClick={() => {}}>Two</Button>
                                <Button onClick={() => {}}>Three</Button>
                            </ButtonGroup>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Paper>
                {
                    data.map((item, i) => (
                        <Grid key={i} container spacing={2}> {/* eslint-disable-line */}
                            <Grid item xs={12} md={3}>
                                <Grid container spacing={0} direction="column" alignItems="center">
                                    <img
                                        src={item.image}
                                        alt=""
                                    />
                                    <h2>
                                        {item.label}
                                    </h2>
                                    <h4>
                                        {item.writer}
                                    </h4>
                                    <div>
                                        <Button
                                            onClick={() => {}}
                                        >
                                            preview
                                        </Button>
                                        <Button
                                            onClick={() => {}}
                                        >
                                            create
                                        </Button>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    ))
                }
            </Paper>

            <MainButton
                color="primary"
                onClick={() => {}}
                style={{

                    // background: 'red'
                }}
            >
                MainButton
            </MainButton>
            <MyButton onClick={() => {}}>
                MyButton
            </MyButton>
            <Button
                classes={{
                    root: classes.root,
                    disabled: classes.disabled,
                }}
                // color="primary"
            >
                Button
            </Button>
            <StyledButton onClick={() => {}}>
                StyledButton
            </StyledButton>
            <h2>Root</h2>
            <FormControlLabel
                control={
                    (
                        <Switch
                            checked={color === 'blue'}
                            onChange={handleChange}
                            color="primary"
                            value="dynamic-class-name"
                        />
                    )
                }
                label="Blue"
            />
        </div>
    );
};

export default Root;
