import ReactGA from 'react-ga';

/**
 * Add custom tracking event for Google Analytics on a web page
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