export const hideControls = (controls: string[] = []) =>
  Object.fromEntries(controls.map((key) => [key, { control: { type: null } }]));
