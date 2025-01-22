import { create } from "zustand";

export interface Habit{
    id: number;
    name: string;
    frequency: "daily" | "weekly";
    completedDates: string[];
    createdAt: string;
}

interface HabitState{
    habits: Habit[];
    addHabit: (name: string, frequency: "daily" | "weekly")=> void;
    removeHabit:(id:number)=> void;
    toggleHabit:(id:number, date: string)=> void;
}

const useHabitStore = create<HabitState>()((set)=>{
    const storedHabits = localStorage.getItem("userHabits")
    const initialState: Habit[] = storedHabits ? JSON.parse(storedHabits) : []; 
      return{
        habits: initialState,
        addHabit: (name, frequency: "daily" | "weekly")=>set((state)=>{
            return{
                habits:[...state.habits,{
                    id: Date.now(),
                    name,
                    frequency,
                    completedDates:[],
                    createdAt:new Date().toISOString()
                }]
            }
        }),
        removeHabit: (id)=>set((state)=>{
          const updatedHabits = state.habits.filter((habit)=> habit.id != id);
          localStorage.setItem("userHabits",JSON.stringify(updatedHabits));
          return {habits: updatedHabits}
        }

    ),
        toggleHabit:(id, date)=>set((state)=>{
            const updatedData = state.habits.map((habit)=>
            habit.id === id
            ? {
                ...habit, completedDates: habit.completedDates.includes(date)
                ? habit.completedDates.filter((d)=>d!==date) : [...habit.completedDates, date],
            }
            : habit
            )
            localStorage.setItem("userHabits",JSON.stringify(updatedData));
            return {habits: updatedData}
        })
      }
})

export default useHabitStore;