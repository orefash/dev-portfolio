import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../contexts/ThemeContext';

import expImgWhite from '../../assets/svg/experience/expImgWhite.svg'
import expImgBlack from '../../assets/svg/experience/expImgBlack.svg'

import './Experience.css'

function ExperienceCard({id, company, jobtitle, startYear, endYear, duties}) {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        experienceCard : {
            backgroundColor:theme.primary30,
            "&:hover": {
                backgroundColor:theme.primary50,
            },
        },
    }));

    const classes = useStyles();


    return (
        <Fade bottom>
            <div key={id} className={`experience-card ${classes.experienceCard}`}>
                {/* <div className="expcard-img" style={{backgroundColor: theme.primary}}> */}
                <div className="expcard-img" >
                    <img src={theme.type === 'light' ? expImgBlack : expImgWhite} alt="" />
                </div>
                <div className="experience-details">
                    <h6 style={{color: theme.tertiary1}}>{startYear}-{endYear}</h6>
                    <h4 style={{color: theme.tertiary2}}>{jobtitle}</h4>
                    <h5 style={{color: theme.tertiary}}>{company}</h5>
                    <ul>
                    {duties.map(exp =>(
                        <li style={{color: theme.tertiary1}} className="duties-list">{exp}</li>
                    ))}
                    </ul>
                </div>
            </div>
        </Fade>   
    )
}

export default ExperienceCard
