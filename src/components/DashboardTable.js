import React from 'react';
import { connect } from 'react-redux';
import DashboardTableRow from './DashboardTableRow'

class DashboardTable extends React.Component{
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         tableRows: []
    //     }
    // }

    // componentDidMount() {
        // let tableRows = [];
        // let thisObj = this;
        // for(let variable in this.props.variables) {

        //     if(this.props.variables[variable].values) {
                
        //         //below this is old version
        //     //     let row = document.createElement('tr');
        //     //     let rowHeading = document.createElement('td');
        //     //     let rowName = document.createTextNode(variable);
        //     //     rowHeading.appendChild(rowName);
        //     //     row.appendChild(rowHeading);
        //     //     // console.log('row', row);
        //     //     if(thisObj.props.variables[variable].values) {
        //     //         thisObj.props.variables[variable].values.forEach(value => {
        //     //             // console.log('currval', value);
        //     //             let dataPoint = document.createElement('td');
        //     //             let dataValue = document.createTextNode(value.value);
        //     //             dataPoint.appendChild(dataValue);
        //     //             // console.log('dataval', dataPoint)
        //     //             row.appendChild(dataPoint);
                    
        //     //         });

        //     //     }
        //     //     tableRows.push(row);

        //     } 
        //     // console.log('tablerows', tableRows)
        // }
        // this.setState({
        //     tableRows: tableRows
        // }, () => {
        //     console.log('tablerows', this.state.tableRows)
        // })
    // }
        // let tableRows = [];

    render() {
        let variablesArr = [];
        let namesArr = [];
        let thisObj = this;
        for(let variable in this.props.variables) {

            if(this.props.variables[variable].values) {
                variablesArr.push(thisObj.props.variables[variable]);
            }

            
        }
        for(let item in this.props.variables.variables) {
            console.log('item', this.props.variables.variables[item].name)
            namesArr.push(this.props.variables.variables[item].name);
        }
        // console.log('array is', Array.isArray(this.state.tableRows));
        // console.log('variable', variable)
        //             return <tr>{JSON.stringify(variable.values)}</tr>})}
        // console.log('somethign', variablesArr)
        return (
            <table id='testtable'>
                
                <tbody>
                {variablesArr.map((variable, index) => {
                    console.log('variable in map', variable);
                    return (
                        <DashboardTableRow values={variable.values} name={namesArr[index]} />
                    )
                })}
                </tbody>
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