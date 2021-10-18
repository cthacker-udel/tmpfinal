import COURSES from '../json/courses.json';
import { CourseType } from '../interfaces/course';
import React from 'react';

export const CourseContext = React.createContext<CourseType[]>(COURSES as CourseType[]);
