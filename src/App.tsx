import { Box, Container, Typography } from '@mui/material'
import './App.css'
import AddHabitForm from './components/AddHabitForm';
import Habit_list from './components/Habit-list';

function App() {

  return (
    <>
      <Container>
        <Box>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            align="center"
            sx={{
              color: "primary.main", 
              fontSize: { xs: "1.75rem", sm: "2.5rem", lg: "3rem" }, 
              fontWeight: "bold", 
            }}
          >
            Dialy Streak
          </Typography>

          <AddHabitForm />
          <Habit_list />
        </Box>
      </Container>
    </>
  )
}

export default App
