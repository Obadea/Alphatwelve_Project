'use client';
import { Switch } from '@nextui-org/react';
import useThemeSwitcher from '../hooks/useThemeSwitcher';

const ThemeChanger = () => {
  const [mode, setMode] = useThemeSwitcher();
  return (
    <>
      <Switch
        isSelected={mode === 'dark'}
        onChange={() => {
          setMode(mode === 'light' ? 'dark' : 'light');
        }}
        size="sm"
        color="primary"
        classNames={{ wrapper: 'group-data-[selected=true]:bg-primary-dark' }}
      >
        Dark mode
      </Switch>
    </>
  );
};

export default ThemeChanger;
