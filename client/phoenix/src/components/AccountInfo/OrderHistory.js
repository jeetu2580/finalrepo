import React, { Component } from 'react'
import {Row, Col, Table, Button, Icon, InputGroup, Input} from 'rsuite';
import TablePagination from 'rsuite/lib/Table/TablePagination';
const { Column, HeaderCell, Cell  } = Table;

// import "./assets/css/AccountInfo.css"; 


const CustomInputGroup = ({ placeholder, ...props }) => (
  <InputGroup {...props} style={{height:"40px", width:"300px"}}>
    <Input placeholder={placeholder} />
    <InputGroup.Addon style={{float:"left"}}>
      <Icon icon="search" />
    </InputGroup.Addon>
  </InputGroup>
);


export default class OrderHistory extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
            displayLength: 10,
            // loading: false,
            page: 1,
          data : [
            {
                "campaignname": "Your Brand Seasonal",
                "Account ID": "660759402",
                "costs" : "$50,100",
                "deploydate": "22-10-2020",
                "status": "Active",
                "sends": 500,
                "Views": "525",
                
                
                
            },
            {
                "campaignname": "Your Brand Seasonal",
                "Account ID": "660759402",
                "costs" : "$50,100",
                "deploydate": "22-10-2020",
                "status": "Active",
                "sends": 500,
                "Views": "525",
            },
            {
                "campaignname": "Your Brand Seasonal",
                "Account ID": "660759402",
                "costs" : "$50,100",
                "deploydate": "22-10-2020",
                "status": "Active",
                "sends": 500,
                "Views": "525",
            },
            {
                "campaignname": "Your Brand Seasonal",
                "Account ID": "660759402",
                "costs" : "$50,100",
                "deploydate": "22-10-2020",
                "status": "Active",
                "sends": 500,
                "Views": "525",
            },
            {
                "campaignname": "Your Brand Seasonal",
                "Account ID": "660759402",
                "costs" : "$50,100",
                "deploydate": "22-10-2020",
                "status": "Active",
                "sends": 500,
                "Views": "525",
            },
            {
                "campaignname": "Your Brand Seasonal",
                "Account ID": "660759402",
                "costs" : "$50,100",
                "deploydate": "22-10-2020",
                "status": "Active",
                "sends": 500,
                "Views": "525",
            },
           
            ]
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
            <>
            
<Row style={{width: "100%"}}>
    <Col md={2} sm={24}></Col>
  
<Col md={20} sm={24}>
    <Row>
        <Col md={4} sm={24}>
            <h5>Order History</h5>
            <br/><br/>
        </Col>
    </Row>
    <Row>
        <Col md={9} sm={12}>
            <b>Filter:</b>
            <br/><br/>
        <CustomInputGroup size="md" placeholder="Medium" /></Col>

<Col md={6} sm={24}>
<br/><br/>
<Button appearance="primary" style={{width:"120px"}}>Search</Button>
</Col>
</Row>
<Row>
<Col md={24} sm={24}>
    <br/><br/>
    
    <div style={{border: "1px solid #d9d9d9", padding: 10, width:"97%"}}><h5>Active Campaign Status</h5></div>
            <Table height={300} width={"97%"} data={data} cellBordered bordered >

              
    
              <Column width={150} resizable>
                <HeaderCell>Campaign Name</HeaderCell>
                <Cell>
              {rowData => (
                <a href={`/home/`+ rowData.campaignname} title={rowData.campaignname}>{rowData.campaignname}</a>
              )}
            </Cell>
            
              </Column>
    
              <Column width={200} resizable>
                <HeaderCell>Account ID</HeaderCell>
                <Cell dataKey="account" />
              </Column>
              <Column width={200} resizable>
                <HeaderCell>Costs</HeaderCell>
                <Cell dataKey="costs" />
              </Column>
              <Column width={100} align="center" resizable>
                <HeaderCell>Deploy Date</HeaderCell>
                <Cell dataKey="deploydate" />
              </Column>
              <Column width={100} resizable>
                <HeaderCell>Status</HeaderCell>
                <Cell dataKey="status" />
              </Column>
    
              <Column width={100} resizable>
                <HeaderCell>Sends</HeaderCell>
                <Cell dataKey="sends" />
              </Column>
              <Column width={100} resizable>
                <HeaderCell>Views</HeaderCell>
                <Cell dataKey="views" />
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
</Col>

</Row>
</Col>     
<Col md={2} sm={24}></Col>
</Row>

 
           </>
        )
    }
}
