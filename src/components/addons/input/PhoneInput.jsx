import React from 'react'
import PhoneInput from 'react-phone-number-input';
import Tooltip, { tooltipClasses } from '@material-ui/core/Tooltip';
import { IoAlertCircleOutline } from 'react-icons/io5'
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import 'react-phone-number-input/style.css'

import './phone-input.css'


const useStyles = makeStyles((theme) => ({
    span: {
        margin: theme.spacing(1),
    },
    customWidth: {
        maxWidth: 100,
    },
    noMaxWidth: {
        maxWidth: 250,
    },
}));

function InputPhone({ label, name, val, id, error, help, change, handBlur, country, all, cm, alert }) {
    const { t } = useTranslation();
    // console.log("the country ", country) for tooltip of country which services are unavalable
    const classes = useStyles();
    const longText = `${t('tooltip')}`

    return (
        <div className="input-phone">
            <label htmlFor=""> {label} </label>
            <div className="phono">
                <div className="phono-input">
                    <PhoneInput name={name} id={id}
                        // countries={['CM', 'SN', 'BF', 'CI', 'ML', 'GN']}
                        value={val}
                        countries={!all ? (cm ? ['CM'] : ['CM', 'SN', 'CI']) : null}
                        // countries={null}
                        defaultCountry={country || 'CM'} international countryCallingCodeEditable={false}
                        onChange={(value) => change(name, value)}
                        onBlur={handBlur ? (e) => handBlur(e.target) : () => { }}
                    />
                </div>
                <div className="tooltip-input">
                    {alert ? (<Box ><Tooltip title={longText} placement="top" arrow>
                        <span className={classes.button}><IoAlertCircleOutline size={25} color="#f39c12" /></span>
                    </Tooltip></Box>) : ''}
                </div>
            </div>
            <span>{error && help}</span>
        </div>
    )
}

export default InputPhone
