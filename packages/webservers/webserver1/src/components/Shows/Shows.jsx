/* eslint-disable */

import React from 'react';

// import PillButton from '@krupnik/pill-button'; // good
import List from '@mussia/list'; // eslint-disable-line
import Button from '@mussia/button'; // eslint-disable-line
// import MButton from '@material-ui/core/Button';
// import s from '@krupnik/button/dist/esm/index.css'; // eslint-disable-line
// import { PillButton } from 'custom-react';
// import PillButton from 'custom-react/dist/PillButton';

// import { PillButton } from '@krupnik/components';
// import PillButton from '@krupnik/components/dist/PillButton';


import axios from 'axios';
// import Tooltip from '../Tooltip';
// import { PillButton as Pill, ButtonList } from 'custom-react'; // needs d3
import { host, port } from '../../config';
import socket from '../../services/socket/client';
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
        return axios
            .get(`${host}:${port}/api/users`, { params })
            .then((res) => {
                // console.log('res', res);
                cd(res.data);
            })
            .catch((err) => {
                console.log('err', err); // eslint-disable-line
            });
    }
};

const projectsApi = {
    get(params, cb) {
        return axios.get(`${host}:${port}/api/projects`, { params })
            .then(res => cb(res.data))
            .catch((err) => {
                console.log('err', err); // eslint-disable-line
                return err;
            });
    },
    post(body, cb = v => v) {
        return axios.post(`${host}:${port}/api/projects`, body)
            .then(res => cb(res.data))
            .catch((err) => {
                console.log('err', err); // eslint-disable-line
                return err;
            });
    },
    delete(id, cb = v => v) {
        return axios.delete(`${host}:${port}/api/projects/${id}`)
            .then(res => cb(res.data))
            .catch((err) => {
                console.log('err', err); // eslint-disable-line
                return err;
            });
    },
    put(body, cb = v => v) {
        return axios.put(`${host}:${port}/api/projects`, body)
            .then(res => cb(res.data))
            .catch((err) => {
                console.log('err', err); // eslint-disable-line
                return err;
            });
    }
};

/**
 * Shows class Component
 */

class Shows extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            projects: [],
            form: [
                {
                    name: 'name',
                    value: '',
                    placeholder: 'name'
                },
                {
                    name: 'description',
                    value: '',
                    placeholder: 'description'
                }
            ],
            socket: {}
        };

        this.getData = this.getData.bind(this);
        this.setData = this.setData.bind(this);
        this.getDataNoHost = this.getDataNoHost.bind(this);
        this.getDataDestHost = this.getDataDestHost.bind(this);
        this.setProjects = this.setProjects.bind(this);
        this.getProjects = this.getProjects.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.postProject = this.postProject.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.updateProject = this.updateProject.bind(this);

    }

    setProjects(projects) {
        this.setState({ projects });
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

    getProjects() {
        return projectsApi.get({}, this.setProjects);
    }

    postProject() {
        const { form } = this.state;
        const data = form.reduce((acc, next) => {
            if (!next.value) {
                return acc;
            }
            acc[next.name] = next.value;
            return acc;
        }, {});
        return projectsApi.post(data);
    }

    handleDelete(id) { // eslint-disable-line
        return projectsApi.delete(id);
    }

    handleChange(event) {
        const { target } = event;
        const { value, dataset } = target;
        const { index } = dataset;

        this.setState((prevState) => {
            prevState.form[index].value = value;  // eslint-disable-line
            return prevState;
        });
    }

    updateProject(data) {
        const { location, history } = this.props;  // eslint-disable-line
        const { pathname } = location;  // eslint-disable-line
        history.push(`${pathname}/${data._id}`);  // eslint-disable-line
    }

    handleEmit(e) {
        // console.log('e', e);

        socket.newEntry('yuri', (err) => {
            if (!err) {
                console.log('err', err);
                // setSession(newSession);
            } else {
                console.log('err', err);
            }
        });
    }

    render() {
        const { data, projects, form } = this.state;
        // const { data,  } = this.props;
        // console.log('this.props', this.props);


        return (
            <div>
                <h2 className={styles.root}>
                    app12
                </h2>
                <Button
                    color="primary"
                    type="button"
                    onClick={this.getDataDestHost}
                >
                    <div>getData</div>
                </Button>
                <Button
                    type="button"
                    onClick={this.getProjects}
                >
                    getProjects
                </Button>
                <Button
                    color="secondary"
                    type="button"
                    onClick={this.postProject}
                >
                    postProject
                </Button>
                <Button
                    type="button"
                    onClick={this.handleEmit}
                    color="primary"
                >
                    handleEmit
                </Button>
                {/*<MButton*/}
                {/*    type="button"*/}
                {/*    onClick={this.getDataDestHost}*/}
                {/*    onClick={this.handleEmit}*/}
                {/*    color="primary"*/}
                {/*>*/}
                {/*    handleEmit*/}
                {/*</MButton>*/}
                {/*<MButton*/}
                {/*    onClick={this.getDataDestHost}*/}
                {/*    variant="contained"*/}
                {/*    color="primary">*/}
                {/*    Hello World*/}
                {/*</MButton>*/}
                {/*<Tooltip title="My title">*/}
                {/*    <span>*/}
                {/*        hellPo from tooltip*/}
                {/*    </span>*/}
                {/*</Tooltip>*/}
                <h2>Users</h2>
                <List data={data}/>
                <h2>Projects</h2>
                <div>
                    <h3>
                        Create project
                    </h3>
                    <div>
                        {form.map((v, i) => (
                            <input
                                key={v.name}
                                data-index={i}
                                type="text"
                                onChange={this.handleChange}
                                value={v.value}
                                placeholder={v.placeholder}
                                name={v.name}
                            />
                        ))}
                    </div>
                </div>

                {
                    Array.isArray(projects) && projects.map(v => {
                        return (
                            <div
                                style={{
                                    display: 'flex',
                                    padding: '10px'
                                }}
                                key={v._id}
                            >
                                <div
                                    style={{ marginRight: '7px' }}
                                    onClick={this.updateProject.bind(this, v)}
                                >
                                    {v.name}
                                    <span onClick={this.handleDelete.bind(this, v._id)}>
                                        x
                                    </span>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default Shows;
