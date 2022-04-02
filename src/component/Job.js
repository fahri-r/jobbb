const Job = (props) => {
  const { job } = props;
  return (
    <>
      <div className="p-6 max-w-xs bg-white rounded-lg border-2 border-gray-200 hover:shadow-2xl grid grid-cols-2 gap-y-3">
        <img
          className="row-span-3 justify-self-center w-20 h-20 p-1 rounded-full ring-2 ring-gray-300 self-center"
          src={job.company_image_url}
          alt="Company Image"
        />

        <p className="font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-2 inline"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
          {job.company_name}
        </p>
        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-2 inline"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {job.company_city}
        </p>
        <span className="w-fit h-fit bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
          {job.job_tenure}
        </span>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 col-span-2">
          {job.title}
        </h5>
        <p className="font-normal text-gray-700 col-span-2 truncate">
          {job.job_description}
        </p>
        <a
          href="#"
          className="text-md col-span-2 inline-flex justify-center items-center py-2 px-3 text-sm font-medium text-center text-white bg-neutral-700 rounded-lg hover:bg-neutral-800 focus:ring-4 focus:outline-none focus:ring-neutral-300"
        >
          Detail
        </a>
      </div>
    </>
  );
};

export default Job;
