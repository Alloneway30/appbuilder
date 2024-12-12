import { AllCoursesType } from '../models/LearningApp/all-courses-type';
import { FetchApi } from './fetch-api';

export async function getAllCoursesList(): Promise<AllCoursesType[]> {
  return await FetchApi.fetchApiResponse<AllCoursesType[]>('https://excel2json.io/api/share/28f292a3-d187-48c4-e660-08dab79fa5b4', []);
}
