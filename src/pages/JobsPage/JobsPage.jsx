import { useParams } from "react-router-dom";
import jobsPageStyle from "./JobsPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCurrentJobs } from "../../store/slices/JobsSlice/API";
import { selectJobsData } from "../../store/slices/JobsSlice/JobsSlice";
import { SocMedia } from "../../components/SocMedia/SocMedia";
import JobsDescription from "../../components/JobsDescription/JobsDescription";

const JobsPage = () => {
  const { currentJobs } = useSelector(selectJobsData);
  const { id } = useParams();
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentJobs(id));
  }, []);
  console.log(currentJobs);
  return (
    <div className={jobsPageStyle.jobsPage}>
      <SocMedia />
      <div className={jobsPageStyle.jobsPageContentHolder}>
        <div className={jobsPageStyle.jobsPageContent}>
          <div className={jobsPageStyle.jobsPageContentItems}>
            <JobsDescription currentJobs={currentJobs} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsPage;
