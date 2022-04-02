import axios from "axios";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";
import { JobContext } from "../context/JobContext";
import Cookies from "js-cookie";

const JobForm = () => {
  let { id } = useParams();
  const { state, handleFunction } = useContext(JobContext);

  const { input, setInput, setCurrentId } = state;

  const { handleChange, handleSubmit } = handleFunction;

  useEffect(() => {
    if (id !== undefined) {
      axios
        .get(`https://dev-example.sanbercloud.com/api/job-vacancy/${id}`, {
          headers: { Authorization: `Bearer ${Cookies.get("token")}` },
        })
        .then((res) => {
          let data = res.data;
          setInput({
            title: data.title,
            job_description: data.job_description,
            job_qualification: data.job_qualification,
            job_type: data.job_type,
            job_tenure: data.job_tenure,
            job_status: data.job_status,
            company_name: data.company_name,
            company_image_url: data.company_image_url,
            company_city: data.company_city,
            salary_min: data.salary_min,
            salary_max: data.salary_max,
          });
          setCurrentId(data.id);
        });
    }
  }, [id, setCurrentId, setInput]);

  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex h-full">
        <Sidebar />
        <div className="grid mx-24 flex-1 py-5 self-start">
          <h1 className="text-4xl font-semibold pb-5">Job Form</h1>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-20">
            <form onSubmit={handleSubmit}>
              <div class="relative z-0 mb-6 w-full group">
                <input
                  value={input.title}
                  onChange={handleChange}
                  id="title"
                  type="text"
                  name="title"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  required
                />
                <label
                  for="title"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Job Title
                </label>
              </div>
              <div class="relative z-0 mb-6 w-full group">
                <textarea
                  value={input.job_description}
                  id="job_description"
                  type="text"
                  name="job_description"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  required
                />
                <label
                  for="job_description"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Job Description
                </label>
              </div>
              <div class="relative z-0 mb-6 w-full group">
                <textarea
                  value={input.job_qualification}
                  onChange={handleChange}
                  id="job_qualification"
                  type="text"
                  name="job_qualification"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  required
                />
                <label
                  for="job_qualification"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Job Qualification
                </label>
              </div>
              <div class="relative z-0 mb-6 w-full group">
                <input
                  value={input.job_type}
                  onChange={handleChange}
                  id="job_type"
                  type="text"
                  name="job_type"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  required
                />
                <label
                  for="job_type"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Job Type
                </label>
              </div>
              <div class="relative z-0 mb-6 w-full group">
                <input
                  value={input.job_tenure}
                  onChange={handleChange}
                  id="job_tenure"
                  type="text"
                  name="job_tenure"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  required
                />
                <label
                  for="job_tenure"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Job Tenure
                </label>
              </div>
              <div class="relative z-0 mb-6 w-full group">
                <label
                  for="countries"
                  class="block mb-2 text-sm text-gray-500 dark:text-gray-400"
                >
                  Select your country
                </label>
                <select
                  onChange={handleChange}
                  id="countries"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option
                    value={1}
                    selected={input.job_status === 1 ? "true" : "false"}
                  >
                    Dibuka
                  </option>
                  <option
                    value={0}
                    selected={input.job_status === 0 ? "true" : "false"}
                  >
                    Ditutup
                  </option>
                </select>
              </div>
              <div class="relative z-0 mb-6 w-full group">
                <input
                  value={input.company_name}
                  onChange={handleChange}
                  id="company_name"
                  type="text"
                  name="company_name"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  required
                />
                <label
                  for="company_name"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Company Name
                </label>
              </div>
              <div class="relative z-0 mb-6 w-full group">
                <input
                  value={input.company_image_url}
                  onChange={handleChange}
                  id="company_image_url"
                  type="text"
                  name="company_image_url"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  required
                />
                <label
                  for="company_image_url"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Company Image URL
                </label>
              </div>
              <div class="relative z-0 mb-6 w-full group">
                <input
                  value={input.company_city}
                  onChange={handleChange}
                  id="company_city"
                  type="text"
                  name="company_city"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  required
                />
                <label
                  for="company_city"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Company City
                </label>
              </div>
              <div class="relative z-0 mb-6 w-full group">
                <input
                  value={input.salary_min}
                  onChange={handleChange}
                  id="salary_min"
                  type="number"
                  name="salary_min"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  required
                />
                <label
                  for="salary_min"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Salary Min
                </label>
              </div>
              <div class="relative z-0 mb-6 w-full group">
                <input
                  value={input.salary_max}
                  onChange={handleChange}
                  id="salary_max"
                  type="number"
                  name="salary_max"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  required
                />
                <label
                  for="salary_max"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Salary Max
                </label>
              </div>
              <button
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobForm;
