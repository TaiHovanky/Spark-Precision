import React from 'react';
import { connect } from 'react-redux';

class DashboardTable extends React.Component{
    render() {
        let tableRows = [];
        let thisObj = this;
        for(let variable in this.props.variables) {
            if(this.props.variables[variable].values) {
                let row = document.createElement('tr');
                let rowHeading = document.createElement('td');
                let rowName = document.createTextNode(variable);
                rowHeading.appendChild(rowName);
                row.appendChild(rowHeading);
                // console.log('row', row);
                if(thisObj.props.variables[variable].values) {
                    thisObj.props.variables[variable].values.forEach(value => {
                        // console.log('currval', value);
                        let dataPoint = document.createElement('td');
                        let dataValue = document.createTextNode(value.value);
                        dataPoint.appendChild(dataValue);
                        // console.log('dataval', dataPoint)
                        row.appendChild(dataPoint);
                    
                    });

                }
                tableRows.push(row);

            } 
            // console.log('tablerows', tableRows)
        }
        console.log('tablerows', tableRows)
        return (
            <table>
                {tableRows.length > 0 && tableRows.map(row => {
                    return row;
                })}
            </table>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        variables: state.dashboardReducer
    }
}

export default connect(mapStateToProps)(DashboardTable);