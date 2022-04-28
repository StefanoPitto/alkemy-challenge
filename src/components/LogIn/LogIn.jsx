import React, { useContext } from "react";
import { Formik, Field, Form } from "formik";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import {
	StyledFormContainer,
	StyledContainer,
	Button,
	WarningDiv,
	StyledP,
	Loading,
} from "./LogInStyle";
import * as Yup from "yup";
import { RiErrorWarningLine } from "react-icons/ri";
import { CircularProgress } from "@mui/material";
export const LogIn = () => {
	const { logIn, loading } = useContext(AuthContext);
	return (
		<>
			{loading ? (
				<Loading>
					<CircularProgress />
				</Loading>
			) : (
				<StyledFormContainer>
					<Formik
						initialValues={{
							email: "",
							password: "",
						}}
						onSubmit={(values) => {
							logIn(values);
						}}
						validationSchema={SignupSchema}
					>
						{({ errors, touched }) => (
							<StyledContainer>
								<Form>
									<Field name="email" placeholder="Email" type="email" />
									{errors.email && touched.email ? (
										<WarningDiv>
											<RiErrorWarningLine />
											{errors.email}
										</WarningDiv>
									) : (
										<></>
									)}
									<Field
										name="password"
										placeholder="Password"
										type="password"
									/>
									{errors.password && touched.password ? (
										<WarningDiv>
											<RiErrorWarningLine />
											{errors.password}
										</WarningDiv>
									) : (
										<></>
									)}
									<Button>Log In</Button>
									<p>Olvidaste la contraseña?</p>
									<StyledP>Recuperar</StyledP>
								</Form>
							</StyledContainer>
						)}
					</Formik>
				</StyledFormContainer>
			)}
		</>
	);
};

const SignupSchema = Yup.object().shape({
	password: Yup.string()
		.min(2, "Too Short!")
		.max(50, "Too Long!")
		.required("Required"),
	email: Yup.string().email("Invalid email").required("Required"),
});
