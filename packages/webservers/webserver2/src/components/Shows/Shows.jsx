import React from 'react';

// import PillButton from '@krupnik/pill-button'; // good
import List from '@mussia/list'; // eslint-disable-line
import Button from '@mussia/button'; // eslint-disable-line
import MButton from '@material-ui/core/Button';
// import s from '@krupnik/button/dist/esm/index.css'; // eslint-disable-line
// import { PillButton } from 'custom-react';
// import PillButton from 'custom-react/dist/PillButton';

// import { PillButton } from '@krupnik/components';
// import PillButton from '@krupnik/components/dist/PillButton';


// import request from '../../api/request';
import axios from 'axios';
// import { PillButton as Pill, ButtonList } from 'custom-react'; // needs d3
import { host, port } from '../../config';
import styles from './styles.scss';

const api = {
    getData(params, cb) {
        return axios.get(`${host}:${port}/api/users`, { params })
            .then((res) => {
                // console.log('res', res);
                cb(res.data);
            })
            .catch((err) => {
                console.log('err', err); // eslint-disable-line
            });
    },
    getDataNoHost(params, cb) {
        return axios.get('/api/users', { params })
            .then((res) => {
                // console.log('res', res);
                cb(res.data);
            })
            .catch((err) => {
                console.log('err', err); // eslint-disable-line
            });
    },
    getDataDestHost(params, cd) {
        return axios.get(`${host}:${port}/api/users`, { params })
            .then((res) => {
                // console.log('res', res);
                cd(res.data);
            })
            .catch((err) => {
                console.log('err', err); // eslint-disable-line
            });
    }
};

class Shows extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };

        this.getData = this.getData.bind(this);
        this.setData = this.setData.bind(this);
        this.getDataNoHost = this.getDataNoHost.bind(this);
        this.getDataDestHost = this.getDataDestHost.bind(this);
    }

    setData(data) {
        this.setState({ data });
    }

    getData() {
        return api.getData({}, this.setData);
    }

    getDataNoHost() {
        return api.getDataNoHost({}, this.setData);
    }

    getDataDestHost() {
        return api.getDataDestHost({}, this.setData);
    }

    static getShit() {
        return (
            <div>
                sas
            </div>
        );
    }

    render() {
        const { data } = this.state;
        return (
            <div>
                <h2 className={styles.root}>
                    app22sss
                </h2>
                <Button type="button" onClick={this.getData}>my button</Button>
                <Button type="button" onClick={this.getDataNoHost}>{Shows.getShit()}</Button>
                <Button type="button" onClick={this.getDataNoHost}>getData getDataNoHost</Button>
                <Button type="button" onClick={this.getDataDestHost}>getData getDataDestHost</Button>
                <MButton href="" type="button" onClick={this.getDataDestHost}>MButton</MButton>
                <div>
                    <h2>new List should be here</h2>
                </div>
                <h2>old list</h2>
                <List data={data} />
            </div>
        );
    }
}

export default Shows;
