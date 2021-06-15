import React from 'react'
import { FormControl, InputLabel, Select as MuiSelect, MenuItem, FormHelperText } from '@material-ui/core';

export default function Select(props) {

    const { name, label, value,err = null, onChange, options } = props;

    return (
        <FormControl variant="outlined" { ...(err && {err:true}) } >
            <InputLabel>{label}</InputLabel>
            <MuiSelect
                label={label}
                name={name}
                value={value}
                onChange={onChange}>
                <MenuItem value="">None</MenuItem>
                {options.map(
                    item => (
                        <MenuItem key={item.id} value={item.id}>
                            {item.title}
                        </MenuItem>
                    )
                )}
            </MuiSelect>
            {err && <FormHelperText>{err}</FormHelperText>}
        </FormControl>
    )
}
