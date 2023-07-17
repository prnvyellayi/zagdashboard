import React, { useEffect, useState } from "react";
import data from "../test.json";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import SearchIcon from "../svg/searchicon";

const TableComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [maindata, setMaindata] = useState([...data]);
  const [drop, setDrop] = useState(false);
  const [sortOption, setSortOption] = useState("None");
  const [search, setSearch] = useState("");
  const recordsPerPage = 8;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  var records = maindata.slice(firstIndex, lastIndex);
  const [pageData, setPageData] = useState(maindata.slice(firstIndex, lastIndex));
  const npage = Math.ceil(maindata.length / recordsPerPage);
  
  useEffect(() => {
    let filter = new RegExp(search, "i");
    if (search !== "")
      setMaindata(data.filter((e) => e.customerName.search(filter) !== -1));
    else setMaindata([...data]);
  }, [search]);

  useEffect(() => {
    setPageData(maindata.slice(firstIndex, lastIndex))
  },[maindata])

  useEffect(() => {
    if (sortOption === "A-Z") {
      records.sort((a, b) => {
        if (a.customerName < b.customerName) {
          return -1;
        }
        if (a.customerName > b.customerName) {
          return 1;
        }
        return 0;
      });
    } else if (sortOption === "Z-A") {
      records.sort((a, b) => {
        if (a.customerName > b.customerName) {
          return -1;
        }
        if (a.customerName < b.customerName) {
          return 1;
        }
        return 0;
      });
    }
    setPageData(records);
  }, [sortOption, currentPage]);

  const prePage = () => {
    if (currentPage !== firstIndex && currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  const Pagination = ({ page }) => {
    let range;
    if (npage <= 6) {
      range = [...Array(npage + 1).keys()].slice(1);
      range.shift()
      range.pop()
    } else {
      if (page < 5) {
        range = [2, 3, 4, 5];
      } else if (page >= npage - 4) {
        range = [npage - 4, npage - 3, npage - 2, npage - 1];
      } else {
        range = [page - 1, page, page + 1];
      }
    }

    return (
      <>
        <span
          onClick={() => changeToPage(1)}
          className={` ${
            currentPage === 1
              ? "text-white border border-indigo-600 bg-indigo-600"
              : "border border-gray-200 bg-gray-100"
          } mx-1 h-6 w-6 cursor-pointer rounded flex justify-center items-center text-xs`}
        >
          {1}
        </span>
        {page > 4 && npage > 6 ? (
          <span className="w-6 flex justify-center items-end text-xs">...</span>
        ) : (
          <></>
        )}
        {range.map((e, i) => (
          <span
            onClick={() => changeToPage(e)}
            className={` ${
              currentPage === e
                ? "text-white border border-indigo-600 bg-indigo-600"
                : "border border-gray-200 bg-gray-100"
            } mx-1 h-6 w-6 cursor-pointer rounded flex justify-center items-center text-xs`}
          >
            {e}
          </span>
        ))}
        {page < npage - 4 && npage > 6 ? (
          <span className="flex justify-center items-end w-6 text-xs">...</span>
        ) : (
          <></>
        )}

        <span
          onClick={() => changeToPage(npage)}
          className={` ${
            currentPage === npage
              ? "text-white border border-indigo-600 bg-indigo-600"
              : "border border-gray-200 bg-gray-100"
          } mx-1 h-6 w-6 cursor-pointer rounded flex justify-center items-center text-xs ${
            npage === 1 ? "hidden" : ""
          }`}
        >
          {npage}
        </span>
      </>
    );
  };

  const changeToPage = (n) => {
    setCurrentPage(n);
  };

  const nextPage = () => {
    if (currentPage !== lastIndex && currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <div className="flex flex-row px-10 items-center justify-between mb-7">
        <span className="text-green-600 text-14 text-left">Active Members</span>
        <div className="flex flex-row justify-between items-center">
          <div className="relative left-8">
            <SearchIcon />
          </div>
          <input
            className="h-[39px] w-[222px] text-xs text-gray-400 bg-blue-50 rounded-[10px] p-[10px] pl-[40px] mr-4"
            placeholder="Search"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <div className="flex flex-col">
            <span
              onClick={() => setDrop(!drop)}
              className="flex justify-between bg-blue-50 items-center h-[39px] w-[159px] p-4 rounded-10"
            >
              <span className="text-[12px] text-gray-500">
                Sort by : {sortOption}
              </span>
              <RiArrowDropDownLine />
            </span>
            <div className="relative w-0 h-0">
              <div
                className={`${
                  drop ? "" : "hidden"
                } h-[fit-content] flex flex-col relative mt-1`}
              >
                <span
                  onClick={() => {
                    setSortOption("None");
                    setDrop(false);
                  }}
                  className="flex items-center justify-center cursor-pointer text-white bg-blue-500 border rounded-10 border-gray-200 font-bold h-9 w-[159px] p-4"
                >
                  None
                </span>
                <span
                  onClick={() => {
                    setSortOption("A-Z");
                    setDrop(false);
                  }}
                  className="flex items-center justify-center cursor-pointer text-white bg-blue-500 border rounded-10 border-gray-200 font-bold h-9 w-[159px] p-4"
                >
                  A-Z
                </span>
                <span
                  onClick={() => {
                    setSortOption("Z-A");
                    setDrop(false);
                  }}
                  className="flex items-center justify-center cursor-pointer text-white bg-blue-500 border rounded-10 border-gray-200 font-bold h-9 w-[159px] p-4"
                >
                  Z-A
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-10">
        <table className="w-full font-Poppins text-14">
          <thead className="text-gray-500 text-left h-[50px]">
            <th>Customer Name</th>
            <th> Company</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Country</th>
            <th>Status</th>
          </thead>
          <tbody>
            {pageData.map((e, i) => {
              return (
                <tr key={i} className="h-[70.5px] border-t border-gray-200">
                  <td>{e.customerName}</td>
                  <td>{e.company}</td>
                  <td>{e.phoneNumber}</td>
                  <td>{e.email}</td>
                  <td>{e.country}</td>
                  <td>
                    <span
                      className={`flex justify-center rounded h-[30px] items-center ${
                        e.status === "Active"
                          ? "text-green-600 border-green-500 border bg-green-200 bg-opacity-38"
                          : "border border-red-600 text-red-600 bg-red-200"
                      }`}
                    >
                      {e.status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="flex flex-row justify-between">
          <span className="text-gray-500 text-14 font-medium font-Poppins">
            Showing data {firstIndex} to {lastIndex} out of {data.length}{" "}
            entries
          </span>
          <div className="flex flex-row">
            <span
              onClick={prePage}
              className="h-6 w-6 cursor-pointer rounded flex justify-center items-center border border-gray-200 bg-gray-100 mr-1"
            >
              <IoIosArrowBack size={12} />
            </span>
            <Pagination page={currentPage} />
            <span
              onClick={nextPage}
              className="h-6 w-6 cursor-pointer rounded flex justify-center items-center border border-gray-200 bg-gray-100 ml-1"
            >
              <IoIosArrowForward size={12} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableComponent;
