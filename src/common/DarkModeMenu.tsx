import { NavDropdown } from 'react-bootstrap';
import { useTheme, useThemeList } from './ThemeProvider';

export default function DarkModeMenu(props: object) {
  const [currentTheme, setTheme] = useTheme();
  const themeList = useThemeList();
  return (
    <NavDropdown
      {...props}
      title={
        <>
          {
            themeList.find((theme) => theme.name.toLowerCase() === currentTheme)
              ?.icon
          }{' '}
        </>
      }
    >
      {themeList.map((theme) => {
        const active = currentTheme === theme.name.toLowerCase();
        return (
          <NavDropdown.Item
            key={theme.name}
            className={active ? 'active' : ''}
            onClick={() => {
              setTheme(theme.name.toLowerCase());
            }}
          >
            <>
              {' '}
              {theme.icon} {theme.name} {active ? '✔️' : ''}
            </>
          </NavDropdown.Item>
        );
      })}
    </NavDropdown>
  );
}
