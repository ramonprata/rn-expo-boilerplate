import { TServerErrorDictionary } from '@shared/types';

export const SERVER_ERROR_DICTIONARY: TServerErrorDictionary = {
  unknown: {
    type: 'unknown',
    message: '',
  },
  empty: {
    type: 'empty',
    message: '',
  },
  notFound: {
    type: 'notFound',
    message: '',
  },
};

export const DEMO_FEAT_TEXTS = {
  labelCategory: 'category',
  labelType: 'type',
  btnGetJoke: 'Get a new joke',

  txtLoadingJoke: 'Loading a new joke',
  txtHearJoke: 'Wanna hear a Joke?',
  txtGoesLike: 'It goes like..',
};
