interface NavigationAction {
  label: string
  icon: any
}

export type { NavigationAction };

const Navigation = {
  home: "Home",
  Workout: "Workout",
  History: "History",
} as const;
