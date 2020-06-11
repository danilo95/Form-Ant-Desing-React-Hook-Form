import React from "react";
import { useForm, Controller } from "react-hook-form";
import { inputField, SelectField, SwitchField } from "./Inputs";
import { Button } from "antd";

function Login(props) {
	const { handleSubmit, control, errors, reset } = useForm();
	const type = ["Student", "Developer", "other"];

	const onSubmit = (data) => {
		console.log(data)
		setTimeout(() => reset({
			FirstName:'',
			LastName:'',
			Email: '',
		}), 1000);

	};
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className='input-group'>
				<label className='label'>Firstname</label>
				<Controller
					as={inputField("FirstName")}
					name='FirstName'
					control={control}
					defaultValue=''
					rules={{ required: true }}
				/>
				{errors.FirstName && (
					<span className='error'>This field is required</span>
				)}
			</div>
			<div className='input-group'>
				<label className='label'>LastName</label>
				<Controller
					as={inputField("LastName")}
					name='LastName'
					control={control}
					defaultValue=''
					rules={{ required: true }}
				/>
				{errors.LastName && (
					<span className='error'>This field is required</span>
				)}
			</div>
			<div className='input-group'>
				<label className='label'>Email</label>
				<Controller
					as={inputField("Email")}
					name='Email'
					control={control}
					defaultValue=''
					rules={{
						pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
						required: true,
					}}
				/>
				{errors.Email && (
					<span className='error'>Please add a valid email</span>
				)}
			</div>
			<div className='input-group'>
				<label className='label'>Type of user</label>
				<Controller
					as={SelectField(type[0], type)}
					name='type'
					control={control}
					defaultValue={type[0]}
					rules={{
						required: true,
					}}
				/>
			</div>
			<div className='input-group'>
				<label className='label'>
					Want to suscribe to our journal?
				</label>
				<Controller
					as={SwitchField()}
					name='subscription'
					control={control}
					defaultValue={true}
				/>
			</div>
			<Button type='primary' htmlType='submit'>
				Register
			</Button>
		</form>
	);
}

export default Login;
