import React from 'react';
import getValues from '../utils/variableValues';
import Graph from './Graph';

class DashboardItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            values: []
        }
    }

    componentDidMount() {
        let context = this;
        getValues(context.props.variable.id, 1, context);
    }

    render() {
        return (
            <div>
                <h3>{this.props.variable.name}</h3>
                <p>{this.props.variable.last_activity}</p>
                <p>{this.props.variable.last_value.value} {this.props.variable.unit}</p>
                {this.state.values.length > 0 && <Graph values={this.state.values}/>}
            </div>
        )
    }
}

export default DashboardItem;