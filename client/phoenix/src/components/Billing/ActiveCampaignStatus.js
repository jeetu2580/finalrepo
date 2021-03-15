import React, { Component } from 'react'
import {Table } from 'rsuite';
import TablePagination from 'rsuite/lib/Table/TablePagination';
// import {Link } from 'react-router-dom';

const { Column, HeaderCell, Cell  } = Table;



export default class ActiveCampaignStatus extends Component {

    constructor(props) {
        super(props);
     
        this.state = {
            displayLength: 10,
            // loading: false,
            page: 1,
          data : [
            {
                "deploydate": "22-10-2020",
                "campaignname": "Your Brand Seasonal",
                "components": "Social, Email, Digital Media",
                "status": "Active",
                "sends": 500,
                "costs" : "$50,100"
            },
            {
                "deploydate": "22-10-2020",
                "campaignname": "Your Brand Seasonal",
                "components": "Social, Email, Digital Media",
                "status": "Active",
                "sends": 500,
                "costs" : "$50,100"
            },
            {
                "deploydate": "22-10-2020",
                "campaignname": "Your Brand Seasonal",
                "components": "Social, Email, Digital Media",
                "status": "Active",
                "sends": 500,
                "costs" : "$50,100"
            },
            {
                "deploydate": "22-10-2020",
                "campaignname": "Your Brand Seasonal",
                "components": "Social, Email, Digital Media",
                "status": "Active",
                "sends": 500,
                "costs" : "$50,100"
            },
            {
                "deploydate": "22-10-2020",
                "campaignname": "Your Brand Seasonal",
                "components": "Social, Email, Digital Media",
                "status": "Active",
                "sends": 500,
                "costs" : "$50,100"
            },
            {
                "deploydate": "22-10-2020",
                "campaignname": "Your Brand Seasonal",
                "components": "Social, Email, Digital Media",
                "status": "Active",
                "sends": 500,
                "costs" : "$50,100"
            },
            {
                "deploydate": "22-10-2020",
                "campaignname": "Your Brand Seasonal",
                "components": "Social, Email, Digital Media",
                "status": "Active",
                "sends": 500,
                "costs" : "$50,100"
            },
            {
                "deploydate": "22-10-2020",
                "campaignname": "Your Brand Seasonal",
                "components": "Social, Email, Digital Media",
                "status": "Active",
                "sends": 500,
                "costs" : "$50,100"
            },
            {
                "deploydate": "22-10-2020",
                "campaignname": "Your Brand Seasonal",
                "components": "Social, Email, Digital Media",
                "status": "Active",
                "sends": 500,
                "costs" : "$50,100"
            },
            {
                "deploydate": "22-10-2020",
                "campaignname": "Your Brand Seasonal",
                "components": "Social, Email, Digital Media",
                "status": "Active",
                "sends": 500,
                "costs" : "$50,100"
            },
            {
                "deploydate": "22-10-2020",
                "campaignname": "Your Brand Seasonalaa",
                "components": "Social, Email, Digital Media",
                "status": "Active",
                "sends": 500,
                "costs" : "$50,100"
            }]
        };
        this.handleChangePage = this.handleChangePage.bind(this);
    this.handleChangeLength = this.handleChangeLength.bind(this);

    
      }
      handleChangePage(dataKey) {
         
        this.setState({
          page: dataKey
        });
      }
      handleChangeLength(dataKey) {
         
        this.setState({
          page: 1,
          displayLength: dataKey
        });
      }

      getData() {
        const { displayLength, page } = this.state;
    
        return this.state.data.filter((v, i) => {
          const start = displayLength * (page - 1);
          const end = start + displayLength;
          return i >= start && i < end;
        });
      }


    render() {
        var data = this.getData()
        return (
            
            <div>
                <div style={{border: "1px solid #d9d9d9", padding: 10, width:"97%"}}><h5>Active Campaign Status</h5></div>
            <Table height={300} width={"97%"} data={data} cellBordered bordered >

              <Column width={100} align="center" resizable>
                <HeaderCell>Deploy Date</HeaderCell>
                <Cell dataKey="deploydate" />
              </Column>
    
              <Column width={150} resizable>
                <HeaderCell>Campaign Name</HeaderCell>
                <Cell>
              {rowData => (
                <a href={`/home/`+ rowData.campaignname} title={rowData.campaignname}>{rowData.campaignname}</a>
              )}
            </Cell>
            
              </Column>
    
              <Column width={200} resizable>
                <HeaderCell>Campaign Components</HeaderCell>
                <Cell dataKey="components" />
              </Column>
    
              <Column width={100} resizable>
                <HeaderCell>Status</HeaderCell>
                <Cell dataKey="status" />
              </Column>
    
              <Column width={100} resizable>
                <HeaderCell>Sends</HeaderCell>
                <Cell dataKey="sends" />
              </Column>
              <Column width={200} resizable>
                <HeaderCell>Costs</HeaderCell>
                <Cell dataKey="costs" />
              </Column>
              
            </Table>
            <TablePagination
          lengthMenu={[
            {
              value: 5,
              label: 5
            },
            {
              value: 10,
              label: 10
            }
          ]}
          activePage={this.state.page}
          displayLength={this.state.displayLength}
          total={this.state.data.length}
          onChangePage={this.handleChangePage}
          onChangeLength={this.handleChangeLength}
        />
          </div>
        )
    }
}
