import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="lg:w-64 w-12" aria-label="Sidebar">
      <div className="overflow-y-auto py-4 lg:px-3 px-1 bg-gray-100 h-full">
        <ul className="space-y-2">
          <li className="group">
            <Link
              to={"/dashboard"}
              className="flex items-center p-2 text-base font-normal text-neutral-700 rounded-lg group-hover:bg-neutral-700 group-hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-neutral-700 group-hover:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                />
              </svg>
              <span className="ml-3 hidden lg:block">Dashboard</span>
            </Link>
          </li>
          <li className="group">
            <Link
              to={"/dashboard/list-job-vacancy"}
              className="flex items-center p-2 text-base font-normal text-neutral-700 rounded-lg group-hover:bg-neutral-700 group-hover:text-white"
            >
              <svg
                class="h-6 w-6 text-neutral-700 group-hover:text-white"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <rect x="3" y="7" width="18" height="13" rx="2" />{" "}
                <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />{" "}
                <line x1="12" y1="12" x2="12" y2="12.01" />{" "}
                <path d="M3 13a20 20 0 0 0 18 0" />
              </svg>
              <span className="ml-3 hidden lg:block">Job</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
