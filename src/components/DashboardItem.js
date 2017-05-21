import React from 'react';
import getValues from '../utils/variableValues';
import Graph from './Graph';
import { getVariableValues } from '../actions/dashboardActions';
import { connect } from 'react-redux';

class DashboardItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            values: []
        }
    }

    componentDidMount() {
        let context = this;
        // getValues(context.props.variable.id, 1, context);
        this.props.getVariableValues(this.props.variable, 1);
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

const mapDispatchToProps = (dispatch) => {
    return {
        getVariableValues: (id, page) => {
            dispatch(getVariableValues(id, page));
        }
    }
}

export default connect(null, mapDispatchToProps)(DashboardItem);