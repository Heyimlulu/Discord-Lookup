// Google Analytics
import ReactGA from 'react-ga';

export const pageViewTracking = (props) => {
    const pathname = props.match.path;

    let pageView;
    if (pathname === '*') pageView = '/not-found'
    else pageView = pathname;

    ReactGA.pageview(pageView);
}
