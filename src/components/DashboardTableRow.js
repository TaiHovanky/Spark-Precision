import React from 'react';

class DashboardTableRow extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                {this.props.values.map(dataPoint => {
                    
                    return <td>{dataPoint.value}</td>
                })}
            </tr>
        )
    }
}

export default DashboardTableRow;