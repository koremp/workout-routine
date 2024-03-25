'use client';

import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
} from '@mui/material';

import {
  Home as HomeIcon,
  FitnessCenter as WorkoutIcon,
  History as HistoryIcon,
} from '@mui/icons-material';

import {
  useAppSelector,
  useAppDispatch,
  useAppStore,
} from '../lib/hooks';


import type { NavigationAction } from './interfaces/NavigationAction';

import { setNavigation } from '@/lib/reducers/global';

const NavigationBar = () => {
  const store = useAppStore();
  const dispatch = useAppDispatch();

  const navigation = useAppSelector(state => state.global.navigation);

  const onChange = (event: any, newValue: number) => {
    dispatch(setNavigation(newValue));
  };

  return (
    <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
      <BottomNavigation
        showLabels
        value={navigation}
        onChange={onChange}
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Workout" icon={<WorkoutIcon />} />
        <BottomNavigationAction label="History" icon={<HistoryIcon />} />
      </BottomNavigation>
    </Paper>
  );
};

export default NavigationBar;