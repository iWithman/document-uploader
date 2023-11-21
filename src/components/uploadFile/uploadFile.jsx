import React, { useState } from "react";

import {
  Container,
  Grid,
  Paper,
  Typography,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  Radio,
  FormControlLabel,
  FormGroup,
  Switch,
  Button,
  RadioGroup,
} from "@mui/material";

// libraries
import { AccessTime, TextSnippet } from "@mui/icons-material";

// styles
import "./uploadFile.scss";

const UploadFile = () => {

  const [toggleChecked, setToggleChecked] = useState(true);
  const [socialDistancing, setSocialDistancing] = useState("Yes");
  const [client, setClient] = useState("Multiple");

  const totalSelects = 4;

  const handleToggle = () => {
    setToggleChecked((prev) => !prev);
  };

  return (
    <Container id="upload-file">
      <Grid container spacing={2} className="document-upload-container">
        <Grid item lg={12} className="document-header">
          <Typography variant="h5">Document Upload</Typography>
        </Grid>
        <Grid container spacing={15} className="upload-container">
          
          <Grid item lg={7} className="left-side-container">
            <FormControl fullWidth>
              <InputLabel>Select Import Name:</InputLabel>
              <Select defaultValue="" className="select">
                <MenuItem value="">Select Import Name:</MenuItem>
                <MenuItem value="name1">name 1</MenuItem>
                <MenuItem value="name2">name 2</MenuItem>
              </Select>
            </FormControl>
            <Typography className="upload-content">
              Select a manifest that you'd like to import
            </Typography>
            <Paper elevation={3} className="upload-box">
              <Grid container className="upload-box-content">
                <useDropzone
                  onDrop={(acceptedFiles) => console.log(acceptedFiles)}
                >
                    <Grid className="upload-box-content-text">
                      <Grid className="upload-box-content-icon">
                        <TextSnippet sx={{ color: "orange" }} />
                      </Grid>
                      <Grid className="upload-box-content-text-subtitle">
                        <p>
                          <span sx={{ color: "gray" }}>Drag & Drop Here or</span> <b>Browse</b>
                        </p>
                      </Grid>
                    </Grid>
                </useDropzone>
              </Grid>
              <Button variant="contained" className="upload-box-button">
                Upload Manifest
              </Button>
            </Paper>
            <Grid className="loading-file-line">
              <TextSnippet sx={{ color: "orange" }} />
              <span style={{ width: "100%" }}>
                <hr />
              </span>
            </Grid>
            <Grid className="elapse-data-container">
              <Typography variant="h6">Elapse Data Checking:</Typography>
              <Typography
                sx={{ color: "limegreen"}}
              >No Elapsed Dates!</Typography>
            </Grid>
            <Grid className="toggler-container">
              <Typography>Tolerance Window:</Typography>
              <Grid className="toggler"
                sx={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <FormControlLabel
                  control={
                    <Switch checked={toggleChecked} onChange={handleToggle} />
                  }
                  label="Toggle ON"
                />
                | <AccessTime sx={{ color: "gray", fontSize: "18px" }} />
                Select Tolerance Level
              </Grid>
            </Grid>
          </Grid>


          <Grid item lg={5} className="right-side-container">
            <Grid className="radio-buttons-container">
              <Typography variant="h5" sx={{ fontSize: "20px"}}>
                Split schedule using social distancing?
              </Typography>
              <FormGroup className="radio-buttons-container-content">
                <RadioGroup value={socialDistancing} onChange={(e) => setSocialDistancing(e.target.value)}>
                  <Grid container spacing={2}>
                    <Grid item lg={3}>
                      <FormControlLabel value="Yes" control={<Radio />} label="Yes" defaultChecked />
                    </Grid>
                    <Grid item lg={2}>
                      <FormControlLabel value="No" control={<Radio />} label="No" />
                    </Grid>
                  </Grid>
                </RadioGroup>
              </FormGroup>
            </Grid>
            <Grid className="location-check">
              <Typography variant="h6">Location Checking:</Typography>
              <Typography
                sx={{ color: "limegreen"}}
              >All Available</Typography>
            </Grid>
            <Grid>
              <Typography variant="h6">Client:</Typography>
            </Grid>
            <FormGroup className="radio-buttons-container-content">
              <RadioGroup value={client} onChange={(e) => setClient(e.target.value)}>
                <Grid container spacing={2}>
                  <Grid item lg={3}>
                    <FormControlLabel value="Single" control={<Radio />} label="Single" />
                  </Grid>
                  <Grid item lg={2}>
                    <FormControlLabel value="Multiple" control={<Radio />} label="Multiple" />
                  </Grid>
                </Grid>
            </RadioGroup>
            </FormGroup>
            <Grid className="select-container">
              {Array.from(Array(totalSelects), (e, i) => (
                <Grid container className="select-container-select" alignItems={"center"} key={i}>
                  <Grid item lg={4}>
                    <Typography sx={{ fontSize: "14px", color: "gray"}}>Testing Center {i + 1}</Typography>
                  </Grid>
                  <Grid item lg={6}>
                    <Grid container spacing={2} alignItems={"center"}>

                      <Grid item lg={10} >
                        <FormControl fullWidth>
                          <InputLabel>Select Client</InputLabel>
                          <Select>
                            <MenuItem value="">Select Import Name:</MenuItem>
                            <MenuItem value={`client ${i+1}`}>Client {i+1}</MenuItem>
                            <MenuItem value={`client ${i+2}`}>Client {i+2}</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item lg={2}>
                        <AccessTime sx={{ color: "gray" }} />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid container className="data-import-container" width={"100%"}>
          <Grid item lg={12} className="data-import">
            <Typography variant="h5">
              Data in the import file is correct. Please press Continue to
              import.
            </Typography>
          </Grid>
          <Grid className="import-buttons-container">
            <Button variant="contained" className="import-button">
              Continue Import
            </Button>
            <Button variant="contained" className="cancel-button">
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UploadFile;
