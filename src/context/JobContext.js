import axios from "axios";
import React, { createContext, useState } from "react";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";

export const JobContext = createContext();

export const JobProvider = (props) => {
  const history = useHistory();
  const [job, setJob] = useState([]);
  const [input, setInput] = useState({
    title: "",
    job_description: "",
    job_qualification: "",
    job_type: "",
    job_tenure: "",
    job_status: 0,
    company_name: "",
    company_image_url: "",
    company_city: "",
    salary_min: "",
    salary_max: "",
  });
  const [currentId, setCurrentId] = useState(null);

  const handleChange = (event) => {
    let { name, value } = event.target;

    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (currentId === null) {
      console.log(input);
      axios
        .post(`https://dev-example.sanbercloud.com/api/job-vacancy`, input, {
          headers: { Authorization: `Bearer ${Cookies.get("token")}` },
        })
        .then((res) => {
          let data = res.data;
          setJob([
            ...job,
            {
              id: data.id,
              created_at: data.created_at,
              updated_at: data.updated_at,
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
            },
          ]);
          history.push("/dashboard/list-job-vacancy");
          setCurrentId(null);
          setInput({
            title: "",
            job_description: "",
            job_qualification: "",
            job_type: "",
            job_tenure: "",
            job_status: 0,
            company_name: "",
            company_image_url: "",
            company_city: "",
            salary_min: "",
            salary_max: "",
          });
        });
    } else {
      axios
        .put(
          `https://dev-example.sanbercloud.com/api/job-vacancy/${currentId}`,
          input,
          {
            headers: { Authorization: `Bearer ${Cookies.get("token")}` },
          }
        )
        .then(() => {
          let singleJob = job.find((el) => el.id === currentId);
          singleJob.name = input.name;
          singleJob.course = input.course;
          singleJob.score = input.score;
          singleJob.created_at = input.created_at;
          singleJob.updated_at = input.updated_at;
          singleJob.title = input.title;
          singleJob.job_description = input.job_description;
          singleJob.job_qualification = input.job_qualification;
          singleJob.job_type = input.job_type;
          singleJob.job_tenure = input.job_tenure;
          singleJob.job_status = input.job_status;
          singleJob.company_name = input.company_name;
          singleJob.company_image_url = input.company_image_url;
          singleJob.company_city = input.company_city;
          singleJob.salary_min = input.salary_min;
          singleJob.salary_max = input.salary_max;
          setJob([...job]);
          history.push("/dashboard/list-job-vacancy");
          setCurrentId(null);
          setInput({
            title: "",
            job_description: "",
            job_qualification: "",
            job_type: "",
            job_tenure: "",
            job_status: 0,
            company_name: "",
            company_image_url: "",
            company_city: "",
            salary_min: "",
            salary_max: "",
          });
        });
    }
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${id}`, {
        headers: { Authorization: `Bearer ${Cookies.get("token")}` },
      })
      .then(() => {
        let newJob = job.filter((el) => {
          return el.id !== id;
        });
        setJob(newJob);
      });
  };

  const handleEdit = (id) => {
    history.push(`/dashboard/list-job-vacancy/edit/${id}`);
  };

  let handleFunction = {
    handleChange,
    handleSubmit,
    handleDelete,
    handleEdit,
  };

  let state = {
    job,
    setJob,
    input,
    setInput,
    currentId,
    setCurrentId,
  };

  return (
    <JobContext.Provider value={{ state, handleFunction }}>
      {props.children}
    </JobContext.Provider>
  );
};
