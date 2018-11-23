import React, {Component} from 'react';
import axios from 'axios';
import _ from 'lodash';
import { NavLink } from 'react-router-dom';

import Breadcrumb from './Breadcrumb.jsx';

export default class Categories extends Component {
    constructor() {
        super();

        this.state = {
            array: [],
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
                }
        };
        
        this.getdata = this.getdata.bind(this);
    }

    componentDidMount() {
        // get the categories from mongo
        axios.get('/api/articles')
            .then(response => {
                this.setState(
                    { array: response.data }
                );
            })
            .catch(error => {
                console.log(error);
            });
    }
   getdata(data){
    return _.map(data, (item, i) => {
        return (
        <tr className={parseFloat(item.usePercentage) > 75 ? 'danger' : ''} >
        <th scope="row" >{i+1}</th>
        <td>{item.size}</td>
        <td>{item.used}</td>
        <td>{item.available}</td>
        <td>{item.usePercentage}</td>
        <td>{item.mountedOn}</td>
        </tr>
    );
  });
   }
    renderArticles() {
        return _.map(this.state.data, (item, i) => {
            return (
                <div key={i} id="grid-table" className="col-lg-6 col-sm-6 mb-6">
                <spna className="server-name">{i}</spna>
                <table class="table border border-primary">
    <thead class="thead-dark">
        <tr>
        <th scope="col">#</th>
        <th scope="col">Size</th>
        <th scope="col">Used</th>
        <th scope="col">Available</th>
        <th scope="col">UsePercentage</th>
        <th scope="col">MountedOn</th>
        </tr>
    </thead>
    <tbody>{this.getdata(item)}
    </tbody>
  </table>
                
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
            <nav class="navbar-link navbar-expand-lg navbar-dark">
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
                    <li class="nav-item">
                        <a href="sit" class="nav-link">SIT</a>
                    </li>
                    <li class="nav-item">
                        <a href="dev" class="nav-link">DEV</a>
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
