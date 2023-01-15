import ReactGA from 'react-ga';

export const GA_TRACKING_ID = parseInt(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);

/**
 * Custom tracking event for Google Analytics on a webpage visit.
 * 
 * @param {*} url 
 */
export const pageview = (url) => {
    ReactGA.pageview(url);
}

/**
 * Custom tracking event for Google Analytics on interaction (buttons, links, etc.)
 * 
 * @param {*} category The category of the event.
 * @param {*} action The value that will appear as the event action in Google Analytics Event reports.
 * @param {*} label The label of the event.
 * @param {*} value A non-negative integer that will appear as the event value.
 */
export const event = (category, action, label, value) => {
    ReactGA.event({
        category: category,
        action: action,
        label: label,
        value: value
    });
}
