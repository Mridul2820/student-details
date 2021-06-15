import React from 'react'
import { FormControl, RadioGroup as MuiRadioGroup, FormControlLabel, Radio } from '@material-ui/core';

export default function RadioGroup(props) {

    const { name, value, onChange, items } = props;

    return (
        <FormControl>
            <MuiRadioGroup row
                name={name}
                value={value}
                onChange={onChange}>
                {items.map(
                    item => (
                        <FormControlLabel key={item.id} value={item.id} control={<Radio />} label={item.title} />
                    )
                )}
            </MuiRadioGroup>
        </FormControl>
    )
}
