import React, { FunctionComponent } from "react";
import { Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

interface Props {
  readonly title?: string;
  readonly subtitle?: string;
}

const Error: FunctionComponent<Props> = ({ title, subtitle }) => {
  return (
    <Grid id="error" container justify="center">
      <Grid item xs={12} md={9} container alignItems="flex-start">
        <Grid item xs={12} sm={7}>
          <Typography variant="h4" gutterBottom color="secondary">
            {title || "Oops!"}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {subtitle || "Something went wrong."}
          </Typography>
          <div>
            Ante cualquier duda,{" "}
            <a
              href="mailto:overfocus20@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              contáctese con nosotros
            </a>
            .
          </div>
        </Grid>
        <Grid item />
        <Grid item xs={12} sm={4}>
          <div>
            <div>
              <i />
              Phone: 11-3469-9474
            </div>
            <div>
              <i />
              Email:{" "}
              <a
                href="mailto:overfocus20@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                overfocus20@gmail.com
              </a>
            </div>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Error);
