import React from 'react';

class DashboardTableRow extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                {this.props.values.map(dataPoint => {
                    
                    return <td>{dataPoint.value}</td>
                })}
            </tr>
        )
    }
}

export default DashboardTableRow;