import { courseTypes } from '../constants/course-types';

export default [
  {
    name: 'Book of Mormon',
    courseType: courseTypes.spiritual,
    suggestedAge: 3,
    outcome:
      'Basic understanding of the purpose the book of mormon and ability to enjoy studying it.',
    requirements: [
      'Summarize where the book of mormon came from',
      'Be able to tell the main message of the book of mormon',
      'Summarize their favorite story',
      'Share how they feel about the Book of Mormon',
    ],
  },
  {
    name: 'Lego',
    courseType: courseTypes.emotional,
    suggestedAge: 5,
    outcome:
      'Imporoved Motor skills and ability to create something they are proud of on their own.',
      requirements: [
        'Create something they enjoy using more than 10 legos without help',
        'Ability to share legos with others',
        'Ability to tell a story with legos',
      ]
  },
];
