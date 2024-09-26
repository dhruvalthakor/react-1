import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const steps = ['Enter email', 'Set new password', 'change password'];

function Forgotpassword() {
    const [activeStep, setActiveStep] = useState(0);
    const [users, setUsers] = useState([])
    const [change, setchange] = useState("")
    const [form, setForm] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate()
    const [skipped, setSkipped] = useState(new Set());
    // app get 
    useEffect(() => {
        axios.get(`http://localhost:4040/users`)
            .then((res) => {
                console.log(res.data);
                setUsers(res.data);
            })
            .catch(err => console.log(err))
    }, [])




    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {



        // Step-specific logic
        if (activeStep === 0) {
            const user = users.find((item) => item.email === form.email);
            setchange(user)


            if (!user) {
                alert("User not found! Please enter a valid email.");
                // return;
            }
        }

        if (activeStep === 1) {
            change.password = form.password
            console.log(change);

        }

        if (activeStep === 2) {
            axios.put(`http://localhost:4040/users/${change.id}`, change)
                .then((res) => {
                    console.log(res);
                    navigate("/login")
                })
                .catch((err) => console.log(err));



            setchange("")

        }



        if (change=="") {
            alert("enter")
        } else{
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
            setSkipped(newSkipped);
        }


    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    // Function to render content based on active step
    const renderStepContent = (step) => {
        switch (step) {
            case 0:
                return <div className="form-floating mb-3 w-75">
                    <input
                        type="email"
                        className="form-control"
                        id="floatingEmail"
                        placeholder="name@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                    <label htmlFor="floatingEmail">Email</label>
                </div>;
            case 1:
                return <div className="form-floating mb-3 w-75">
                    <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="New Password"
                        value={form.password}
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                    />
                    <label htmlFor="floatingPassword">New Password</label>
                </div>;
            case 2:
                return <div className="form-floating mb-3 w-75">
                    <h4>you password is change</h4>
                </div>;

            default:
                return null;
        }
    };

    return (
        <div className="container p-2 mt-5 d-flex justify-content-center">
            <div className="w-50 shadow py-3 px-4 text-center">
                <h1 className="mb-4">Forgot password</h1>
                <Box sx={{ width: '100%' }}>
                    <Stepper activeStep={activeStep}>
                        {steps.map((label, index) => {
                            const stepProps = {};
                            if (isStepSkipped(index)) {
                                stepProps.completed = false;
                            }
                            return (
                                <Step key={label} {...stepProps}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>
                    {activeStep === steps.length ? (
                        <React.Fragment>
                            <Typography sx={{ mt: 2, mb: 1 }}>
                                All steps completed - your password is reset
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Box sx={{ flex: '1 1 auto' }} />
                                <Button onClick={handleReset}>Reset</Button>
                            </Box>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <Typography sx={{ mt: 2, mb: 1 }}>
                                <div className=" d-flex justify-content-center">
                                    {renderStepContent(activeStep)}
                                </div>
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Button
                                    color="inherit"
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    sx={{ mr: 1 }}
                                >
                                    Back
                                </Button>
                                <Box sx={{ flex: '1 1 auto' }} />
                                <Button onClick={handleNext}>
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </Box>
                        </React.Fragment>
                    )}
                </Box>
            </div>
        </div>
    );
}

export default Forgotpassword;
