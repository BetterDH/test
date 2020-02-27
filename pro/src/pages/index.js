import React, { Component } from "react";
import "./index.scss";
import logo from "../static/img/logo.png";
import aliyun from "../static/img/aliyun.png";
import alibaba from "../static/img/alibab.svg";
import JobList from "../components/jobList/jobList";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
      data: [
        { title: "首页" },
        { title: "社会招聘" },
        { title: "校园招聘" },
        { title: "了解阿里" },
        { title: "个人中心" }
      ],
      positionData: [
        {
          position: "天猫数字虚拟-高级游戏行业运营专家-杭州",
          time: "2小时前",
          city: "杭州"
        },
        {
          position: "天猫数字虚拟-游戏行业运营专家-杭州",
          time: "2小时前",
          city: "杭州"
        },
        {
          position: "天猫数字虚拟-泛娱乐高级行业运营专家-杭州",
          time: "2小时前",
          city: "杭州"
        },
        {
          position: "钉钉(DingTalk)-（高级）前端技术专家-研发中心【HOT】",
          time: "3小时前",
          city: "杭州"
        },
        {
          position: "钉钉(DingTalk)-高级Java工程师-教育",
          time: "3小时前",
          city: "杭州"
        },
        {
          position: "蚂蚁集团-资金平台技术专家-国际事业群",
          time: "4小时前",
          city: "深圳,上海,杭州"
        },
        {
          position: "蚂蚁集团-交付解决方案架构师-国际事业群",
          time: "4小时前",
          city: "上海,新加坡"
        },
        {
          position: "乌鸫科技-交付技术经理/专家-宜搭",
          time: "5小时前",
          city: "杭州"
        },
        {
          position: "CBU-品牌广告业务策划总监",
          time: "5小时前",
          city: "杭州"
        },
        {
          position: "Alibaba Cloud Intelligence-线上运营专家-Hangzhou/Beijing",
          time: "5小时前",
          city: "杭州"
        }
      ]
    };
  }

  renderList(arr) {
    return (
      <ul>
        {arr.map((item, index) => {
          return (
            <li key={index}>
              <a
                href="javascript:;"
                className={this.state.active === index ? "active" : ""}
                onClick={() => this.checkedChildern(index)}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    );
  }

  checkedChildern(index) {
    console.log(index);
    this.setState({
      active: index
    });
  }

  render() {
    let { data, positionData } = this.state;
    return (
      <div className="index">
        <div className="header">
          <div className="header_c">
            <div className="header_l">
              <a>
                <img src={logo} />
              </a>
              <span>|</span>

              <p>社招官网</p>
            </div>
            <div className="header_m">{this.renderList(data)}</div>
            <div className="header_r">
              <span>欢迎来到阿里巴巴集团招聘！</span>
              <span>
                {" "}
                <a href="javascript:;">登录</a>{" "}
              </span>
              <span>|</span>
              <span>
                {" "}
                <a href="javascript:;">注册</a>{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="bg"></div>
          <div className="banner_b">
            <div className="banner_c">
              <div>
                <p>If not now, when?</p>
                <p>If not me, who?</p>
                <p style={{ fontSize: "34px" }}>此时此刻，非我莫属！</p>
              </div>
              <div className="search_box">
                <input placeholder="请输入职位关键词" />
                <button>搜索</button>
              </div>
              <div className="link">
                <ul>
                  <li>热门搜索:</li>
                  <li>
                    <a href="javascript:;">JAVA</a>
                  </li>
                  <li>
                    <a href="javascript:;">IOS</a>
                  </li>
                  <li>
                    <a href="javascript:;">数据</a>
                  </li>
                  <li>
                    <a href="javascript:;">安全</a>
                  </li>
                  <li>
                    <a href="javascript:;">搜索</a>
                  </li>
                  <li>
                    <a href="javascript:;">算法</a>
                  </li>
                  <li>
                    <a href="javascript:;">运营</a>
                  </li>
                  <li>
                    <a href="javascript:;">视觉</a>
                  </li>
                  <li>
                    <a href="javascript:;">交互</a>
                  </li>
                  <li>
                    <a href="javascript:;">前端</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="c_left">
            <JobList positionData={positionData}></JobList>
          </div>
          <div className="c_right">
            <div style={{ width: "100%" }}>
              <a>
                <img src={aliyun} className="c_right_top_img" />
              </a>
            </div>
            <div style={{ width: "100%" }}>
              <a>
                <img src={alibaba} className="c_right_bottom_img" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="footer_con">
            阿里巴巴集团 Copyright ©1999-2020 版权所有
          </div>
        </div>
      </div>
    );
  }
}
export default Index;
