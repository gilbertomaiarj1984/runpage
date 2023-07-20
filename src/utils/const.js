// const
const MAPBOX_TOKEN =
  'pk.eyJ1IjoieWlob25nMDYxOCIsImEiOiJja2J3M28xbG4wYzl0MzJxZm0ya2Fua2p2In0.PNKfkeQwYuyGOTT_x9BJ4Q';
const MUNICIPALITY_CITIES_ARR = [
  '北京市',
  '上海市',
  '天津市',
  '重庆市',
  '香港特别行政区',
  '澳门特别行政区',
];
const MAP_LAYER_LIST = [
  'road-label',
  'waterway-label',
  'natural-line-label',
  'natural-point-label',
  'water-line-label',
  'water-point-label',
  'poi-label',
  'airport-label',
  'settlement-subdivision-label',
  'settlement-label',
  'state-label',
  'country-label',
];

// styling: set to `true` if you want dash-line route
const USE_DASH_LINE = true;
// styling: route line opacity: [0, 1]
const LINE_OPACITY = 0.4;
// styling: map height
const MAP_HEIGHT = 600;
//set to `false` if you want to hide the road label characters
const ROAD_LABEL_DISPLAY = true;

// IF you outside China please make sure IS_CHINESE = false
const IS_CHINESE = true;
const USE_ANIMATION_FOR_GRID = false;
const CHINESE_INFO_MESSAGE = (yearLength, year) => {
  const yearStr = year === 'Total' ? 'all years' : ` ${year} `;
  return `I have been running for over ${yearLength-1}, below shows stats from ${yearStr}`;
};
const ENGLISH_INFO_MESSAGE = (yearLength, year) =>
  `Running Journey with ${yearLength} Years, the table shows year ${year} data`;

// not support English for now
const CHINESE_LOCATION_INFO_MESSAGE_FIRST =
  'I have run in many locations across the world, I hope that I could light more on the map';
const CHINESE_LOCATION_INFO_MESSAGE_SECOND = 'Next Marathon Race shall be this winter, 6 majors: 0/6';

const INFO_MESSAGE = IS_CHINESE ? CHINESE_INFO_MESSAGE : ENGLISH_INFO_MESSAGE;
const FULL_MARATHON_RUN_TITLE = IS_CHINESE ? 'Full Marathon' : 'Full Marathon';
const HALF_MARATHON_RUN_TITLE = IS_CHINESE ? 'Half Marathon' : 'Half Marathon';
const MORNING_RUN_TITLE = IS_CHINESE ? 'Morning Run' : 'Morning Run';
const MIDDAY_RUN_TITLE = IS_CHINESE ? 'Lunch Run' : 'Midday Run';
const AFTERNOON_RUN_TITLE = IS_CHINESE ? 'Afternoon Run' : 'Afternoon Run';
const EVENING_RUN_TITLE = IS_CHINESE ? 'Evening Run' : 'Evening Run';
const NIGHT_RUN_TITLE = IS_CHINESE ? 'Night Run' : 'Night Run';

const RUN_TITLES = {
  FULL_MARATHON_RUN_TITLE,
  HALF_MARATHON_RUN_TITLE,
  MORNING_RUN_TITLE,
  MIDDAY_RUN_TITLE,
  AFTERNOON_RUN_TITLE,
  EVENING_RUN_TITLE,
  NIGHT_RUN_TITLE,
};

export {
  CHINESE_LOCATION_INFO_MESSAGE_FIRST,
  CHINESE_LOCATION_INFO_MESSAGE_SECOND,
  MAPBOX_TOKEN,
  MUNICIPALITY_CITIES_ARR,
  MAP_LAYER_LIST,
  IS_CHINESE,
  ROAD_LABEL_DISPLAY,
  INFO_MESSAGE,
  RUN_TITLES,
  USE_ANIMATION_FOR_GRID,
  USE_DASH_LINE,
  LINE_OPACITY,
  MAP_HEIGHT,
};

const nike = 'rgb(224,237,94)'; // if you want change the main color change here src/styles/variables.scss

// If your map has an offset please change this line
// issues #92 and #198
export const NEED_FIX_MAP = false;
export const MAIN_COLOR = nike;
export const PROVINCE_FILL_COLOR = '#47b8e0';
