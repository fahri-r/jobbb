import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="p-4 bg-neutral-700 shadow md:px-6 md:py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <Link
          to={"https://fahri-r.github.io"}
          className="flex items-center mb-4 sm:mb-0"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Jobbb.
          </span>
        </Link>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-white sm:mb-0">
          <li>
            <Link className="mr-4 hover:underline md:mr-6 ">About</Link>
          </li>
          <li>
            <Link className="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
          </li>
          <li>
            <Link className="mr-4 hover:underline md:mr-6 ">Licensing</Link>
          </li>
          <li>
            <Link className="hover:underline">Contact</Link>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-white sm:mx-auto lg:my-8" />
      <span className="block text-sm text-white sm:text-center">
        © 2022{" "}
        <Link href="https://fahri-r.github.io" className="hover:underline">
          fahri-r
        </Link>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
