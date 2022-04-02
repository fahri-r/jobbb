import axios from "axios";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";
import { JobContext } from "../context/JobContext";

const JobList = () => {
  const { state, handleFunction } = useContext(JobContext);
  const { job, setJob } = state;

  const { handleDelete, handleEdit } = handleFunction;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `https://dev-example.sanbercloud.com/api/job-vacancy`
      );

      setJob(
        result.data.data.map((x) => {
          return {
            id: x.id,
            created_at: x.created_at,
            updated_at: x.updated_at,
            title: x.title,
            job_description: x.job_description,
            job_qualification: x.job_qualification,
            job_type: x.job_type,
            job_tenure: x.job_tenure,
            job_status: x.job_status,
            company_name: x.company_name,
            company_image_url: x.company_image_url,
            company_city: x.company_city,
            salary_min: x.salary_min,
            salary_max: x.salary_max,
          };
        })
      );
    };

    fetchData();
  }, [setJob]);

  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex h-full">
        <Sidebar />
        <div className="grid mx-24 flex-1 py-5 self-start">
          <h1 className="text-4xl font-semibold pb-5">Job List</h1>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className="p-4 grid grid-cols-2">
              <label htmlFor="table-search" className="sr-only">
                Search
              </label>
              <div className="relative mt-1">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="table-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search for items"
                />
              </div>
              <Link
                to={"/dashboard/list-job-vacancy/create"}
                className="text-white bg-neutral-700 hover:bg-neutral-800 focus:ring-4 focus:ring-neutral-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none self-center justify-self-end"
              >
                Create new
              </Link>
            </div>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Type
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Tenure
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Company
                  </th>
                  <th scope="col" className="px-6 py-3">
                    City
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Salary Min
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Salary Max
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {job?.map((item, index) => {
                  return (
                    <tr
                      key={item.id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                      >
                        {item.title}
                      </th>
                      <td className="px-6 py-4">{item.job_type}</td>
                      <td className="px-6 py-4">{item.job_tenure}</td>
                      <td className="px-6 py-4">{item.company_name}</td>
                      <td className="px-6 py-4">{item.company_city}</td>
                      <td className="px-6 py-4">{item.salary_min}</td>
                      <td className="px-6 py-4">{item.salary_max}</td>
                      <td className="px-6 py-4 text-right">
                        <div
                          className="inline-flex rounded-md shadow-sm"
                          role="group"
                        >
                          <button
                            onClick={() => handleEdit(item.id)}
                            type="button"
                            className="group py-2 px-4 text-sm font-medium text-white bg-yellow-300 rounded-l-lg hover:bg-yellow-400 focus:z-10 focus:ring-2 focus:ring-yellow-300 focus:text-white"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                              />
                            </svg>
                          </button>
                          <button
                            onClick={() => handleDelete(item.id)}
                            type="button"
                            className="group py-2 px-4 text-sm font-medium text-white bg-red-600 rounded-r-lg hover:bg-red-700 focus:z-10 focus:ring-2 focus:ring-red-600 focus:text-white"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobList;
