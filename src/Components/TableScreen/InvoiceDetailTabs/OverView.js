import React, { Component } from 'react';
import Validate from "react-validate-form";
import { confirmAlert } from 'react-confirm-alert';
import {Bootstrap, Grid, Row, Col,Alert,Badge,Breadcrumb,ButtonGroup,ButtonToolbar} from 'react-bootstrap';
import {DropdownButton,Carousel,Modal,Form,FormGroup,FormControl,Checkbox,HelpBlock,ControlLabel} from 'react-bootstrap';
import Icon from 'material-ui/Icon';
import is from 'is_js';
import Ripples from 'react-ripples';
import {Button} from 'react-materialize';
import Menu, { MenuItem } from 'material-ui/Menu';
import './InvoiceDetailTabs.css';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';



class OverView extends Component {
  constructor(props){
    super(props)
this.state={

}

  }


render(){

  return(
<div>
  <div className="OverViewTrackingDiv">
    <div className="OverViewDivTime">
      <div>08 Jan 2018 02:12 PM</div><br />
      <div style={{marginTop:"1.7rem"}}>08 Jan 2018 02:13 PM</div>
    </div>
    <div className="TreeDiv">
      <div className="TreeDivChildren"></div>
      <div className="TreeDivChildrenConnector" ></div>
      <div className="TreeDivChildren"></div>
      <div className="TreeDivChildrenConnector" ></div>
      <div className="TreeDivChildren"><i class="material-icons" style={{marginTop:"2px",color:"#27d05e"}}>attach_money</i></div>
    </div>
    <div className="OverViewDivDiscription">
      <div className="OverViewDivDiscription1">Invoice created for $295.00 by MattDamon</div><br />
      <div className="OverViewDivDiscription1" style={{marginTop:"1.5rem"}} >Invoice Emailed to james@daikinshakefarms.com by Mattdamon</div><br />
      <div className="OverViewDivDiscription1" style={{marginTop:"1.5rem"}}>Payment of $5.00 is recievedfrom james daikin</div>
    </div>
  </div>

  <Card style={{margin:'4rem',padding:"7rem"}}>
      <CardContent>
          <div className="PaymentStatus">PARTIALLY PAID </div>
            <div>
              <div className="OverViewAddressDiv">
              <b>Daikin Shake Farms</b><br />
              123 Oak St.<br />
              Springfield, California 90222<br />
              USA
              </div>
            </div>

            <div className="InvoiceOverviewTitle">
            <div style={{fontSize:"50px",textAlign:"right"}}>INVOICE</div><br />
            # INV-000002 <br /><br />
            Balance Due <br />
            <span className="OverViewTotal">$295.00 </span>

            <table>
              <tr>
                <td className="OverViewTable">Invoice date:</td>
                <td className="OverViewTable">08 Jan 2018</td>
              </tr>
              <tr>
                <td className="OverViewTable">Due Date:</td>
                <td className="OverViewTable">Due On Receipt</td>
              </tr>
              <tr>
                <td className="OverViewTable">Terms:</td>
                <td className="OverViewTable">Net 45</td>
              </tr>
            </table>

          </div>
          <table style={{width:"100%",marginTop:"36rem",borderBottom:"1px solid #3d3d3a"}}>
            <tr style={{color:"#fff",backgroundColor:"#3d3d3a",paddingTop:"1rem",paddingBottom:"1rem"}}>
              <td  style={{width:"10%",padding:"10px"}}>#</td>
              <td style={{width:"40%", textAlign:"left",padding:"10px"}}>Item & Description</td>
              <td style={{width:"15%",padding:"10px"}}>QTY</td>
              <td style={{width:"15%",padding:"10px"}}>Rate</td>
              <td style={{width:"15%",padding:"10px"}}>Amount</td>
            </tr>
            <tr>
              <td style={{width:"10%",padding:"10px"}}>1</td>
              <td style={{width:"40%", textAlign:"left",padding:"10px"}}>Plant Tray #654</td>
              <td style={{width:"15%",padding:"10px"}}>1.00</td>
              <td style={{width:"15%",padding:"10px"}}>300.00</td>
              <td style={{width:"15%",padding:"10px"}}>300.00</td>
            </tr>

          </table>
          <table style={{float:"right",marginRight:"7.4%"}}>
            <tr>
              <td className="OverViewTable">Sub Total</td>
              <td className="OverViewTable">300</td>
            </tr>
            <tr>
              <td className="OverViewTable">Discount</td>
              <td className="OverViewTable" style={{color:"#ff0000"}}>(-)25.00</td>
            </tr>
            <tr>
              <td className="OverViewTable">Shipping Charges</td>
              <td className="OverViewTable">20.00</td>
            </tr>
            <tr>
              <td className="OverViewTable">Payment Made</td>
              <td className="OverViewTable" style={{color:"#ff0000"}}>(-)5.00</td>
            </tr>
            <tr>
              <td className="OverViewTable" style={{fontWeight:"550"}}>Total</td>
              <td className="OverViewTable" style={{fontWeight:"550"}}>$295.00</td>
            </tr>
            <tr style={{backgroundColor:"#f6f4f3"}}>
              <td className="OverViewTable" style={{fontWeight:"550"}}>Balance Due</td>
              <td className="OverViewTable" style={{fontWeight:"550"}}>$295.00</td>
            </tr>
          </table>
          <div style={{textAlign:"left",marginTop:"16%"}}>
          <span style={{fontWeight:"550"}}>Notes</span>
         <br /><br />
         Thanks for your business! <br />
         Hope you enjoy our products.
          </div>

          <div style={{textAlign:"left",marginTop:"2rem"}}>
          <span style={{fontWeight:"550"}}>Terms & Conditions</span>
         <br /><br />
         30-Day Money Back Gurantee* <br />
        *If our products are tested as sub-par let us know<br />
        and yadda yadda.
          </div>
      </CardContent>
  </Card>
</div>
  )
}
}


export default OverView;
