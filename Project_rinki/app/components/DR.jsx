import React, {Component} from 'react';
import axios from 'axios';
import _ from 'lodash';
import { NavLink } from 'react-router-dom';

import Breadcrumb from './Breadcrumb.jsx';

export default class DR extends Component {
    constructor() {
        super();

        this.state = {
            array: ['DR 1', 'DR 2', 'DR 3'],
            data: {
                "ldnpsr00135":[
                {
                "size" : "16G",
                "used" : "6.0G",
                "available" : "8.9G",
                "usePercentage" : "40%",
                "mountedOn" : "/"
                },
                
                {
                "size" : "163G",
                "used" : "62.0G",
                "available" : "81.9G",
                "usePercentage" : "90%",
                "mountedOn" : "/"
                },
                {
                "size" : "16.90G",
                "used" : "61.0G",
                "available" : "8.19G",
                "usePercentage" : "80%",
                "mountedOn" : "/var"
                },
                {
                "size" : "116G",
                "used" : "61.0G",
                "available" : "81.9G",
                "usePercentage" : "40%",
                "mountedOn" : "/apps"
                },
                {
                "size" : "16G",
                "used" : "6.0G",
                "available" : "8.9G",
                "usePercentage" : "40%",
                "mountedOn" : "/kdump"
                },
                {
                "size" : "11G",
                "used" : "6.01G",
                "available" : "8.91G",
                "usePercentage" : "50%",
                "mountedOn" : "/home/sysaimd/NAS_Genesis"
                }
                ],
                "ldnpsr004893":[
                {
                "size" : "11G",
                "used" : "6.0G",
                "available" : "8.9G",
                "usePercentage" : "40%",
                "mountedOn" : "/boot"
                },
                
                {
                "size" : "161G",
                "used" : "6.10G",
                "available" : "8.9G",
                "usePercentage" : "40%",
                "mountedOn" : "/apps"
                },
                {
                "size" : "146G",
                "used" : "6.0G",
                "available" : "8.9G",
                "usePercentage" : "29%",
                "mountedOn" : "/dev/shm"
                },
                {
                "size" : "2.0T",
                "used" : "6.0G",
                "available" : "8.9G",
                "usePercentage" : "77%",
                "mountedOn" : "/"
                },
                {
                "size" : "16G",
                "used" : "6.0G",
                "available" : "8.9G",
                "usePercentage" : "40%",
                "mountedOn" : "/"
                },
                {
                "size" : "16G",
                "used" : "6.0G",
                "available" : "8.9G",
                "usePercentage" : "40%",
                "mountedOn" : "/"
                }
                ],
                "DR3":[ ]
                },
        };
    }

    // componentDidMount() {
    //     // get the categories from mongo
    //     axios.get('/api/articles')
    //         .then(response => {
    //             this.setState(
    //                 { array: response.data }
    //             );
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // }

    renderArticles() {
        return _.map(this.state.array, (item, i) => {
            return (
                <div key={i} className="col-sm-6 mb-3">
                    <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">{item}</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus felis vestibulum neque ultrices, in dignissim dui egestas. Mauris sed aliquam sapien, sit amet ultrices erat.</p>
                        <NavLink exact to={`/articles/${i}/`}><li className="btn btn-primary">View more in {item}</li></NavLink>
                    </div>
                    </div>
                </div>
                
            );
        });
    }

    renderBreadcrumbs() {
        return (
            <Breadcrumb currentPage="Articles" />
        );
    }

    render() {
        return (
            <div className="article-listing">
                {this.renderBreadcrumbs()}
                <nav class="navbar navbar-expand-lg navbar-dark">
            <button class="navbar-toggler" type="button" data-target="#navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav">
                <li class="nav-item active">
                        <a href="articles" class="nav-link">PROD</a>
                    </li>
                    <li class="nav-item">
                        <a href="dr" class="nav-link">DR</a>
                    </li>
                   
                </ul>
            </div>
        </nav>
                <div className="row">
                    {this.renderArticles()}
                </div>
            </div>
        );
    }
}
