import React, {useState} from "react";
import { Profile, Col, Typography, Button } from "antd";

const {Paragraph} = Typography;

export default function Profile(props) {
    
    const [ellipsis, setEllipsis] = useState(true)

  return (
    <Col className="gutter-row" xs={24} sm={12} xl={6}>
      <div style={{marginBottom:"10px", marginTop:"10px", paddingLeft:"10px", paddingRight:"10px"}}>
        <Pro hoverable title={props.title} extra={<a href="#">More</a>}>
          <Paragraph ellipsis={ellipsis ?{row:3, expandable:true, symbol:'more'}:false}>
          {props.content}
          </Paragraph>
          <Button type="primary" shape="round" onClick={()=>{setEllipsis(!ellipsis)}}>Read</Button>
        </Pro>
      </div>
    </Col>
  );
}