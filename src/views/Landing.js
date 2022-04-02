import jumping from "../assets/img/businessman-jumping.png";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Job from "../component/Job";
import { JobContext } from "../context/JobContext";
import { useContext, useEffect } from "react";
import axios from "axios";

const Landing = () => {
  const { state } = useContext(JobContext);
  const { job, setJob } = state;

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
    <>
      <Navbar />
      <div className="grid">
        <div className="grid grid-cols-2 py-20 px-24 justify-items-center">
          <div className="self-center px-20">
            <h1 className="text-6xl font-bold leading-snug mb-2 text-neutral-900">
              One Step <br />
              Closer To Your <br />
              New Job
            </h1>
            <p className="tracking-wide text-justify text-neutral-500">
              Explore thousands of job opportunities with all the information
              you need. It's your future. Come find it. Manage all your job
              application from start to finish
            </p>

            <div className="flex mt-5">
              <input
                type="text"
                className="rounded-none rounded-l-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-neutral-500 focus:border-neutral-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                placeholder="Job Title"
              />
              <button
                type="button"
                className="text-white rounded-r-lg bg-neutral-700 hover:bg-neutral-800 focus:ring-4 focus:ring-neutral-300 font-medium text-sm px-5 py-2.5"
              >
                Search
              </button>
            </div>
          </div>
          <img src={jumping} className="max-w-md" alt="Jumping Businessman" />
        </div>
        <div className="bg-gray-100 py-20 px-24">
          <h1 className="text-neutral-700 text-4xl font-semibold mb-8">
            Most Demanded Job Categories
          </h1>
          <div className="grid grid-cols-5 gap-x-5">
            <a href="#">
              <div className="p-6 h-full bg-gray-100 rounded-lg group hover:bg-neutral-700 grid">
                <svg
                  className="h-8 w-8 text-neutral-700 group-hover:text-white justify-self-end mb-5"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <path d="M3 21v-4a4 4 0 1 1 4 4h-4" />{" "}
                  <path d="M21 3a16 16 0 0 0 -12.8 10.2" />{" "}
                  <path d="M21 3a16 16 0 0 1 -10.2 12.8" />{" "}
                  <path d="M10.6 9a9 9 0 0 1 4.4 4.4" />
                </svg>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-neutral-700 group-hover:text-white">
                  Design
                </h5>
                <p className="font-normal text-gray-700 group-hover:text-white">
                  New 186 job posted
                </p>
              </div>
            </a>
            <a href="#">
              <div className="p-6 h-full bg-gray-100 rounded-lg group hover:bg-neutral-700 grid">
                <svg
                  className="h-8 w-8 text-neutral-700 group-hover:text-white justify-self-end mb-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-neutral-700 group-hover:text-white">
                  Technology
                </h5>
                <p className="font-normal text-gray-700 group-hover:text-white">
                  New 186 job posted
                </p>
              </div>
            </a>
            <a href="#">
              <div className="p-6 h-full bg-gray-100 rounded-lg group hover:bg-neutral-700 grid">
                <svg
                  className="h-8 w-8 text-neutral-700 group-hover:text-white justify-self-end mb-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <h5 className="mb-2 text-2xl font-bold tracking-tight text-neutral-700 group-hover:text-white">
                  Finance
                </h5>
                <p className="font-normal text-gray-700 group-hover:text-white">
                  New 186 job posted
                </p>
              </div>
            </a>
            <a href="#">
              <div className="p-6 h-full bg-gray-100 rounded-lg group hover:bg-neutral-700 grid">
                <svg
                  className="h-8 w-8 text-neutral-700 group-hover:text-white justify-self-end mb-5"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <circle cx="9" cy="19" r="2" />{" "}
                  <circle cx="17" cy="19" r="2" />{" "}
                  <path d="M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2" />
                </svg>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-neutral-700 group-hover:text-white">
                  Marketing
                </h5>
                <p className="font-normal text-gray-700 group-hover:text-white">
                  New 186 job posted
                </p>
              </div>
            </a>
            <a href="#">
              <div className="p-6 h-full bg-gray-100 rounded-lg group hover:bg-neutral-700 grid">
                <svg
                  className="h-20 w-20 text-neutral-700 group-hover:text-white justify-self-center mb-5"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <circle cx="12" cy="12" r="9" />{" "}
                  <line x1="15" y1="9" x2="9" y2="15" />{" "}
                  <polyline points="15 15 15 9 9 9" />
                </svg>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-neutral-700 group-hover:text-white text-center">
                  Find More
                </h5>
              </div>
            </a>
          </div>
        </div>
        <div className="py-20 px-24">
          <div className="grid grid-cols-2 mb-8 items-center">
            <h1 className="text-neutral-700 text-4xl font-semibold">
              Newest Job Listing
            </h1>
            <button
              type="button"
              className="justify-self-end w-fit h-fit text-lg text-white bg-neutral-700 hover:bg-neutral-800 focus:ring-4 focus:ring-neutral-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            >
              View All
            </button>
          </div>
          <div className="grid grid-cols-4 gap-10">
            {job?.slice(0, 8).map((item, index) => {
              return <Job job={item} />;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Landing;
