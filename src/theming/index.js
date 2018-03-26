import defaultTheme from './default';
import darkTheme from './dark';

// const themeName = 'darkTheme';

export default (themeName) => ({...defaultTheme, ...{
    defaultTheme,
    darkTheme
}[themeName]})