export const hideControls = (controls: string[] = []) => {
  return Object.fromEntries(controls.map((key) => [key, { control: { type: null } }]));
};
