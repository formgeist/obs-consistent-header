import { pinExtraAction } from './pin_extra_action';

export const SolutionLinks = [
  {
    label: 'APM',
    href: '/apm/',
    iconType: 'apmApp',
    extraAction: pinExtraAction,
  },
  {
    label: 'Metrics',
    href: '/metrics/',
    iconType: 'metricsApp',
    extraAction: pinExtraAction,
  },
  {
    label: 'Logs',
    href: '/logs/',
    iconType: 'logsApp',
    extraAction: pinExtraAction,
  },
  {
    label: 'Uptime',
    href: '/uptime/',
    iconType: 'uptimeApp',
    extraAction: pinExtraAction,
  },
  {
    label: 'Maps',
    href: '/#/chrome/nav-drawer',
    iconType: 'gisApp',
    extraAction: pinExtraAction,
  },
  {
    label: 'SIEM',
    href: '/#/chrome/nav-drawer',
    iconType: 'securityAnalyticsApp',
    extraAction: pinExtraAction,
  },
];
