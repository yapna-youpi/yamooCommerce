import React from 'react'
import { OutlinedInput, InputAdornment } from '@mui/material';

function Input({ val, id, name, label, error, required, type, change, handBlur, help }) {
	return <OutlinedInput name={name} type={type} label={label} value={val === 0 || val ? val : ""}
		required={required} error={error} fullWidth helperText={error && help} id={id}
		onChange={change ? change : () => { }}	
		onBlur={handBlur ? (e) => handBlur(e.target) : () => { }}
	/>
}

function Input2({ val, name, label, error, required, type, change, handBlur, help }) {
	return <OutlinedInput name={name} type={type} label={label} value={val}
		required={required} error={error} fullWidth helperText={error && help}
		onChange={change ? (e) => change(e.target) : () => { }}
		onBlur={handBlur ? (e) => handBlur(e.target) : () => { }}
	/>
}

function Phone({ val, name, label, error, required, type, change, handBlur, help }) {
	return <OutlinedInput name={name} type="tel" label={label} value={val === 0 || val ? val : null}
		required={required} error={error} fullWidth helperText={error && help}
		onChange={change ? (e) => change(e.target) : () => { }}
		onBlur={handBlur ? (e) => handBlur(e.target) : () => { }}
		InputProps={{
			startAdornment: <InputAdornment position="start">+237</InputAdornment>,
		}}
	/>
}

export { Input, Input2, Phone }
