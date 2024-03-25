import { useDispatch, useSelector } from 'react-redux';

import {
  BottomNavigation,
  BottomNavigationAction,
} from '@mui/material';

import {
  Home as HomeIcon,
  FitnessCenter as WorkoutIcon,
  History as HistoryIcon,
} from '@mui/icons-material';

import { RootState } from '@/app/app';

import type { NavigationAction } from './interfaces/NavigationAction';

import { setNavigation } from '@/app/reducers/global';

const NavigationBar = () => {
  const dispatch = useDispatch();

  const value = useSelector((state: RootState) => state.global.navigation);

  const navigationActions: NavigationAction[] = [
    { label: 'Home', icon: HomeIcon },
    { label: 'Workout', icon: WorkoutIcon },
    { label: 'History', icon: HistoryIcon },
  ] satisfies NavigationAction[];

  const onChange = (newValue: string) => {
    dispatch(setNavigation(newValue));
  };


  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={onChange}
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Workout" icon={<WorkoutIcon />} />
      <BottomNavigationAction label="History" icon={<HistoryIcon />} />
    </BottomNavigation>
  );
};

export default NavigationBar;