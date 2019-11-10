import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Small from "components/Typography/Small.js";
import Danger from "components/Typography/Danger.js";
import Warning from "components/Typography/Warning.js";
import Success from "components/Typography/Success.js";
import Info from "components/Typography/Info.js";
import Primary from "components/Typography/Primary.js";
import Muted from "components/Typography/Muted.js";
import Quote from "components/Typography/Quote.js";

import oneOfUs from "../../../assets/img/oneofus.jpg";
import contribution from "../../../assets/img/contribution.jpg";
import recommendations from "../../../assets/img/recommendations.jpg";


import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function SectionTypography() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div className={classes.space50}/>
        <div>
          <GridContainer className={classes.flexContents}>
            <GridItem xs={12} sm={4}>
              <div className={classes.optionContainer}>
                <img className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                } src={recommendations}/>
                <div className={classes.optionTitle}>
                  <span className={classes.optionTitleText}>ממליצים ומפרגנים</span>
                </div>
              </div>
            </GridItem>
            <GridItem xs={12} sm={4}>
              <div className={classes.optionContainer}>
                <img
                  src={oneOfUs}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                />
                <div className={classes.optionTitle}>
                  <span className={classes.optionTitleText}>אחד משלנו</span>
                </div>
              </div>
            </GridItem>
            <GridItem xs={12} sm={4}>
              <div className={classes.optionContainer}>
                <img style={{height: "233px"}}
                  src={contribution}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                />
                <div className={classes.optionTitle}>
                  <span className={classes.optionTitleText}>שותפות בקהילה</span>
                </div>
              </div>
            </GridItem>
          </GridContainer>
          <GridContainer/>
        </div>
        <div className={classes.space50}/>
      </div>
    </div>
  );
}
