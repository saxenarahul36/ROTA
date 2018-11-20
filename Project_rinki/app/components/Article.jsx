import React, {Component} from 'react';
import Breadcrumb from './Breadcrumb.jsx'

export default class Article extends Component {
    renderBreadcrumbs() {
        var steps = [{link: "/articles", name: "Articles"}]
        return (
            
            <Breadcrumb steps={steps} currentPage="Article" />
        );
    }

    render() {
        return (
            <div className="article-listing">
                {this.renderBreadcrumbs()}
                <h1>Article</h1>
                <p className="lead">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis semper leo, eget facilisis elit dapibus vitae. Curabitur congue ligula eu nulla fermentum, ac tincidunt purus viverra. Nullam finibus viverra urna in ultrices. Donec ligula eros, auctor ac blandit auctor, hendrerit ac tellus. Vestibulum consequat dui quis tempor maximus. In nec purus quis enim consectetur feugiat et non sem.
                </p>
                <div className="row">
                    <div className="col-12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis semper leo, eget facilisis elit dapibus vitae. Curabitur congue ligula eu nulla fermentum, ac tincidunt purus viverra. Nullam finibus viverra urna in ultrices. Donec ligula eros, auctor ac blandit auctor, hendrerit ac tellus. Vestibulum consequat dui quis tempor maximus. In nec purus quis enim consectetur feugiat et non sem. Morbi scelerisque, lectus quis rhoncus consectetur, quam lorem ultrices ligula, ac dignissim ligula felis eget libero. Fusce semper vel lorem eu ultrices. Quisque a neque condimentum, maximus massa ac, placerat ipsum. Quisque fermentum nunc non cursus euismod. Quisque rutrum nec felis vitae feugiat. Integer congue rhoncus leo, eget faucibus eros ullamcorper finibus.
                    <br /><br />
                    Suspendisse eget lectus egestas, dignissim felis posuere, eleifend turpis. Ut auctor mattis dolor id tincidunt. Quisque blandit purus sed quam faucibus, eu facilisis mauris tempor. Vestibulum id arcu quis est auctor vehicula. Cras consectetur ante nec felis scelerisque, eu tincidunt nisi vestibulum. Integer posuere tellus in urna condimentum, vel luctus tortor tempus. Fusce consequat mi pharetra quam tempus auctor in vel elit. Praesent metus dui, elementum a mauris a, consectetur euismod elit.
                    <br /><br />
                    Phasellus enim sapien, varius blandit interdum sit amet, dapibus at ligula. Phasellus at nisl sed quam laoreet consectetur. Quisque vel tellus nunc. Donec laoreet vestibulum quam sit amet posuere. Suspendisse dictum feugiat risus sit amet elementum. Vestibulum luctus erat vitae nulla efficitur lobortis. Vivamus bibendum dignissim convallis. Cras id tempus massa. Mauris scelerisque, augue at pulvinar tempus, purus mauris iaculis enim, eget semper nulla dolor nec sem. Praesent vitae molestie nunc. Morbi auctor felis quis ligula gravida placerat. Maecenas porttitor, nulla nec accumsan rutrum, est nisi sagittis mi, et facilisis urna nisl molestie nisi. Suspendisse cursus arcu et orci rutrum dignissim. Integer consequat finibus lectus ut sollicitudin. Aenean luctus egestas tellus, id pulvinar orci mollis et. Curabitur consequat turpis dui, sed sollicitudin sapien aliquam et.
                    </div>
                </div>
            </div>
        )
    }
}