export const splitValue = (value: number | string, padSize: number = 2) => `${value}`.padStart(padSize, '0').split('');

export const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const playAudio = (path: string) => new Audio(path).play();

export const sendNotification = (title: string, options: object) => new Notification(title, options);