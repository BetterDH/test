import React, { Component } from "react";
import { Card } from "antd";
import "./jobList.scss";

class JobList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderList(data){
    return (
        <ul>
          {data.map((item, index) => {
            return (
              <li key={index}>
                <a
                  href="javascript:;"
                >
                  {item.position}
                </a>
            <span>{item.time}</span>
            <span>{item.city}</span>
              </li>
            );
          })}
        </ul>
      );

  }


  render() {
    console.log(this.props.positionData);
    let {positionData}=this.props
    return (
      <div className="jobList">
        <Card
          title="最新职位"
          extra={<a href="#" style={{"color": 'rgba(31,56,88,0.60)'}}>更多</a>}
          style={{ width: '70%',height:300 }}
        >
            {this.renderList(positionData)}
            
        </Card>
      </div>
    );
  }
}

export default JobList;
