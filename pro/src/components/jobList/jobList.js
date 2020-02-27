import React, { Component } from "react";
import { Card } from "antd";
import "./jobList.scss";

class JobList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top: 0
    };
    this.timer = null;
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      let { top } = this.state;
      if (top <= 250) {
        top += 1;
      } else {
        top = 0;
      }
      this.setState({
        top: top
      });
    }, 50);
  }
  componentWillUnmount() {
    this.timer = null;
  }

  renderList(data) {
    let { top } = this.state;
    return (
      <ul style={{ position: "relative", top: -top }}>
        {data.map((item, index) => {
          return (
            <li key={index}>
              <a href="javascript:;">{item.position}</a>

              <span className="city">{item.city}</span>
              <span className="time">{item.time}</span>
            </li>
          );
        })}
      </ul>
    );
  }

  render() {
    let { positionData } = this.props;
    return (
      <div className="jobList">
        <Card
          title="最新职位"
          extra={
            <a href="javascript:;" style={{ color: "rgba(31,56,88,0.60)" }}>
              更多
            </a>
          }
          style={{ width: "100%", height: 300 }}
          bordered={false}
        >
          {this.renderList(positionData)}
        </Card>
      </div>
    );
  }
}

export default JobList;
