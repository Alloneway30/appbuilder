import { useCallback, useEffect, useState } from 'react';
import { AllCoursesType } from '../models/LearningApp/all-courses-type';
import { getAllCoursesList } from '../services/learning-app';

export const useGetAllCoursesList = () => {
  const [allCourses, setAllCourses] = useState<AllCoursesType[]>([]);

  const requestAllCourses = useCallback(() => {
    let ignore = false;
    getAllCoursesList()
      .then((data) => {
        if (!ignore) {
          setAllCourses(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestAllCourses();
  }, [requestAllCourses]);

  return { requestLearningAppAllCourses: requestAllCourses, learningAppAllCourses: allCourses, setLearningAppAllCourses: setAllCourses };
}
