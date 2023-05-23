import React, { useState } from "react";

import "../App.css";
import image from "../images/icon-remove.svg";

const HomePage = ({ setFilter, filter, isNew, data }) => {
  const [filterArr, setFilterArr] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  

  return (
    <div className="gym">
      <div className="empty"></div>

      {filter.length > 0
        ? filter.map((datum) => {
            return (
              <>
                <div className="initial">
                  <div className={isClicked === true ? "filter" : ""}>
                    {filterArr.map((btn) => {
                      return (
                        <div className="btndiv">
                          <div className="btndiv">
                            <button className="btn">{btn}</button>
                            <button
                              className="clear"
                              onClick={() => {
                                setFilterArr([]);
                                setIsClicked(false);
                                
                                
                                
                              }}
                            >
                              <span>
                                <img src={image} alt="" />
                              </span>
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="inner">
                    <div className="manage">
                      <p className="company">{datum.company}</p>
                      {isNew === datum.new ? (
                        <button className="new">New</button>
                      ) : (
                        ""
                      )}
                      {isNew === datum.featured ? (
                        <button className="featured">Featured</button>
                      ) : (
                        ""
                      )}
                    </div>

                    <div className="crash">
                      <div>
                        <h3>{datum.position}</h3>
                        <div className="job-details">
                          <p>{datum.postedAt}</p>
                          <p>{datum.contract}</p>
                          <p>{datum.location}</p>
                        </div>
                      </div>
                      <div className="mainbuttons">
                        <div>
                          {datum.languages.map((eachLanguage) => {
                            return (
                              <div className="lang">
                                <button
                                  value={eachLanguage}
                                  onClick={(e) => {
                                    let filterdata = data.filter((lang) => {
                                      let skill = lang.languages;
                                      return skill.includes(e.target.value);
                                    });
                                    // console.log(filterdata);
                                    setFilter(filterdata);
                                    
                                    let arr1 = [...filterArr, eachLanguage];
                                    setFilterArr(arr1);

                                    setIsClicked(true);
                                  }}
                                >
                                  {eachLanguage}
                                </button>
                              </div>
                            );
                          })}
                        </div>
                        <div>
                          <button
                            onClick={(e) => {
                              let filterData = data.filter((datum) => {
                                let role = datum.role;
                                return role.includes(e.target.value);
                              });
                              setFilter(filterData);
                              // console.log(filterData);
                              let filterArr1 = [datum.role];
                              let arr2 = [...filterArr, ...filterArr1];
                              setFilterArr(arr2);

                              setIsClicked(true);
                            }}
                            value={datum.role}
                          >
                            {datum.role}
                          </button>
                        </div>
                        <div>
                          <button
                            onClick={(e) => {
                              let filterData = data.filter((role) => {
                                let level = role.level;
                                return level.includes(e.target.value);
                              });
                              setFilter(filterData);
                              // console.log(filterData);
                              let filterArr1 = [datum.level];
                              let arr3 = [...filterArr, ...filterArr1];
                              setFilterArr(arr3);

                              setIsClicked(true);
                            }}
                            value={datum.level}
                          >
                            {datum.level}
                          </button>
                        </div>
                        <div>
                          {datum.tools.length > 0
                            ? datum.tools.map((eachTool) => {
                                return (
                                  <button
                                    onClick={(e) => {
                                      let filterData = data.filter((filter) => {
                                        let tool = filter.tools.map((each) => {
                                          return each;
                                        });
                                        // console.log(eachTool);
                                        return tool.includes(e.target.value);
                                      });
                                      setFilter(filterData);
                                      // console.log(filterData);
                                      let filterArr1 = [eachTool];
                                      let arr4 = [...filterArr, ...filterArr1];
                                      setFilterArr(arr4);

                                      setIsClicked(true);
                                    }}
                                    value={eachTool}
                                  >
                                    {eachTool}
                                  </button>
                                );
                              })
                            : ""}
                        </div>
                      </div>
                    </div>
                  </div>
                  <img src={data.logo} alt="" />
                </div>
              </>
            );
          })
        : data.map((datum) => {
            return (
              <>
                <div className="initial">
                  <div className="inner">
                    <div className="manage">
                      <p className="company">{datum.company}</p>
                      {isNew === datum.new ? (
                        <button className="new">New</button>
                      ) : (
                        ""
                      )}
                      {isNew === datum.featured ? (
                        <button className="featured">Featured</button>
                      ) : (
                        ""
                      )}
                    </div>

                    <div className="crash">
                      <div>
                        <h3>{datum.position}</h3>
                        <div className="job-details">
                          <p>{datum.postedAt}</p>
                          <p>{datum.contract}</p>
                          <p>{datum.location}</p>
                        </div>
                      </div>
                      <div className="mainbuttons">
                        <div>
                          {datum.languages.map((eachLanguage) => {
                            return (
                              <div className="lang">
                                <button
                                  value={eachLanguage}
                                  onClick={(e) => {
                                    let filterdata = data.filter((lang) => {
                                      let skill = lang.languages;
                                      return skill.includes(e.target.value);
                                    });

                                    setFilter(filterdata);
                                  }}
                                >
                                  {eachLanguage}
                                </button>
                              </div>
                            );
                          })}
                        </div>
                        <div>
                          <button
                            onClick={(e) => {
                              let filterData = data.filter((datum) => {
                                let role = datum.role;
                                return role.includes(e.target.value);
                              });
                              setFilter(filterData);
                            }}
                            value={datum.role}
                          >
                            {datum.role}
                          </button>
                        </div>
                        <div>
                          <button
                            onClick={(e) => {
                              let filterData = data.filter((role) => {
                                let level = role.level;
                                return level.includes(e.target.value);
                              });
                              setFilter(filterData);
                            }}
                            value={datum.level}
                          >
                            {datum.level}
                          </button>
                        </div>
                        <div>
                          {datum.tools.length > 0
                            ? datum.tools.map((eachTool) => {
                                return (
                                  <button
                                    onClick={(e) => {
                                      let filterData = data.filter((filter) => {
                                        let tool = filter.tools.map((each) => {
                                          return each;
                                        });
                                        console.log(eachTool);
                                        return tool.includes(e.target.value);
                                      });
                                      setFilter(filterData);
                                    }}
                                    value={eachTool}
                                  >
                                    {eachTool}
                                  </button>
                                );
                              })
                            : ""}
                        </div>
                      </div>
                    </div>
                  </div>
                  <img src={data.logo} alt="" />
                </div>
              </>
            );
          })}
    </div>
  );
};

export default HomePage;
