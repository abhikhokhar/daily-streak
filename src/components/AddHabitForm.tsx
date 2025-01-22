import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react'
import useHabitStore from '../store/store';

const AddHabitForm = () => {
    const [name, setName] = useState<string>("")
    const [frequency, setFrequency] = useState<"daily" | "weekly">("daily");

    const { addHabit } = useHabitStore();

    const changehandler: React.ChangeEventHandler<HTMLInputElement>=(e)=>{
        setName(e.target.value);
    }

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        if(name.trim()){
            addHabit(name,frequency);
            setName("")
        }
    }
    return (
        <form onSubmit={handleSubmit}>
        <Box
            sx={{
                display: "flex",
                flexDirection: "column", 
                gap: 2,
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", lg: "row" },
                    gap: 2,
                }}
            >
                <TextField
                    value={name}
                    onChange={changehandler}
                    label="Habit Name"
                    fullWidth
                    placeholder="Enter Streak"
                />
    
                <FormControl fullWidth>
                    <InputLabel>Frequency</InputLabel>
                    <Select
                        value={frequency}
                        label="Frequency"
                        onChange={(e) =>
                            setFrequency(e.target.value as "daily" | "weekly")
                        }
                    >
                        <MenuItem value="daily">Daily</MenuItem>
                        <MenuItem value="Weekly">Weekly</MenuItem>
                    </Select>
                </FormControl>
            </Box>
    
            {/* Button always below inputs */}
            <Button type="submit" variant="contained" color="primary">
                Add Habit
            </Button>
        </Box>
    </form>
    
    )
}

export default AddHabitForm