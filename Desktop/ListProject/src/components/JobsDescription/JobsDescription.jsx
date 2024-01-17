import { FaLocationDot } from "react-icons/fa6";
import jobsDesc from "./JobsDescription.module.css"
import { current } from "@reduxjs/toolkit";
import { UserInfo } from "../UserInfo/UserInfo";
import { ContentTools } from "../ContentTools/ContentTools";
import { Recomendation } from "../Recomendation/Recomendation";


const JobsDescription = ({currentJobs})=>{
    console.log(currentJobs);

    return(
        <div className={jobsDesc.JobsDescription}>
            <div className={jobsDesc.grdon}>
            <div className={jobsDesc.JobsTitleHolder}>
                <h1>{currentJobs.jobTitle}</h1>
                <div className={jobsDesc.jobLoacation}>
                    <FaLocationDot />
                    <p>{currentJobs.place}</p>
                </div>
                <div className={jobsDesc.jobDetail}>
                    Job Details
                </div>
                <div className={jobsDesc.jobDetailInfo}>
                    <div className={jobsDesc.alljobDetailInfo}>
                        <div className={jobsDesc.jobDetailInfoItam_1Title}>
                            Employment Type
                        </div>
                        <div className={jobsDesc.jobDetailInfoItam_1requirement}>
                            {currentJobs.employmentType}
                        </div>
                    </div>
                    <div className={jobsDesc.alljobDetailInfo}>
                        <div className={jobsDesc.jobDetailInfoItam_1Title}>
                            Company
                        </div>
                        <div className={jobsDesc.jobDetailInfoItam_1requirement}>
                            {currentJobs.companyName}
                        </div>
                    </div>
                    <div className={jobsDesc.alljobDetailInfo}>
                        <div className={jobsDesc.jobDetailInfoItam_1Title}>
                            Required Experience
                        </div>
                        <div className={jobsDesc.jobDetailInfoItam_1requirement}>
                            {currentJobs.experience}
                        </div>
                    </div>
                </div>
                <div className={jobsDesc.jobDescriptionHolders}>
                    <div className={jobsDesc.jobDescriptionHolder}>
                        <p>Job Description</p>
                        <p className={jobsDesc.jobDescriptionHolder_p}>{currentJobs.jobDescription}</p>
                    </div>
                    <div >
                        <p className={jobsDesc.jobResponsibilities}>Job Responsibilities</p>
                        <div>{currentJobs.responsibilities?.map((el) => {
                            return (
                                <div>
                                    <p className={jobsDesc.jobResponsibilities_p}>{el}</p>
                                </div>
                            )
                        })}
                        </div>
                    </div>
                </div>
                <div className={jobsDesc.requiredQualifications}>
                    <p className={jobsDesc.jobResponsibilities}>Required Qualifications</p>
                    <div>{currentJobs.requiredQualifications?.map((el)=>{
                        return(
                            <div>
                                <p className={jobsDesc.jobResponsibilities_p}>{el}</p>
                            </div>
                        )
                    })}
                    </div>
                </div>
                <div className="companyInfo">
                    <p className={jobsDesc.jobResponsibilities}>{currentJobs.companyName}</p>
                    <p className={jobsDesc.jobResponsibilities_p}>{currentJobs.companyInfo}</p>
                </div>
                
            </div>
           
            </div>
            <div className={jobsDesc.pmain_menu}>
                <UserInfo />
                <ContentTools />
                <Recomendation />
            </div>
        </div>
    )

}


export default JobsDescription;