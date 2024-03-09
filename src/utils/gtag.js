import ReactGA from 'react-ga4';
import { environment } from './environment';

export const GA_TRACKING_ID = parseInt(environment.googleAnalyticsId);

export const send = (hitType, page, title) => {
  ReactGA.send({
    hitType,
    page,
    title,
  });
};

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
    category,
    action,
    label,
    value,
  });
};
