import { useEffect } from 'react';
import useHabitStore from '../store/store';
import { Box, Button, Grid, LinearProgress, Paper, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';

interface Habit {
    id: number;
    name: string;
    frequency: string;
    completedDates: string[];
}

const HabitList = () => {
    const { habits, removeHabit, toggleHabit } = useHabitStore();
    const today = new Date().toISOString().split("T")[0];

    const getStreak = (habit: Habit)=>{
        let streak = 0;
        const currDate = new Date();

        while(true){
            const datestring = currDate.toISOString().split("T")[0];
            if (habit.completedDates.includes(datestring)){
                streak ++;
                currDate.setDate(currDate.getDate()-1)
            }else{
                break;
            } 
        }
        return streak;

    }

    useEffect(() => {
        localStorage.setItem("userHabits", JSON.stringify(habits));
    }, [habits]); 

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                mt: 4,
            }}
        >
            {habits.map((habit) => (
                <Paper
                    key={habit.id}
                    elevation={2}
                    sx={{
                        p: 2,
                        textAlign: "start",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Grid container alignItems="center" spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h6">{habit.name}</Typography>
                            <Typography variant="body2" color="text.secondary">
                                {habit.frequency}
                            </Typography>
                            <Typography sx={{ mt: 2 }}>Current Streak: {getStreak(habit)}</Typography>
                            <LinearProgress sx={{mt: 1}} variant='determinate' value={(getStreak(habit)/30)*100}/>
                    </Grid>

                        <Grid item xs={12} sm={6}>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: { xs: "center", sm: "flex-end" },
                                    alignItems: "center",
                                    gap: 1,
                                    mt: { xs: 2, sm: 0 },
                                }}
                            >
                                <Button
                                    variant="outlined"
                                    onClick={() => toggleHabit(habit.id, today)}
                                    color={
                                        habit.completedDates.includes(today)
                                            ? "success"
                                            : "primary"
                                    }
                                    startIcon={<CheckCircleIcon />}
                                >
                                    {habit.completedDates.includes(today)
                                        ? "Completed"
                                        : "Mark Done"}
                                </Button>

                                <Button
                                    variant="outlined"
                                    color="error"
                                    startIcon={<DeleteIcon />}
                                    onClick={() => removeHabit(habit.id)}
                                >
                                    Remove
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>

            ))}

        </Box>
    );
};

export default HabitList;
