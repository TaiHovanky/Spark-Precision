import React from 'react';
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
        this.props.getVariableValues(this.props.variable, 1);
    }

    render() {
        return (
            <div className='dashboardItem'>
                <div className='dashboardItemHeading'>
                    <h2 className='dashboardItemVariableName headerItem'>
                        {this.props.variable.name}
                    </h2>
                    <p className='dashboardItemVariableLastActive headerItem'>
                        {new Date(this.props.variable.last_active).toLocaleString()}
                    </p>
                    <p className='dashboardItemVariableLastValue headerItem'>
                        Most recent value: {this.props.variable.last_value} {this.props.variable.unit}
                    </p>
                </div>
                {this.props.values[this.props.variable.name] &&
                this.props.values[this.props.variable.name].values.length > 0 &&
                <Graph values={this.props.values[this.props.variable.name].values}/>}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        values: state.dashboardReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getVariableValues: (id, page) => {
            dispatch(getVariableValues(id, page));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardItem);