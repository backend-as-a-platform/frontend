// Common tailwind classes

const linkPrimary = 'text-blue-600 dark:text-blue-400 link-hover';
const textInput =
  'input input-bordered bg-gray-50 text-gray-900 block w-full p-2.5 dark:text-white dark:bg-gray-600 dark:placeholder-gray-400';
const baseLabel = 'font-medium text-gray-900 dark:text-gray-300';
const textLabel = `block mb-2 text-sm ${baseLabel}`;
const tooltipPrimary = 'tooltip tooltip-open tooltip-bottom tooltip-primary';
const tooltipSuccess = 'tooltip tooltip-open tooltip-bottom tooltip-success';
const tooltipError = 'tooltip tooltip-open tooltip-bottom tooltip-error';

export {
  linkPrimary,
  textInput,
  textLabel,
  baseLabel as checkBoxLabel,
  tooltipPrimary,
  tooltipSuccess,
  tooltipError,
};
