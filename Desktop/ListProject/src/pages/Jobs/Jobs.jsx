import { useEffect } from "react";
import JobsStyle from "./Jobs.module.css";
import { BsChevronRight } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { getJobsData } from "../../store/slices/JobsSlice/API";
import { selectJobsData } from "../../store/slices/JobsSlice/JobsSlice";

const Jobs = () => {
  const dispatch = useDispatch();
  const { JobsData } = useSelector(selectJobsData);

  useEffect(() => {
    dispatch(getJobsData());
  }, []);

  return (
    <div className={JobsStyle.main}>
      <div>
        <NavLink className={JobsStyle.main_a}>
          <h1>Jobs</h1>
          <BsChevronRight className={JobsStyle.h1_icon} />
        </NavLink>
      </div>

      <div className={JobsStyle.jobs_holder}>
        {JobsData.map((job, index) => {
          return (
            <div className={JobsStyle.jobs} key={index}>
              <NavLink to={`/jobs/${job.id}/${job.jobTitle}`}>
                <div className={JobsStyle.jobs_item}>
                  <h1 className={JobsStyle.job_title}>
                    <FaGraduationCap /> {job.jobTitle}
                  </h1>
                  <h3 className={JobsStyle.job_company}>
                    <IoLocationOutline /> {job.companyName}
                  </h3>
                  <div className={JobsStyle.job_description}>{job.jobDescription}</div>
                </div>
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Jobs;
