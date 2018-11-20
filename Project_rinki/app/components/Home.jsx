import React, {Component} from 'react';

import Breadcrumb from './Breadcrumb.jsx';

export default class Home extends Component {

    constructor() {
      super();
    }

    componentDidMount() {
    }

    renderBreadcrumbs() {
        return (
            <Breadcrumb />
        );
    }

    render() {
      return (
            <article>
                {this.renderBreadcrumbs()}
                <h1>ReactJs, Node and Bootstrap boilerplate</h1>
                <p className="lead">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel odio ac felis consectetur commodo. Duis ac ligula et nisl aliquam hendrerit. Morbi purus lectus, malesuada vel tristique at, gravida id felis. Integer dapibus suscipit neque nec ultricies. Sed sit amet vehicula risus. Suspendisse potenti. Pellentesque fringilla diam quis condimentum maximus. Sed eleifend neque eget justo rhoncus luctus. Donec sed luctus metus. Vestibulum vulputate accumsan elit, ac cursus nibh rutrum venenatis. In porttitor elementum condimentum. Maecenas porttitor est ac aliquam congue.
                    <br /><br />
                    Integer vitae euismod risus, sit amet tincidunt est. Mauris aliquam et lorem sit amet laoreet. Phasellus elementum vestibulum libero in consectetur. Suspendisse ullamcorper facilisis congue. Donec eu mi purus. Etiam dictum sed arcu non feugiat. Sed sed tempor augue. Morbi et lectus quis elit porta rutrum a at magna. Suspendisse volutpat id ipsum sed consequat. In egestas tempor urna, at finibus velit fringilla eget. Aliquam eleifend, libero ut tincidunt tristique, nunc arcu faucibus velit, eget rutrum risus odio ac turpis. Morbi id ornare nulla. Integer eleifend euismod leo in pharetra. Vivamus tristique leo quis dolor scelerisque, a ultrices est consequat. Aenean eget purus lectus. Praesent non ante placerat, auctor leo vel, ultricies justo.
                </p>
                <section className="row col-lg-12 nopadding">
                    
                </section>
            </article>
      );
    }
}
